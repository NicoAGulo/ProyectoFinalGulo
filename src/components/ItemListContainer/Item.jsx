function Item({onClick, label, bgColor, ubicacion, altText}){
    const style = {
        display:"block",
        fontSize: "1rem",
        backgroundColor: bgColor,
        border: "15px",
        cursor: "pointer",
        marginTop: "1rem"
    }

    return(
        <div style={style} onClick={onClick}>
                {label}
                <div>
                <img src={ubicacion} alt={altText}></img>
                </div>
        </div>
    )
}

export default Item
