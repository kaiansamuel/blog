import styles from './Register.module.css'
import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input 
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
           />
        </label>
        <label>
          <span>Email</span>   
          <input 
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
           />
        </label>
        <label>
          <span>Senha:</span>   
          <input 
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
           />
        </label>
        <label>
          <span>Confirmação de Senha</span>   
          <input 
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
           />    
          <button className='btn'>Cadastrar</button> 
        </label>
      </form>
    </div>
  )
}

export default Register