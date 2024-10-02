import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select>
                <option>
                    ??
                </option>
            </select>
        </div>
    )
}