import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../support/global';

const Routes = {
  contact: {
    path: '/contact',
    color: 'decoration-red-600',
    name: 'Contact',
  },
  home: {
    path: '/',
    color: 'decoration-green-600',
    name: 'Home',
  },
  categories: {
    path: '/categories',
    color: 'decoration-blue-600',
    name: 'Categories',
  },
};

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center space-x-8 pt-4 pb-3">
      {Object.values(Routes).map(route => (
        <Link key={route.name} href={route.path} passHref>
          <span
            className={classNames(
              router.asPath === route.path ? 'underline' : '',
              route.color,
              'hover:scale-105 hover:translate-y-2 cursor-pointer text-slate-800 underline-offset-2 transition-transform duration-200 hover:underline',
            )}
          >
            {route.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
