import axios from 'axios'
import Movie from './components/Movie'

export default async function Home() {

  const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIE_API_KEY}`)
  // console.log(res.data)
  return (
    <main>
      <h1 className='h1'>Test Movies API</h1>
      <div className="grid gap-16 grid-cols-fluid p-4">
        {res.data.results.map((movie: any) => (
          <Movie movie={movie} />
        ))}
      </div>
    </main>
  )
}

