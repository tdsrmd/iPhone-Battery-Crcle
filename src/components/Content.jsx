import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddFile, Refresh } from "../assets/icons";

const Content = () => {
  const { t } = useTranslation();
  const [cycleCount, setCycleCount] = useState("");

  const handleSearch = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = (event) => {
      const content = event.target.result;
      const results = content.match(/"last_value_CycleCount":(\d+)/);

      results === null ? setCycleCount(t("file3")) : setCycleCount(results[1]);
    };
  };
  return (
    <div className="h-[calc(100%_-_56px)] flex justify-center">
      <div className=" lg:w-2/4 2xl:w-1/3 lg:px-0 col-center gap-y-8">
        <div className="font-thin text-center">
          <p className="text-3xl lg:text-5xl 2xl:text-7xl">{t("welcome")}</p>
          <div className="text-xl lg:text-2xl mt-4">
            <span>{t("content1")}</span>
            <div className="mb-1">
              <span className="text-xs lg:text-sm addFileColor py-2 px-4 rounded-full">
                {t("content2")}
              </span>
            </div>
            <span className="text-xl lg:text-2xl">{t("content3")}</span>
            <p className="text-sm mt-4">
              {t("content4")}: Analytics-2023-02-27-030005
            </p>
            <p className="text-sm">{t("content5")}</p>
          </div>
        </div>
        {!cycleCount ? (
          <div className="addFileWrap w-[252px] h-[203px] 2xl:w-[282px] 2xl:h-[233px]">
            <input
              type="file"
              className="absolute w-[250px] h-[200px] opacity-0 bg-black cursor-pointer"
              onChange={handleSearch}
            />
            <div className="h-full col-center addFileColorAnimate gap-y-4">
              <div className="bg-white rounded-full p-4 shadow-xl">
                <AddFile className="2xl:w-6 2xl:h-6 w-4 h-4" />
              </div>
              <div className="text-center">
                <p className="text-[18px]">{t("file1")}</p>
                <p className="text-sm font-thin">{t("file2")}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div>
              <p className="text-6xl font-thin animate-pulse">{cycleCount}</p>
            </div>
            <div
              className="bg-white rounded-full p-4 shadow-xl cursor-pointer"
              onClick={() => setCycleCount("")}
            >
              <Refresh />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
