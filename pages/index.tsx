import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main className="lg:col-span-full">
        <div className="h-2 bg-red-600" />
      </main>
    </Layout>
  );
};

export default Home;
