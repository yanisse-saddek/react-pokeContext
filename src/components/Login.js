import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" {...register('username', {required:true, minLength:6, maxLength:15})} placeholder="username" />
      <input name="password" {...register('password', {required:true, minLength:6, maxLength:15})} placeholder="password" />
      {errors.username && <p>username invalid</p>}
      {errors.password && <p>password invalid</p>}
     
      <button className="button" type="submit" onClick={()=>{console.log(errors.username)}}>Submit</button>
    </form>
  );
}