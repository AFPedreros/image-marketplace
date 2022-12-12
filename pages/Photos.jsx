import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../src/Context";
import { getClass } from "../utils";

function Photos() {
    const { allPhotos } = useContext(Context);

    const imageElements = allPhotos.map((img, index) => {
        return <Image key={img.id} img={img} className={getClass(index)} />;
    });

    return <main className="photos">{imageElements}</main>;
}

export default Photos;
