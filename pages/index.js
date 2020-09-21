import Head from 'next/head'
import Search from '../components/searchBar'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main>
       <Search />
      </main>
      <footer></footer>
    </div>
  )
}
