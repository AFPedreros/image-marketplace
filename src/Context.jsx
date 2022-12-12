import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);

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

    console.log(allPhotos);

    return (
        <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>
    );
}

export { ContextProvider, Context };
