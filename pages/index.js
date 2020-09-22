import Head from 'next/head'
import Search from '../components/searchBar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header></header>
        <Search />
        <footer></footer>
      </main>
    </div>
  )
}
