import Head from 'next/head'
import Movie from '../components/movie'
import styles from '../components/movie.module.css'
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


const LoadingIndicator  = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && 
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justfyContent: "center",
                alignItems: "center"
            }}>
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
    )
}

export default function MovieDetail() {
    return (
        <div className={styles.root}>
            <Head>
                <title>OMDB DEMO</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <main className={styles.main}>
                <LoadingIndicator />
                <header>
                    <a href="/"><img src="https://i.ibb.co/nMs3GBm/homepage.png" alt="loupe" border="0" className="link" /></a>
                </header>
                <Movie />
                <footer className={styles.footer}>Copyrighy(c) Example.com. All right reserved.</footer>
            </main>
            <style jsx>{`
                .link {
                    width: 10vw;
                    height: 10vh;
                    margin:.3em;
                    text-decoration: none; 
                    color: black;
                }
            `}</style>
        </div>
    )
}
