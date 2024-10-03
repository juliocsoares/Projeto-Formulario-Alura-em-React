import { Botao } from "../Botao";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./formulario.css"

export const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const enviarFormulario = (evento) => {
         evento.preventDefault()
         console.log ("Formulario enviado")
    }

    return (
        <section className="formulario">
            <form onSubmit={enviarFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio="true" label="Nome" placeholder="nome" />
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="cargo" />
                <CampoTexto label="Imagem" placeholder="endereço da imagem" />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario