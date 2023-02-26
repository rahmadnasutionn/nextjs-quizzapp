import { useAuth } from '@/context/AuthContext';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import TextInput from './TextInput';

export default function FormSignup() {
    const { signup } = useAuth();
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: ''
      });

      const handleChange = (event: any) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };

      const onSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await signup(form.email, form.password)
            router.push('/');
        } catch (error) {
          alert(error)
        }
      };
  return (
    <>
      <Head>
      <title>Quiz | Signup</title>
      <meta name="description" content="test your knowledge with our quiz" />
      <meta property='og:title' content='test your knowledge with our quiz' />
      <meta property='og:description' content='test your knowledge with our quiz' />
      <meta property='og:image' content='https://imageurlkalian' />
      <meta property='og:url' content='http://localhost:3000/' />
    </Head>

      <form className='max-w-[400px] border-t border-gray-500 w-[90vw] bg-white mx-auto my-12 py-8 px-9'>
        <h3 className='text-2xl mb-4 text-gray-400 text-center tracking-tighter'>Signup</h3>
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
        <button type='submit' className='cursor-pointer text-white border-transparent inline-block capitalize py-[0.375rem] px-3 bg-gray-700 hover:bg-slate-800 transition-all duration-200 font-normal text-lg tracking-[1px] rounded w-full mb-2' onClick={onSubmit}>Submit</button>
        <Link href='/signin' className='cursor-pointer text-white border-transparent inline-block capitalize py-[0.375rem] px-3 bg-blue-700 hover:bg-blue-800 text-center transition-all duration-200 font-normal text-lg tracking-[1px] rounded w-full mb-2'>
          Signin
        </Link>
      </form>
    </>
  )
}
