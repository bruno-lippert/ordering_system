import React, { useState } from 'react';
import * as S from '../pageStyles/login'
import { Login } from '../src/types/Login';

export default function Login() {
    const [login, setLogin] = useState<Login>({email: '', password: ''})

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, email: e.target.value})
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLogin({...login, password: e.target.value})
    }

  return (
    <S.Container>
      <S.Login>
        <h1>Login</h1>
        <input className='login' type="email" placeholder='email@mail.com' onChange={handleEmail}/>
        <input className='login' type="password" placeholder='password' onChange={handlePassword}/>
        <input className='submit' type="submit" value="Entrar"/>
      </S.Login>
    </S.Container>
  );
}
