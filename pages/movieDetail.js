import Head from 'next/head'
import Movie from '../components/movie'

export default function MovieDetail() {
    return (
        <div className="container">
            <Head>
                <title>OMDB DEMO</title>
            </Head>
            <main>
                <header></header>
                <div><h1>OMDB DEMO</h1></div>
                <Movie />
                <footer></footer>
            </main>
        </div>
    )
}