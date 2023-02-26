import dynamic from 'next/dynamic';
import React from 'react'

const DynamicFormSignup = dynamic(() => import('@/components/FormSignup'));

export default function SignupPage() {
  return (
    <section className='grid items-center min-h-screen'>
      <DynamicFormSignup /> 
    </section>
  )
}
