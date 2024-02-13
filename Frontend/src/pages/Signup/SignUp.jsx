import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
  
  const [inputs,setInputs]= useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:"",
  })
  const {signup ,loading }= useSignUp();
  const handleCheckBoxChange=(gender)=>
  {
    setInputs({...inputs,gender:gender})
  }
  const HandleSubmit= async (e)=>
  {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
    
    
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign up
					<span className='text-blue-500'> Talkie</span>
				</h1> 

        <form onSubmit={HandleSubmit}>
          <div>
        <label className='label p-2'>
        <span className='text-base label-text'>Full Name</span>
        </label>
        <input
						type='text'
						placeholder='John Doe'
						className='w-full input input-bordered h-10'
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
            </div>
            <div>
                <label className='label p-2'>
							  <span className='text-base label-text'>Username</span>
						    </label>
              <input
							  type='text'
							  placeholder='John'
							  className='w-full input input-bordered h-10'
                value={inputs.username}
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
                </div>
            <div>
                <label className='label p-2'>
							  <span className='text-base label-text'>Password</span>
						    </label>
              <input
							  type='text'
							  placeholder='Enter Password'
							  className='w-full input input-bordered h-10'
                value={inputs.password}
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
                </div>
            <div>
                <label className='label p-2'>
							  <span className='text-base label-text'>Confirm Password</span>
						    </label>
              <input
							  type='text'
							  placeholder='Confirm Password'
							  className='w-full input input-bordered h-10'
                value={inputs.comfirmPassword}
                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
                </div>

                
                <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
          <Link to="/login"  className='link hover:text-blue-500 mt-4'>
            Already have an account?
          </Link>
          <div>
          <button className='btn btn-block mt-2 btn-sm'>
            Sign Up
          </button>
          </div>
          </form>
      </div>
   </div>
  )
}

export default SignUp