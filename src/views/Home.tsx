import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Experiments</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center flex-col bg-[#11111b] text-[#CDD6F4]">
        <div>
          <h2 className="text-lg mb-5">List of experiments</h2>
        </div>
        <ul>
          <li>
            <Link to="/001" className="hover:underline">
              <span>001</span> <strong>Drag & Drop</strong>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
