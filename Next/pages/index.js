import Link from 'next/link';
const linkStyle = {
  marginRight: '20px',
};
const MyFirstView = () => (
  <section>

    <center>
    <h1 className="hello">Hello tu my first Next App</h1>
    <p className="p">Selec here where you want to go</p>
    <Link href='/template/profile'>
      <a className="href" style={linkStyle}>Profile</a>
    </Link>
    <Link href='/template/api'>
      <a className="href" style={linkStyle}>Api</a>
    </Link>
    <Link href='/template/form'>
      <a className="href" style={linkStyle}>Lista</a>
    </Link>
    </center>
  </section>
);
export default MyFirstView;