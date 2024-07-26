import React, { FormEvent, useState } from 'react'
//import { Button, Input, Form } from './styles'
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
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
    // <Form onSubmit={aoEnviarForm}>
    //   <Input
    //     placeholder="Front-end, fullstack, node, design"
    //     onChange={(e) => setTermo(e.target.value)}
    //     type="search"
    //   />
    //   <Button type="submit">Pesquisar</Button>
    // </Form>
  )
}

export default FormVagas
