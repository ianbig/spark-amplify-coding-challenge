import Head from 'next/head'
import Result from '../components/result'



export default function ResultPage() {
    return (
        <div className="container">
            <Head>
                <title>OMDB DEMO</title>
            </Head>
            <main>
                <header><h1>OMDB DEMO</h1></header>
                <Result />
                <footer></footer>
            </main>
        </div>
    )
}