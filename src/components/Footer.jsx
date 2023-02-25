import { YellowHeart } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-[#4C4E8E] h-10 w-full row-center text-white">
      <p className="row-center">
        <YellowHeart />
        <div>
          <a
            href="https://github.com/tdsrmd/IphoneBatteryCrcle"
            target="_blank"
            className="underline"
          >
            Like & Follow
          </a>{" "}
          <span>from you. New free to use projects from us.</span>
        </div>
      </p>
    </footer>
  );
};

export default Footer;
