import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gfg from "../assets/geekforgeeks.png";
import leetcode from "../assets/leetcode.png"
import React from 'react'

const TeamCard = ({member}) => {
  return (
    <div className="mx-auto mt-5 lg:mt-0 lg:mx-0 bg-jp-black relative shadow-slate-700 shadow-md rounded-md w-72 h-96">
  <div className="h-2/6 bg-mj-yellow rounded-t-md overflow-hidden"></div>
  <img
    src={member.imageSrc}
    alt="developer"
    className="absolute w-32 h-32 top-16 left-20 border-2 rounded-full bg-black border-black "
  />
  <div className="mt-20 flex flex-col items-center justify-center ">
    <h1 className=" text-slate-300 text-3xl font-semibold">{member.name}</h1>
    <h1 className="mt-1 text-lg text-slate-500">{member.job}</h1>
    <div className="w-36 flex justify-between mt-6 gap-2">
      <a href={member.socialMedia.linkedin} target="blank">
        <img src={linkedin} alt="linkdein" className="h-8 w-8" />
      </a>
      <a href={member.socialMedia.geekforgeeks} target="blank">
        <img src={gfg} alt="gfg" className="h-8 w-8" />
      </a>
      <a href={member.socialMedia.github} target="blank">
        <img src={github} alt="github" className="h-8 w-8" />
      </a>
      <a href={member.socialMedia.leetcode} target="blank">
        <img src={leetcode} alt="leetcode" className="h-8 w-8" />
      </a>
    </div>
  </div>
</div>

  )
}

export default TeamCard

