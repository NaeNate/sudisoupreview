import { collection, getDocs } from "firebase/firestore"
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import styles from "../styles/Index.module.css"

const Index: NextPage = () => {
  const [reviews, setReviews] = useState<JSX.Element[]>([])

  useEffect(() => {
    setReviews([])

    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"))

      querySnapshot.forEach((review) => {
        setReviews((reviews) => [
          ...reviews,
          <div key={review.id}>
            <p>{new Date(review.data().timestamp).toDateString()}</p>
            <p>
              {review.data().rating} - {review.data().flavor}
            </p>
          </div>,
        ])
      })
    }

    fetchReviews()
  }, [])

  return (
    <>
      <h1 className={styles.header}>Sudi Soup Review</h1>
      <h3>Latest Reviews</h3>
      <div>{reviews}</div>
    </>
  )
}

export default Index
