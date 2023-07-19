"use client"
import Image from "next/image"
import Link from "next/link"

function Movie({ movie }: any) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div key={movie.id} className="">
            <Link href={`/${movie.id}`}>
                <Image src={imagePath + movie.poster_path} width={800} height={800} alt={movie.title} />
            </Link>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
        </div>
    )
}

export default Movie