import React from 'react';
import { CiSearch } from 'react-icons/ci';

interface SearchProps {
    setPizzaSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ setPizzaSearch }: SearchProps) {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Search : ", event.target.value)
        setPizzaSearch(event.target.value);
    };


    return (
        <div className="min-w-[230px] lg:min-w-[300px] flex flex-row rounded-lg border border-gray-300 items-center justify-between p-2 gap-2">
            <CiSearch className='font-xl' />
            <input
                type="text"
                className='w-full text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white focus:outline-none'
                placeholder="Search..."
                onChange={handleSearchChange}
                style={{ border: 'none' }}
            />
        </div>
    );
}
