import Head from 'next/head';
import Navbar from './NavBar';


export default function Layout({ children, UserButton }) {
  return (
    <>
      <Head>
        <title>Todolist</title>
      </Head>

      <Navbar UserButton={UserButton} />
      <div>
        {children}
      </div>
    </>
  );
}

