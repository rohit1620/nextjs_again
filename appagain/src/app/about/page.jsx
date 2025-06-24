import Link from "next/link";

const About = () => {
  return (
    <div className="gap-y-5">
      <div className="bg-gradient-to-b from-blue-400 to-yellow-500">rohit</div>
      <p>me beech ka</p>
      <div className="bg-gradient-to-tr from-red-600 to-black h-98  text-center text-white">
        My name is rohit malav
      </div>
      <Link href="/home" className="bg-black text-white px-4 mr-4">
        Home
      </Link>
      <Link href="/contact" className="bg-black text-white px-4">
        contact
      </Link>
    </div>
  );
};

export default About;
