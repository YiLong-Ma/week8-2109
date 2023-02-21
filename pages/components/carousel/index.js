import Image from "next/image"
import { useState } from "react"
import styles from "./carousel.module.css"

export default function Carousel() {

    const [img, setImg] = useState(0)

    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5);
            }
        } else if (change == "forward") {
            setImg(img + 1);

            if (img == 5) {
                setImg(0);
            }
        }
    }

    return (
        <>
            <main className={styles.main}>
                <div style={{
                    backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 500,
                    height: 300
                }} className={styles.Carousel}>
                    <Image
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={50}
                        height={50}
                        onClick={() => changeImage("backward")}
                        className={styles.leftArrow}
                    />

                    <Image
                        src={"/icons/rightArrow.png"}
                        alt={"/icons/rightArrow.png"}
                        width={50}
                        height={50} onClick={() => changeImage("forward")}
                        className={styles.rightArrow}
                    />
                </div>
            </main>
        </>
    )
}