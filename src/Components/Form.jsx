import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
const Form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues
    } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        reset();
    }

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)} 
            className='grid gap-2 place-content-center my-20'>
            <input {
                ...register("email", {
                    required: "Email is required",
                })
            }
                className='px-5 py-3 rounded-lg border' type="email" placeholder='Email' />
                {
                    errors.email && (
                        <p className='text-red-600'>{`${errors.email.message}`}</p>
                    )
                }
            <input {
                ...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 10,
                        message: "Password must be 10 characters"
                    }
                })
            }
                className='px-5 py-3 rounded-lg border' type="password" placeholder='Password'/>
                {
                    errors.password && (
                        <p className='text-red-600'>{`${errors.password.message}`}</p>
                    )
                }
            <input {
                ...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: value => 
                        value === getValues("password") || "Passwords don't match"
                })
            }
                className='px-5 py-3 rounded-lg border' type="password" placeholder='Confirm Password'/>
                {
                    errors.confirmPassword && (
                        <p className='text-red-600'>{`${errors.confirmPassword.message}`}</p>
                    )
                }
            <button type="submit"
                className='mt-5 bg-blue-500 rounded-lg px-3 py-2 text-white hover:bg-blue-700 cursor-pointer'
                disabled={isSubmitting}
            >{
                isSubmitting ?
                 <div className='grid place-content-center'>
                    <ClipLoader
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                 </div> : 
                 <p>Submit</p>
            }</button>
            <button onClick={handleGoBack} className='cursor-pointer px-3 py-2 bg-base-300 rounded-lg'>
                Go back
            </button>
        </form>
    );
};

export default Form;