import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/fetching");
  return (
    <div>
      <h1>Welcome to nect js app</h1>
    </div>
  );
}
