import React from "react";
import { useForm } from "react-hook-form";
import{useContext} from 'react'
import {UserContext} from '../App'

export default function Login() {
  const context = useContext(UserContext)
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log('1')
    if(context.Log == true){
      console.log('deconnexion')
      context.setAuth(false)
    }else{
      console.log('connexion')
      context.setAuth(true)
    }
  };
   return (
    <>
    <div className="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" {...register('username', {required:true, minLength:6, maxLength:15})} placeholder="Pseudo" />
      {errors.username && <span className="invalid">Le pseudo est invalide</span>}
      <input name="password" {...register('password', {required:true, minLength:6, maxLength:15})} placeholder="Mot de passe" />
      {errors.password && <span className="invalid">Le mot de passe est invalide</span>}
      <div>
       {context.Log==false?<button className="button" type="submit">SE CONNECTER</button>:null}
     </div>
    </form>
    {context.Log==true?<button className="button" onClick={onSubmit}>SE DECONNECTER</button>:null}
    </div>

    </>
  );
}
