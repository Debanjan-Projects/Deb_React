
//common button .

import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
    //orkuch bhi props agar apne pass kiya hain to ushe spread kar liya hain .
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
        //user ne agar koi bhi addittional property diya hain sab chhala ayega ..
        
    );
}