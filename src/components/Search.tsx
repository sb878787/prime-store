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
    <div>
      <input
        className="bg-slate-400"
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="bg-sky-500 text-white p-2 rounded" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
