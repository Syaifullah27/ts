import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Home Page</h1>
      <div className="flex flex-col gap-3 text-blue-600">
        <Link href="/about">About page</Link>
        <Link href="/profile">Profile page</Link>
        <Link href="/cart">Cart page</Link>
        <Link href="/checkout">Checkout page</Link>
      </div>
      </div>
  );
}
