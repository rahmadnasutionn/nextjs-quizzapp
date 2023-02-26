import dynamic from 'next/dynamic';
import React from 'react';

const DynamicFormInput = dynamic(() => import('@/components/FormSignin'));
export default function SigninPage() {
  return (
    <section className='grid items-center min-h-screen'>
      <DynamicFormInput />
    </section>
  );
};
