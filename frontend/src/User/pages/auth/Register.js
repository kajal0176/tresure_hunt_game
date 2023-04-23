import React from 'react'
import { useState, useRef, useEffect } from "react";
import "./style.css";
import { useForm, Controller } from "react-hook-form";
import { Card } from 'primereact/card';
import { Toast } from "primereact/toast";
import { Button } from 'primereact/button';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import authSlice, { signup } from '../../../reducer/auth.slice';
import { ProgressSpinner } from 'primereact/progressspinner';

const Register = () => {

  const toast = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLogedIn,user,loading} = useSelector(state => state.auth);

  useEffect(()=>{
    if (isLogedIn) {
      navigate("/gameIntro");
    }
  },[isLogedIn])

  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });



  const onSubmit = (data) => {
    // console.log(data)
    const __data = {
      email:data.email,
      password:data.password
    }
    if (data.password == data.confirmPassword) {
       dispatch(signup( __data))
        .unwrap()
        .then((res) => {
          console.log(res)
          navigate("/login");
        
        })
        .catch((err) => {
          console.log(err)
          toast.current.show({
            severity: "error",
            detail: err.message,
            life: 3000,
          });
        });
    } else{
      toast.current.show({
        severity: "error",
        detail: 'Password and Confirm Password must be same',
        life: 3000,
      });
    }
   
    }

  return (
    <div className='flex justify-content-center align-items-center mt-5'>
         <Toast ref={toast} />

        {
          loading? <ProgressSpinner  className='mt-8 pt-8'/>:     
          <Card className='w-5 mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="field flex flex-column justify-content-center p-3">
                <label htmlFor="userName">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true && "Please enter email.",
                    validate: (value) =>
                      value.trim().length > 0 || "email is required",
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      placeholder="Enter Email"
                      {...field}
                     
                    />
                  )}
                />
              </div>
              <div className="field flex flex-column justify-content-center p-3">
                <label htmlFor="userName">Password</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: true && "Please enter password.",
                    validate: (value) =>
                      value.trim().length > 0 || "password is required",
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      placeholder="Enter password"
                      {...field}
                     
                    />
                  )}
                />
              </div>
              <div className="field flex flex-column justify-content-center p-3">
                <label htmlFor="userName">Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: true && "Please enter confirm  password.",
                    validate: (value) =>
                      value.trim().length > 0 || "Confirm password is required",
                  }}
                  render={({ field, fieldState }) => (
                    <InputText
                      id={field.name}
                      placeholder="Confirm Your password"
                      {...field}
                     
                    />
                  )}
                />
              </div>        
              <div className='w-full flex justify-content-center gap-3 p-3'>
                <Button  label="SignUp" type='submit' className='w-full' severity="info" />
               </div> 
            </form>
            <div className='p-3'>
               <Button  label="Login" onClick={()=>{navigate("/login");}} className='w-full' severity="success" />   
              
            </div>
         </Card>
         }         
    </div>
  )
}

export default Register
