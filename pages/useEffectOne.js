import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../styles/useEffectOne.module.css"

export default function useEffectOne() {

    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })

    return (
        <>
            <div className={styles.div}>
                <Link href="/" className={styles.text}>Home</Link>

                <div className={styles.text2}>
                    useEffectOne
                </div>
                <div className={styles.text3}>
                    {number}
                </div>
            </div>
        </>

    )
}