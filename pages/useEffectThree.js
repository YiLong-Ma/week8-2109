import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/useEffectThree.module.css'

export default function useEffectThree() {

    const [number, setNumber] = useState(0)
    const [value, setValue] = useState(-10)

    useEffect(() => {
        setValue(value + 10);
    }, [number])

    return (

        <>
            <div className={styles.div}>
                <Link href="/" className={styles.text}>Home</Link>
                <div>
                    <button className={styles.button} onClick={() => setNumber(number + 1)}>Press Me</button>
                </div>
                <div className={styles.text2}>
                    useEffectThree
                </div>
                <div className={styles.text3}>
                    {value}
                </div>
            </div>

        </>
    )
}