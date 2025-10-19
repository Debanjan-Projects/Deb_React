import React, {useId} from 'react'

const Input = React.forwardRef( 
    
    function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){

    const id = useId()


    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1'


            //all time generate a unique id.

            htmlFor={id}>
                {label}
            </label>
            }

            //input.
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}

            //id lebel mein hi lag geya hain , or input mein bhi
            
            />
        </div>
    )
})

export default Input