import React from 'react'
import Image from 'next/image'

const SearchBar = () => {
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //TODO:searchFunction with mongo
    }
  return (
    <form
    onSubmit={handleSubmit}
    className='flex flex-1 bg-transparent border border-primary gap-8 rounded-sm px-2 justify-between py-2 text-primary'>
        <input className='bg-transparent placeholder-primary outline-none flex-1 text-primary' name='search' placeholder='Search' type='search'></input>
        <button type='submit'
        >    
            <Image alt='search' width={14} height={14} src='/search.png'></Image>
        </button>
    </form>
  )
}

export default SearchBar