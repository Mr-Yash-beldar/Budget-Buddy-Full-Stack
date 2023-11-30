import React from "react";
import "./Slider.css"
const SliderCard = ({title,desc,image}) => {
    
  return (
    // <div className="slider_section  hero-img">
    //   <div className="container ">
    //     <div className="row">
    //       <div className="col-md-6 ">
    //         <div className="detail-box">
    //           <h1>{title}</h1>
    //           <p>
    //             {desc}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="img-box">
    //           <img src={image} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      // </div>
      <div className="slider_section hero-img">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-1">
        <div className="detail-box">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4">{desc}</p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1">
        <div className="img-box">
          <img src={image} alt="" className="w-full" />
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default SliderCard;
