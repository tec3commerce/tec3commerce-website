import Link from 'next/link';
import styles from './SimpleFooter.module.css';

export default function SimpleFooter() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <img src="/assets/logo-tec3.png" alt="Tec3 Commerce" className={styles.logo} />
      </Link>
      <span>Parceira Olist OURO · Parceira oficial Stone · Agência parceira Nuvemshop</span>
      <a href="https://www.instagram.com/tec3commerce_/">@tec3commerce_</a>
    </footer>
  );
}
