import { useState } from "react";
import { Botao } from "../Botao";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./formulario.css"

export const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const enviarFormulario = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={enviarFormulario}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="cargo"
                    valor={cargo}
                    aoAlterado={cargo => setCargo(cargo)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="endereço da imagem"
                    valor={imagem}
                    aoAlterado={imagem => setImagem(imagem)}
                />
                <ListaSuspensa
                    label="Time"
                    itens={times} 
                    valor={time}
                    aoAlterado={time => setTime(time)}
                    />
                    
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario