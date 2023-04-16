import React, { useContext } from 'react'
import AppContextProvider, { AppContext } from '../context/AppContext'

function Pageination() {
  const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className=''>
      <div className="">
        { page > 1 &&
          <button onClick={()=>handlePageChange(page-1)}>
            Prev
          </button>
        }
        { page < totalPages &&
          <button onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        }
        <p>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pageination