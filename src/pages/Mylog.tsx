import Nav from '@/components/Nav/Nav';
import UnderNav from '@/components/Nav/UnderNav';
import { idState, jsonState, memberIdState } from '@/store/store';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

function Mylog() {
  axios.defaults.withCredentials = true;
  const [globalJson, setGlobalJson] = useRecoilState(jsonState);
  const globalId = useRecoilValue(idState);
  useEffect(() => {
    const url = `/api/${globalId}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem('logintoken'),
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setGlobalJson(response.data);
        console.log(globalJson);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);
  console.log('after useEffect');
  console.log(globalJson);
  return (
    <>
      <Nav />
      <h1>Mylog page</h1>
      <UnderNav />
    </>
  );
}
export default Mylog;
