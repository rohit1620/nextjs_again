import Link from "next/link";

const DynamicRouting = () => {
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <Link href="/dynamicRouting/1" className="p-6">
        1
      </Link>{" "}
      <br />
      <Link href="/dynamicRouting/2" className="ml-6">
        2
      </Link>{" "}
      <br />
      <Link href="/dynamicRouting/3" className="m-6">
        3
      </Link>
    </div>
  );
};

export default DynamicRouting;
