import styles from "./postCard.module.scss"

interface IPostCard {
  post: {
    author: string
    createdAt: string
    title: string
  }
}

export function PostCard({ post: { author, createdAt, title } }: IPostCard) {
  return (
    <div className={styles.post__card}>
      <p>
        By <span className={styles.post__author}>{author}</span> | {createdAt}
      </p>
      <h4>{title}</h4>
    </div>
  )
}
