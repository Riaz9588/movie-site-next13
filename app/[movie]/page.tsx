import axios from "axios"
import Image from "next/image"

// export async function generateStaticParams() {
//     const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`)
//     const data = await res.data
//     return data.results.map((movie: any) => ({
//         movie: toString(movie.id)
//     }))
// }

export default async function MovieDetail({ params }: any) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.MOVIE_API_KEY}`)
    const movie = await res.data
    return (
        <div>
            <h2 className='text-2xl'>{movie.title}</h2>
            <h2 className='text-lg'>{movie.release_date}</h2>
            <h2>Runtime: {movie.runtime} minutes</h2>
            <h2 className='text-sm bg-green-500 inline-block rounded-md my-2 py-2 px-4'>{movie.status}</h2>
            <Image className="my-12 w-full" src={imagePath + movie.backdrop_path} width={1000} height={1000} alt={movie.title} priority />
            <p>{movie.overview}</p>
        </div>
    )
}

