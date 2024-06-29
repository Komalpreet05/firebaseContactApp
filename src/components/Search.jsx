import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const Search = ({ onOpen, filterContacts }) => {

    return (
        <div className='flex gap-2'>
            <div className='flex relative items-center flex-grow'>
                <FiSearch className='ml-1 text-white text-3xl absolute' />

                <input onChange={filterContacts} type="text" className='bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-10' />

            </div>
            <div>
                <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' />

            </div>
        </div>
    )
}

export default Search
