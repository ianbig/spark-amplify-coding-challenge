import Head from 'next/head'
import Result from '../components/result'
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


export default function ResultPage() {
    return (
        <div className="container">
            <Head>
                <title>OMDB DEMO</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>
            <main>
                <header><a href="/"><img className="link" src="https://i.ibb.co/VqTmhdB/arrow.png" alt="arrow" border="0" /></a></header>
                <LoadingIndicator />
                <Result />
                <footer></footer>
            </main>
            <style jsx>{`
                .link {
                    width: 10vw;
                    height: 10vh;
                    margin:0;
                    text-decoration: none; 
                    color: black;
                }
            `}</style>
        </div>
    )
}