import React, { useEffect } from 'react';

interface ILoginProps {
  menuData: any[];
}

const Login = (props: ILoginProps) => {
  console.log(props?.menuData);

  useEffect(() => {
    console.log(111);
  }, []);
  return (
    <>
      {props?.menuData?.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}

      <div>123456</div>
    </>
  );
};
export default Login;

export async function getServerSideProps() {
  const res = await fetch(
    'https://mock.apifox.com/m1/3277855-0-default/api/getMenueList'
  );
  const data = await res.json();
  return {
    props: {
      menuData: data.data.menuData,
    },
  };
}
