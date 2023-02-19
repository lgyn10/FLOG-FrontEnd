import Login from "./Login";

function Home() {
import Link from 'next/link';
import router from 'next/router';

function Home() {
  return (
    <>
     <Login/>
      <button onClick={() => router.push('./register')}>테스트 하이</button>
    </>
  );
}

export default Home;



