import React, { Component } from 'react'
import { albumsService } from './../../services/AlbumsService'
import AlbumItem from './AlbumItem'

class AlbumsPage extends Component {
    state = {
        albums: []
    }

    componentDidMount() {
        this.loadAlbums()
    }

    async loadAlbums() {
        const albums = await albumsService.fetchAlbums()

        this.setState({ albums })
    }

    render() {
        const { albums } = this.state

        return (
            <>
                <h4 className="center-align">ALBUMS</h4>
                {albums.map(album => (
                    <AlbumItem album={album} key={album.id} />
                ))}
            </>
        )
    }
}

export default AlbumsPage
