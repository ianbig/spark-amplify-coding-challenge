import Head from 'next/head'

export default function Error() {
    return (
        <div className="container">
            <Head>
                <title>Error Page</title>
            </Head>
            <main>
                <header></header>
                <h1>Some Error Occur Back to <a href="/">Search Page</a></h1>
                <footer></footer>
            </main>
        </div>
    )
}