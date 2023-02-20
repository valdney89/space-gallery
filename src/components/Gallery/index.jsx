import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import open from '../../assets/images/open.png'
import favorite from '../../assets/images/favorito.png'

export default function Gallery() {

    const [itens, setItens] = useState(photos)
    const tags = [...new Set(photos.map(value => value.tag))]

    const filterPhotos = (tag) => {
        const newPhotos = photos.filter(photo => photo.tag === tag)

        setItens(newPhotos)
    }

    const resetFilter = () => {
        setItens(photos)
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} onResetFilter={resetFilter} />
            <ul className={styles.gallery__cards}>
                {
                    itens.map((photo) => {
                        return (
                            <li
                                key={photo.id}
                                className={styles.gallery__card}
                            >
                                <img 
                                    src={photo.image} 
                                    alt={photo.title}
                                    className={styles.gallery__image}
                                />
                                <p className={styles.gallery__description}>{photo.title}</p>
                                <div>
                                    <p>{photo.credits}</p>
                                    <span>
                                        <img src={open} alt="" />
                                        <img src={favorite} alt="" />
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
