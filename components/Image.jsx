import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../src/Context";
import useHover from "../hooks/useHovered";

function Image({ className, img }) {
    const [hovered, ref] = useHover();
    const { toggleFavorite, addToCard, removeFromCart, cartItems } =
        useContext(Context);

    const heartIcon = hovered && (
        <i
            className="ri-heart-line favorite"
            onClick={() => {
                toggleFavorite(img.id);
            }}
        ></i>
    );
    const filledHeartIcon = (
        <i
            className="ri-heart-fill favorite"
            onClick={() => {
                toggleFavorite(img.id);
            }}
        ></i>
    );

    const cartIcon = hovered && (
        <i
            className="ri-add-circle-line cart"
            onClick={() => {
                addToCard(img);
            }}
        ></i>
    );
    const filledCartIcon = (
        <i
            className="ri-shopping-cart-fill cart"
            onClick={() => {
                removeFromCart(img.id);
            }}
        ></i>
    );

    return (
        <div className={`${className} image-container`} ref={ref}>
            <img src={img.url} className="image-grid" />
            {img.isFavorite ? filledHeartIcon : heartIcon}
            {cartItems.some((item) => item.id === img.id)
                ? filledCartIcon
                : cartIcon}
        </div>
    );
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
    }),
};

export default Image;
