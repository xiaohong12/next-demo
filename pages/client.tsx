import React, { useEffect, useState } from 'react';

interface ILoginProps {
  menuData: any[];
}

const Login = (props: ILoginProps) => {
  const [list, setList] = useState<[]>([]);
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const res = await fetch(
      'https://mock.apifox.com/m1/3277855-0-default/api/getMenueList'
    );
    let data = await res?.json();
    setList(data.data.menuData);
  };
  return (
    <>
      {list?.map((item: any, index) => {
        return <div key={index}>{item.name}</div>;
      })}

      <div>123456</div>
    </>
  );
};
export default Login;
