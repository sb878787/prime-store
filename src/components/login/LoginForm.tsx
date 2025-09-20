'use client';

import { useState } from 'react';
import Cookie from 'js-cookie';
import { redirect } from 'next/navigation';
// import axios from 'axios';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // const data = axios({
    //   url: 'http://localhost:3000/api/login',
    //   method: 'POST',
    //   data: {
    //     userName: userName,
    //     password: password,
    //   },
    // });

    const response = {
      token: 'aakhsodhaOJV[v56sd546sg6s5b16w5es5df4faew6fwe6f5e65',
      expire: 7,
    };

    Cookie.set('token', response.token, { expires: response.expire });
    redirect('/dashboard');
  };

  return (
    <div className="border p-4 flex flex-col w-72 mx-auto mt-20">
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <input type="password" className="mt-2" onChange={(e) => setPassword(e.target.value)} />

      <button className="mt-2" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
