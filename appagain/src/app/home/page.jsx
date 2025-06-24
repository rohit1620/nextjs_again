import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="bg-black text-white">Rohit kumar malav</h1>
      <h3 className="bg-pink-800 text-yellow-500 font-bold">
        My name is home page
      </h3>
      <Link href="/about" className="bg-amber-500 text-bolder px-4 mr-4">
        About
      </Link>
      <Link href="/contact" className="bg-black text-white px-4">
        contact
      </Link>
    </div>
  );
};

export default Home;
