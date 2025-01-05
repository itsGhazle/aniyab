import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <ul className="flex flex-col items-center gap-2 fixed bottom-10 left-2 right-50 ">
      <li className="border rounded-full bg-stone-300 p-2">
        <Link to="">
          <img src="public/twitter-brands-solid.svg" className="w-8 h-8" />
        </Link>
      </li>
      <li className="border rounded-full bg-stone-300 p-2">
        <Link to="">
          <img src="public/twitter-brands-solid.svg" className="w-8 h-8" />
        </Link>
      </li>
      <li className="border rounded-full bg-stone-300 p-2">
        <Link to="">
          <img src="public/twitter-brands-solid.svg" className="w-8 h-8" />
        </Link>
      </li>
      <li className="border rounded-full bg-stone-300 p-2">
        <Link to="">
          <img src="public/twitter-brands-solid.svg" className="w-8 h-8" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialMedia;
