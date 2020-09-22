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
                <header><a href="/">Search Page</a></header>
                <LoadingIndicator />
                <Result />
                <footer></footer>
            </main>
        </div>
    )
}