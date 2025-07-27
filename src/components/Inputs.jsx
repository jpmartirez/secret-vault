import React from 'react'

const Inputs = ({setSearchInput, setCategory, searchInput, category}) => {
  return (
        <div className='flex items-center justify-center gap-5 max-md:flex-wrap my-10'>
            <label className="input input-secondary">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" placeholder="Search secrets..." name='search' value={searchInput} onChange={e=>setSearchInput(e.target.value)}/>
              
            </label>

            <label className="select select-secondary">
                <span className="label">Categories</span>
                <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                    <option>All</option>
                    <option>Personal</option>
                    <option>Work</option>
                    <option>Love</option>
                    <option>Family</option>
                    <option>Dreams</option>
                    <option>Fears</option>
                    <option>Others</option>
                </select>
            </label>
        </div>
  )
}

export default Inputs