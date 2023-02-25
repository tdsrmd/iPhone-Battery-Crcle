import Content from "./components/Content";
import Header from "./components/Header";
import Pattern from "./assets/pattern.svg";
import Pattern2 from "./assets/pattern-02.svg";
import Pattern3 from "./assets/pattern-03.svg";
import Pattern4 from "./assets/pattern-04.svg";
import { YellowHeart } from "./assets/icons";
const App = () => {
  return (
    <>
      <div className="text-white min-h-screen">
        <div className="row-center m-6 absolute top-0 left-0 right-0 bottom-0">
          <div className="w-full h-full bg-[#636c78] rounded-2xl relative">
            <Header />
            <Content />
            <div className="absolute bottom-0 left-60">
              <img
                src={Pattern2}
                className=" rounded-tl-3xl rounded-tr-3xl shadow-xl"
              />
            </div>
            <div className="absolute bottom-20 right-20 ">
              <img src={Pattern3} className="rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/3 left-0 ">
          <img
            src={Pattern}
            className=" rounded-tr-2xl rounded-br-2xl shadow-xl"
          />
        </div>
        <div className="absolute top-1/4 right-0 ">
          <img
            src={Pattern4}
            className=" rounded-tl-2xl rounded-bl-2xl shadow-xl"
          />
        </div>
      </div>
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
    </>
  );
};

export default App;
