"use client"
import Image from "next/image"
import Link from "next/link"

function Movie({ movie }: any) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div key={movie.id} className="">
            <h1>{movie.name}</h1>
            <h2>{movie.first_air_date}</h2>
            <Link href='/asd'>
                <Image src={imagePath + movie.poster_path} width={800} height={800} alt={movie.name} />
            </Link>
        </div>
    )
}

export default Movie