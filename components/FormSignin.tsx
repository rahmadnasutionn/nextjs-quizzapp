import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import TextInput from './TextInput'

export default function FormInput() {
  const { user, signin } = useAuth();
  const [error, setError] = useState('');
    const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await signin(form.email, form.password);
      router.push('/');
    } catch (error) {
      setError('Invalid Credentials');
    }
  };
  return (
    <>
      <Head>
      <title>Quiz | Signin</title>
      <meta name="description" content="test your knowledge with our quiz" />
      <meta property='og:title' content='test your knowledge with our quiz' />
      <meta property='og:description' content='test your knowledge with our quiz' />
      <meta property='og:image' content='https://imageurlkalian' />
      <meta property='og:url' content='http://localhost:3000/' />
    </Head>

      <form className='max-w-[400px] border-t border-gray-500 w-[90vw] bg-white mx-auto my-12 py-8 px-9'>
        <h3 className='text-2xl mb-4 text-gray-400 text-center tracking-tighter'>Signin</h3>
         {error && <p className='text-white text-center bg-red-700'>{error}</p> }
        <TextInput
          label='Email'
          placeholder='Enter your email'
          name='email' 
          type='email'
          value={form.email}
          handleChange={handleChange}
        />
        <TextInput
          label='Password'
          placeholder='Enter your password'
          name='password'
          type='password'
          value={form.password}
          handleChange={handleChange}
        />
        <button type='button' className='cursor-pointer text-white border-transparent inline-block capitalize py-[0.375rem] px-3 bg-gray-700 hover:bg-slate-800 transition-all duration-200 font-normal text-lg tracking-[1px] rounded w-full mb-2' onClick={handleSubmit}>Submit</button>
        <p className='text-center tracking-[1px]'>
            Not a member yet?
            <Link href='/signup' className='underline text-blue-600 ml-1'>Register</Link>
        </p>
      </form>
    </>
  )
}
