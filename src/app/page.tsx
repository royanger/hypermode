import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <UserButton />
      <div><Link href="/sign-in">Sign In</Link></div>
      <div><Link href="/account">Account Page</Link></div>
    </main>
  );
}
