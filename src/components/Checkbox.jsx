const Checkbox = (props) => {
    return (
        <label for={props.id}>
            <input type={props.type} value={props.value} name={props.name} id={props.id} />
        </label>
    )
}