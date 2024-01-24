import React, { useState } from 'react'

const ApplicationForm = () => {

    let [next, setNext] = useState('');
    let [next1, setNext1] = useState('hidden');
    let [next2,setNext2]=useState('hidden');
  
    const handlingformed = () => {
      controlform1.next();
      // console.log("hello");
    };
  
    let controlform1 = controlform();
  
    function* controlform() {
      setNext('hidden');
      setNext1('visible');
      yield 'First Step';
      setNext1('hidden');
      setNext2('visible');
      yield "Second Step Completed"
      return "Done"
      
      
      
    }

  return (<div className='w-[100vw] h-[100vh] flex justify-center items-center bg-orange-200'>
  <div className='section-container flex justify-center items-center flex-col w-[80vw] h-[80vh] bg-white '>
    <section className='name w-[70vw] h-[80vh] flex justify-center items-center flex-col'>
    <h1 className='text-2xl font-bold text-center'>Registration Form</h1>
      <div className={next}>
        <label htmlFor='' className='block mt-6'>
          Name
          <input
            className='w-[55vw] block outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Name'
          />
        </label>
        <label htmlFor='' className='block mt-6 '>
          Father Name
          <input
            className='block w-[55vw] outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Father Name'
          />
        </label>
      </div>
      <div className={next1}>
        <label htmlFor='' className='block mt-6'>
          Phone Number
          <input
            className='w-[55vw] block outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Name'
          />
        </label>
        <label htmlFor='' className='block mt-6 '>
          Cnic Number
          <input
            className='block w-[55vw] outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Father Name'
          />
        </label>
      </div>
      <div className={next2}>
        <label htmlFor='' className='block mt-6'>
          Address
          <input
            className='w-[55vw] block outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Name'
          />
        </label>
        <label htmlFor='' className='block mt-6 '>
          Email
          <input
            className='block w-[55vw] outline-none border-[1px] border-solid border-black p-2 text-[1rem]'
            type='text'
            placeholder='Enter Father Name'
          />
        </label>
      </div>

    </section>
    <div className='flex justify-end w-[55vw] mb-2'>
      <button
        className='text-2xl font-bold border-[1px] border-solid border-black rounded-md pl-4 pr-4 pt-1 pb-1 hover:scale-105'
        onClick={handlingformed}
      >
        Next 
      </button>
    </div>
  </div>
</div>)
}

export default ApplicationForm
