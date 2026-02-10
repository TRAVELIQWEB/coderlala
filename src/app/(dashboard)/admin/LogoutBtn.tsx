import api from '@/lib/axios';
import React from 'react'

const LogoutBtn = () => {
  return (
    <>
      {/* Add this logout button */}
      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </>
  )
}

export default LogoutBtn