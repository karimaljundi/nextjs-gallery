import React from 'react'
import styles from './artpiece.module.css';
import Image from 'next/image';

export default function Artpeice({artwork, Artist}) {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
        <img  className={styles.img} src={artwork.Poster} alt={artwork.Title} width={300} height={300} />
    </div>
    <div className={styles.textContainer}>
        <h1 className={styles.title}>{artwork.Title}</h1>
        <div className={styles.detail}>
<div className={styles.detailText}>
    <span className={styles.detailTitle}>Artist</span>
    <span className={styles.detailValue}>{Artist}</span>
</div>
<div className={styles.detailText}>
<span className={styles.detailTitle}>Year</span>
<span className={styles.detailValue}>{artwork.Year}</span>
</div>
        </div>
        <div className={styles.content}>
            {artwork.Description}
        </div>
    </div>

    </div>
  )
}
