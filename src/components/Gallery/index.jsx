import React from 'react'
import Tags from '../Tags'
import styles from './Gallery.module.scss'
import photos from './photos.json'
import open from '../../assets/images/open.png'
import favorite from '../../assets/images/favorito.png'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <ul className={styles.gallery__cards}>
            {
                photos.map((photo) => {
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
