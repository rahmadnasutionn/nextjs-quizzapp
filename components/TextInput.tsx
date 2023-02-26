import React from 'react'

interface TextInputProps {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    value: string;
    handleChange: (event: any) => void;
}

export default function TextInput(props: TextInputProps) {
    const { label, type, placeholder, handleChange, value, name } = props;
  return (
    <>
    <label className='block text-md mb-2 capitalize'>
      {label}
    </label>
    <input 
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      className='w-full py-[0.375rem] px-3 rounded-md border border-gray-400 outline-green-400 mb-4 placeholder:capitalize' 
    />
    </>
  )
}
