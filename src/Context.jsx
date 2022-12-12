import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const url =
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setAllPhotos(json);
        }
        fetchData();
    }, []);

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map((photo) => {
            if (photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,
                };
            }
            return photo;
        });
        setAllPhotos(updatedArray);
    }

    function addToCard(newItem) {
        setCartItems((prevItems) => [...prevItems, newItem]);
    }

    function removeFromCart(id) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    function emptyCart() {
        setCartItems([]);
    }

    return (
        <Context.Provider
            value={{
                allPhotos,
                cartItems,
                toggleFavorite,
                addToCard,
                removeFromCart,
                emptyCart,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export { ContextProvider, Context };
