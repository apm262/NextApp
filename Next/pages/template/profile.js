import Link from 'next/link';
const linkStyle = {
  marginRight: '20px',
};
const Profile = () => (
  <section>
    <Link href='../'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='./first'>
      <a style={linkStyle}>Shows</a>
    </Link>
    <h1>Profile</h1>
    <p>Hola mundo desde Profile</p>
  </section>
);
export default Profile;