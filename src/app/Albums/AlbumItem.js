import React, { Component } from 'react'
import AlbumImage from './AlbumImage'
import { albumsService } from '../../services/AlbumsService'

class AlbumItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: props.album.photos || []
        }
    }

    navigateForward = async e => {
        e.preventDefault()

        const { id, photos } = this.props.album
        const nextPhotos = await albumsService.fetchPhotos(id)

        console.log(nextPhotos)

        this.setState({
            photos: [...photos, ...nextPhotos]
        })
    }

    render() {
        const { album } = this.props
        const { photos } = this.state

        return (
            <>
                <div className="row">
                    <h5>{album.title}</h5>
                    {photos.map(photo => (
                        <AlbumImage image={photo} key={photo.id} />
                    ))}
                </div>
                <div className="row">
                    <hr />
                </div>
            </>
        )
    }
}

export default AlbumItem
