import React, { FormEvent, useState } from 'react'
import { Button, Input, Form } from './styles'
import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <Form>
      <Input />
      <Button>Pesquisar</Button>
    </Form>
  )
}

export default FormVagas
