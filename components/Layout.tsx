import Head from "next/head";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />

      <div className="mx-auto max-w-3xl py-8 sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-8 lg:gap-8 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;
