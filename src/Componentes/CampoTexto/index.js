import "./CampoTexto.css"

const CampoTexto = (props) => {

    // let valorDigitado = "julinhodoceu"

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`Digite seu ${props.placeholder}`} />
        </div>
    )
}

export default CampoTexto 