// import React, { useEffect, useState } from 'react';
// import { data } from 'react-router-dom';

import { useLoaderData } from 'react-router-dom';

function Github() {

  //use a hoocks.
    const data = useLoaderData()
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch('https://api.github.com/users/Debanjan-Projects')
//       .then(res => res.json())
//       .then(user => {
//         console.log(user.followers);
//         setCount(user.followers);
//       });
//   }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-3 text-1xl'>
      Github Followers: {data.followers}

      <img src="https://images.pexels.com/photos/33323387/pexels-photo-33323387.jpeg" alt='Git Picture' width={150}/>
    </div>
  );
}

export default Github;


export const githubifoloader = async () =>{
    const response = await fetch('https://api.github.com/users/Debanjan-Projects')

    return response.json()
}
