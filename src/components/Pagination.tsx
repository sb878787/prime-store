'use client';

import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount }: { pageCount: number }) => {
  const router = useRouter();

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected + 1;
    router.push(`/store?page=${selectedPage}&per_page=5`);
  };

  return (
    <div>
      <ReactPaginate
        className="flex gap-10 justify-between items-center bg-sky-600 text-white rounded-md px-4 py-2"
        pageClassName="cursor-pointer hover:bg-white hover:text-sky-600 rounded-md px-3 py-1 transition-all"
        // containerClassName=''
        // pageLinkClassName=''
        activeClassName="bg-white text-sky-600 rounded-md"
        // activeLinkClassName=''
        previousClassName="cursor-pointer hover:bg-white hover:text-sky-600 rounded-md px-3 py-1 transition-all"
        nextClassName="cursor-pointer hover:bg-white hover:text-sky-600 rounded-md px-3 py-1 transition-all"
        // previousLinkClassName=''
        // nextLinkClassName=''
        disabledClassName="opacity-50 cursor-not-allowed"
        // disabledLinkClassName=''
        // breakClassName=''
        // breakLinkClassName=''
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
