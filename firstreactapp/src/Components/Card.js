import React from 'react'

function Card( {details}) {
    const [username, role, about] = details;
  return (
    <div className='col-span-1'>
        <figure className="md:bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&h=350" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      {about}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
       {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
      {role}
      </div>
    </figcaption>
  </div>
</figure>


    </div>
  )
}

export default Card

