import React from 'react'

const verifyotp = (props) => {
  return (
    <div className="font-lexend bg-rp-black lg:h-screen h-full">
      <Link to="/">
        <div className="text-rp-yellow absolute top-7 left-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <div className="pt-8">
        <h1 className="font-bold text-2xl flex ml-auto mr-auto  bg-mj-yellow w-fit p-2 rounded-xl px-4 ">
          Developers
        </h1>
      </div>
      <div className="lg:flex justify-around mt-5 lg:mt-32">
        {Members.map((member, index) => (
          <TeamCard
            key={index} // Ensure each component has a unique key
            member={member}
          />
        ))}
      </div>
    </div>
  )
}

export default verifyotp
