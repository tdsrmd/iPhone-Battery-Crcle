import Content from "./components/Content";
import Header from "./components/Header";
import Pattern from "./assets/pattern.svg";
import Pattern4 from "./assets/pattern-04.svg";
const App = () => {
  return (
    <div className="h-screen text-white">
      <div className="h-full row-center m-6">
        <div className="h-5/6 w-full bg-[#636c78] rounded-2xl">
          <Header />
          <Content />
          <div className="absolute top-1/3 left-0 ">
            <img src={Pattern} className=" rounded-tr-2xl rounded-br-2xl" />
          </div>
          <div className="absolute top-1/4 right-0 ">
            <img src={Pattern4} className=" rounded-tl-2xl rounded-bl-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
