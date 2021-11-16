import Link from 'next/link';
const linkStyle = {
  marginRight: '20px',
};
const MyFirstView = () => (
  <section>
    <Link href='/template/profile'>
      <a className="href" style={linkStyle}>Profile</a>
    </Link>
    <Link href='/template/first'>
      <a className="href" style={linkStyle}>Shows</a>
    </Link>
    <h1>Home</h1>
    <p>Hola Mundo</p>
  </section>
);
export default MyFirstView;