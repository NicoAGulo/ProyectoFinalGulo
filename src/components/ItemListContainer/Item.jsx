import './Item.css'

function Item({onClick, label, bgColor, ubicacion, altText}){
    

    return(
        <div className='item' onClick={onClick} style={{backgroundColor:bgColor}}>
                {label}
                <div>
                <img src={ubicacion} alt={altText}></img>
                </div>
        </div>
    )
}

export default Item
