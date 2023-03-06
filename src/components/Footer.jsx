import { YellowHeart } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-[#4C4E8E] h-10 w-full row-center text-white">
      <div className="row-center text-sm lg:text-base">
        <YellowHeart />
        <div>
          You can browse{" "}
          <a
            href="https://github.com/tdsrmd"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            all my projects
          </a>{" "}
          or you may like{" "}
          <a
            href="https://github.com/tdsrmd/IphoneBatteryCrcle"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            this project
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
