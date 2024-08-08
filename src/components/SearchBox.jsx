"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const SearchBox = () => {

const [search,setSearch] = useState("")
const router = useRouter();

const handleSubmit = (e)=>{
    e.preventDefault();
    router.push(`/search/${search}`)
}


    return (
    <form className='flex justify-between px-5 max-w-6xlmx-auto' onSubmit={handleSubmit}>
      <input type='text' placeholder='Search Keyword....' className='w-full h-14 rounded-md placeholderr-gray-500 outline-none bg-transparent flex-1 ' value={search}
      onChange={(e)=>setSearch(e.target.value)} />
      <button
      className='text-amber-600
      disabled:text-gray-500'
 disabled={search === ''}
      >Search</button>
    </form>
  )
}

export default SearchBox
