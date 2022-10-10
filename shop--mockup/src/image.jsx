import React from "react";
import { Context } from './context'

function Image(props) {

    const [hover, setHover] = React.useState(false)
    const [added, setAdded] = React.useState(false)

    const {toggleFav, AddToCart, RemoveFromCart} = React.useContext(Context)

    function isHovered() {
        return(
            setHover(prevHover => !prevHover)
        )
    }

    const styles = {
        opacity: hover ? '1' : '0'
    }

    function HeartIcon() {
        if(props.img.isFavorite) {
            return (
            <i className={`heart ${classname}`}
            onClick={() => toggleFav(props.img.id)}></i>
                )
        } else {
            return(
            <i className={`heart ${classname}`} style={styles}
             onClick={() => toggleFav(props.img.id)}></i>
            )
        }
    }

    function PlusIcon() {
        if(added) {
            return(
                <i className="plus ri-checkbox-circle-line" onClick={removeItems}></i>
            )
        } else {
            return(
                <i className="plus ri-add-circle-line" style={styles} onClick={AddTo}></i>
            )
        }
    }

    function AddTo() {
        AddToCart(props.img)
        setAdded(prevAdded => !prevAdded)
    }

    function removeItems() {
        RemoveFromCart(props.img)
        setAdded(prevAdded => !prevAdded)
    }

    const classname = props.img.isFavorite ? 'ri-heart-2-fill' : 'ri-heart-2-line'

    return(
        <div className={`${props.className} image--container`}
        onMouseEnter={isHovered} onMouseLeave={isHovered}>
            {HeartIcon()}
            {PlusIcon()}
            <img src={props.img.url} className="image--grid" alt="image" />
        </div>
    )
}

export default Image