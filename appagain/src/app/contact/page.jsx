"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contact = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Contact page</h1>
      <button
        onClick={() => router.push("/home")}
        className="bg-blue-800 text-white px-4 mr-4"
      >
        Home
      </button>
      <button
        onClick={() => router.push("/about")}
        className="bg-blue-800 text-white px-4 mx-4"
      >
        About
      </button>
      <Link href="contact/company" className="bg-blue-800 text-white px-4">
        Company
      </Link>
      <button
        onClick={() => router.push("/contact/employee")}
        className="bg-blue-800 text-white px-4 mx-4"
      >
        Employee
      </button>
    </div>
  );
};

export default contact;
