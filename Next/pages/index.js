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
      <a className="href" style={linkStyle}>Api Simpsons</a>
    </Link>
    <Link href='/template/form'>
      <a className="href" style={linkStyle}>Lista</a>
    </Link>
    <Link href='/template/pokemon'>
      <a className="href" style={linkStyle}>Api pokemon</a>
    </Link>
    <Link href='/template/event/example'>
      <a className="href" style={linkStyle}>Event Scroll</a>
    </Link>
    <Link href='/template/memo/usememo'>
      <a className="href" style={linkStyle}>Memo</a>
    </Link>
    <Link href='/template/memo/memo'>
      <a className="href" style={linkStyle}>Memo2</a>
    </Link>
    <Link href='/mongo/index'>
      <a className="href" style={linkStyle}>Mongo</a>
    </Link>
    
    </center>
  </section>
);
export default MyFirstView;