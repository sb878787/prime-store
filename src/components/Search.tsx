'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set('title', search);

    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div className="flex justify-center items-center mb-8 gap-4">
      <button className="bg-sky-500 text-white p-2 rounded cursor-pointer" onClick={handleSearch}>
        Search
      </button>

      <input
        className="bg-slate-200 p-2 rounded outline-none border border-transparent focus:border-sky-500"
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default Search;
