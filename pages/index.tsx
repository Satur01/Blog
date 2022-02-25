import type { NextPage } from 'next'
import Layout from "../components/Layout"

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main className="lg:col-span-full">
        <div className="bg-red-600 h-2" />
      </main>
    </Layout>
  )
}

export default Home
