import React, { Component } from 'react'
import Slider from 'react-slick'

import { albumsService } from '../../services/AlbumsService'

import AlbumImage from './AlbumImage'

import './AlbumImageSlider.css'

const defaultSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
}

class AlbumImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.loadImages()
    }

    async loadImages(page = 1) {
        const { albumId } = this.props
        const { images } = this.state

        const nextImages = await albumsService.fetchPhotos(albumId, page)

        this.setState({
            images: [...images, ...nextImages]
        })
    }

    render() {
        const settings = {
            ...defaultSettings
        }

        const { images } = this.state
        return (
            <Slider ref={c => (this.slider = c)} {...settings}>
                {images.map(image => (
                    <AlbumImage image={image} key={image.id} />
                ))}
            </Slider>
        )
    }
}

export default AlbumImageSlider
