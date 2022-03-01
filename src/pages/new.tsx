import { collection, doc, setDoc } from "firebase/firestore"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { db } from "../firebase"
import styles from "../styles/New.module.css"

const New: NextPage = () => {
  const [rating, setRating] = useState("")
  const [flavor, setFlavor] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const s = document.getElementById("submit") as HTMLButtonElement
    s.disabled = true

    await setDoc(doc(collection(db, "reviews")), {
      rating,
      flavor,
      timestamp: Date.now(),
    })

    router.push("/")
  }

  return (
    <>
      <h1 className={styles.header}>New</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="flavor"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
        />
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </>
  )
}

export default New
