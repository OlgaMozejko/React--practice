import React from "react";
import { Context } from './context'
import Image from './image'

function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}

function Photos() {
    
    const {allPhotos} = React.useContext(Context)

    const ImgElements = allPhotos.map(
        (photo, i) => {
            return(
                <Image key={photo.id} img={photo} className={getClass(i)} />
            )
        }
    )

    return(
        <section className="photo--section">
            {ImgElements}
        </section>
    )
}

export default Photos