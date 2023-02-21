import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "../styles/useEffectTwo.module.css"

export default function useEffectTwo() {

    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return (
        <>
            <div className={styles.div} >
                <Link href="/" className={styles.text}>Home</Link>
                <div className={styles.text2}>
                    useEffectTwo
                </div>
                <div className={styles.text3}>
                    {number}
                </div>
            </div>

        </>
    )
}