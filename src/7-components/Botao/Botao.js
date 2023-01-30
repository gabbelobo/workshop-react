import React from "react"
import styles from "./Botao.module.scss"

const Botao = ({children}) => {
    return (
        <button className={styles.btn}>{children}</button>
    )
}

export default Botao