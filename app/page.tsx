import axios from 'axios'
import Movie from './components/Movie'

export default async function Home() {

  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`)
  // console.log(res.data)
  return (
    <main>
      <h1 className='text-4xl my-9 text-center'>Testing Movies API Site</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.data.results.map((movie: any) => (
          <Movie movie={movie} />
        ))}
      </div>
    </main>
  )
}

