import React from 'react'

const AlbumImage = ({ image }) => {
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-image">
                    <img src={image.thumbnailUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AlbumImage
