import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({tags, filterPhotos, onResetFilter}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__list}>
            <li onClick={onResetFilter}>Todas</li>
            {
                tags.map(tag => <li key={tag} onClick={() => filterPhotos(tag)}>{tag}</li>)
            }
        </ul>
    </div>
  )
}
