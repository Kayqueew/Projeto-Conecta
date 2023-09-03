import React, { ChangeEvent, useState } from 'react'
import { Form, Input, Select, Textarea } from './styles'

export function FormContact() {
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, '')
    const formatted = cleaned.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3')

    return formatted
  }

  const options = [
    { value: '', text: 'Selecione um Assunto' },
    { value: 'Assunto 1', text: 'Assunto 1' },
    { value: 'Assunto 2', text: 'Assunto 2' },
    { value: 'Assunto 3', text: 'Assunto 3' },
  ]

  const [selected, setSelected] = useState(options[0].value)

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSelected(event.target.value)
  }

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formattedPhoneNumber = formatPhoneNumber(input)
    setPhoneNumber(formattedPhoneNumber)
  }

  return (
    <Form action="mailto:" method="POST" encType="text/plain">
      <label>
        NOME
        <Input type="text" name="Nome" placeholder="Nome" required />
      </label>
      <div>
        <label>
          TELEFONE
          <Input
            type="tel"
            name="Telefone"
            title="Número de telefone precisa ser no formato (99) 9999-9999"
            placeholder="(21) 00000-0000"
            maxLength={11}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </label>
        <label>
          E-MAIL
          <Input type="email" name="E-mail" placeholder="E-mail" />
        </label>
      </div>
      <label>
        ASSUNTO
        <Select value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </Select>
      </label>
      <label>
        MENSAGEM
        <Textarea name="Mensagem" required></Textarea>
      </label>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button type="submit">Aqui um CTA</button>
      </div>
    </Form>
  )
}
