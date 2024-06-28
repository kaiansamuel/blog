import styles from './Footer.module.css'

const Footer = () => {
  const today = new Date()
  const formattedDate = today.getFullYear()
  return (
    <footer className={styles.footer}>
      <h1>Escreva sobre o que você tem interesse!</h1>
      <p>Feito por Kaian Samuel {formattedDate}</p>
    </footer>
  )
}

export default Footer