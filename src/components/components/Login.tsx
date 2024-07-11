import React from 'react'
import { Button } from '@/components/ui/button'
import { SiGithub } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { Input } from "@/components/ui/input"

const Login = () => {
  return (
    <div className='border rounded-lg px-8 py-12'>
        <h2 className='font-extrabold text-3xl'>Create an account</h2>
        <h3>Enter your email below to create your account</h3>

        <div className='flex justify-around my-4'>
            <Button variant="outline"><SiGithub  className='mx-2'/>GitHub</Button>
            <Button variant="outline"><FaGoogle className='mx-2'/>Google</Button>
        </div>

        <h3 className='text-xs flex justify-center'>-----OR CONTINUE WITH-----</h3>
        <h1 className='font-bold text-l mt-3'>
            Email
        </h1>
        <Input placeholder='Email' className='outline-none'/>
        <h1 className='font-bold text-l mt-3'>
            Password
        </h1>
        <Input placeholder='Password' type='password' className='outline-none mb-3' />

        <Button className='w-full mt-3 hover:bg-slate-700'>Create Account</Button>
     
    </div>
    
  )
}

export default Login