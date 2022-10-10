import React from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    const url ="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    async function FetchData() {
        const data = await fetch(url)
        const JData = await data.json()
        setAllPhotos(JData)
    }

    React.useEffect(() => {
        FetchData()
    }, [])

    function toggleFav(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    function AddToCart(item) {
        setCartItems(prevItems => [...prevItems, item])
    }

    function RemoveFromCart(item) {
        setCartItems(prevItems => {
            return(
                prevItems.filter(photo => photo.id !== item.id)
            )
        }) 
    }

    function EmptyCart() {
        setCartItems([])
    }

    return(
        <Context.Provider value={{allPhotos, toggleFav, AddToCart, RemoveFromCart, cartItems, EmptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}