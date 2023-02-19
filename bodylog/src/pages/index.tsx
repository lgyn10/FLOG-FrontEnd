import Link from 'next/link';
import router from 'next/router';

function Home() {
  return (
    <>
      <button onClick={() => router.push('./register')}>테스트 하이</button>
    </>
  );
}
export default Home;
