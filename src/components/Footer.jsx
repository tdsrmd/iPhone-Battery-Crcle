import { YellowHeart } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-[#4C4E8E] h-10 w-full row-center text-white">
      <p className="row-center">
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
      </p>
    </footer>
  );
};

export default Footer;
