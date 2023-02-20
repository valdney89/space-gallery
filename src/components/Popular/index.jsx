import React from 'react'
import styles from './Popular.module.scss'
import photos from './photos-popular.json'

export default function Popular() {
  return (
    <aside className={styles.popular}>
        <h2>Populares</h2>
        <ul className={styles.popular__images}>
            {
                photos.map((photo) => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.path} alt={photo.alt} />
                        </li>
                    )
                })
            }
        </ul>
        <button>Ver mais fotos</button>
    </aside>
  )
}
