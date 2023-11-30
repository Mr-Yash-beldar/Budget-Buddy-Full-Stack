import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ErrorMessage = ({message}) => {

  return (
    <div>
        <ToastContainer />
        {toast.error(`${message}`,{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })}
    </div>
  )
}

export default ErrorMessage
