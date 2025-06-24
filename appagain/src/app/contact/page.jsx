"use client";
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
        Home{" "}
      </button>
      <button
        onClick={() => router.push("/about")}
        className="bg-blue-800 text-white px-4"
      >
        {" "}
        About
      </button>
    </div>
  );
};

export default contact;
