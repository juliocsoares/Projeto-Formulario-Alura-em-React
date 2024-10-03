import "./CampoTexto.css"

const CampoTexto = (props) => {

    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={`Digite seu ${props.placeholder}`} />
        </div>
    )
}

export default CampoTexto 