import styles from "./postCard.module.scss"

interface IPostCard {
  post: {
    author: string
  }
}

export function PostCard({ post: { author } }: IPostCard) {
  return (
    <div className={styles.post__card}>
      <p>
        By <span className={styles.post__author}>{author}</span> | May 23, 2023
      </p>
      <h4>8 Figma design systems that you can download for free today.</h4>
    </div>
  )
}
