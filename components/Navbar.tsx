import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../support/global";

const Routes = {
  contact: {
    path: "/contact",
    color: "decoration-red-600",
    name: "Contact",
  },
  home: {
    path: "/",
    color: "decoration-green-600",
    name: "Home",
  },
  categories: {
    path: "/categories",
    color: "decoration-blue-600",
    name: "Categories",
  },
};

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center space-x-8 items-center pt-4 pb-3">
      {Object.values(Routes).map((route) => (
        <Link key={route.name} href={route.path} passHref>
          <span
            className={classNames(
              router.asPath === route.path ? "underline" : "",
              route.color,
              "cursor-pointer text-slate-800 hover:underline underline-offset-2"
            )}
          >
            {route.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
