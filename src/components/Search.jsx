
const Search = ({ onChange, value }) => {
  return (
    <>
        <div className='flex gap-2 items-center'>
          <input onChange={onChange} value={value} type="text" placeholder='City Name' className='border border-white text-white px-2 py-2 outline-none' />
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
    </>
  )
}

export default Search