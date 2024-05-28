import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="font-mono">
        Hello World
      </h1>
      <Link href="/users" className="no-underline hover:underline">Users</Link>
      <ProductCard/>
    </main>
  );
}
