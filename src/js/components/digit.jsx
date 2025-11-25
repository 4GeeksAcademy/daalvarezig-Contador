import React from "react";


const Digit = ({digit}) => {
    console.log(digit)
    return (
        <div className="bg-dark text-white d-flex justify-content-center
                        align-items-center fs-2 m-1 rounded w-25 p-2" >
            {digit}
        </div>
    )
}

export default Digit