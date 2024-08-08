import Image from 'next/image';
import React from 'react'

const page = async ({params}) => {

    const movieID = params.id;

    const res =await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`,
       
      );

      const movie = await res.json();
      console.log(movie);
 
  return (  
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
            <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path} `}
            width={500}
            height={300}
            className='rounded-lg'
            
            >

            </Image>

            <div className="p-2 ">
                <h2 className='text-lg mb-3 font-bold'>{movie.title || MongoClient.name}</h2>
                <p className='text-lg mb-3'>{movie.overview}</p>
               
             
              <div className="flex gap-2">
              <span>Date Released : </span>
              <p>{movie.release_date || movie.first_air_date}</p>
              </div>
                <p>{movie.vote_count}</p>
            </div>
             

        </div>
    </div>
  )
}

export default page
