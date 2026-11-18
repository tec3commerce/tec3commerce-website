import Link from 'next/link';

export default function SimpleFooter() {
  return (
    <footer
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '56px clamp(20px,4vw,48px) 36px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: '#5D5E6D',
        borderTop: '1px solid rgba(22,23,43,.1)',
      }}
    >
      <Link href="/">
        <img
          src="/assets/logo-tec3.png"
          alt="Tec3 Commerce"
          style={{ height: '30px', width: 'auto', display: 'block' }}
        />
      </Link>
      <span>Parceira Olist OURO · Parceira oficial Stone · Agência parceira Nuvemshop</span>
      <a href="https://www.instagram.com/tec3commerce_/">@tec3commerce_</a>
    </footer>
  );
}
