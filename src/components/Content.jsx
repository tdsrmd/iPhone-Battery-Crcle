import { useTranslation } from "react-i18next";
import { AddFile } from "../assets/icons";

const Content = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full row-center">
      <div className="w-1/3 col-center gap-y-8">
        <div className="font-thin text-center">
          <p className="text-7xl">{t("welcome")}</p>
          <div className="text-2xl mt-4">
            <span>{t("content1")}</span>
            <div>
              <span className=" text-sm addFileColor py-2 px-4 rounded-full">
                {t("content2")}
              </span>
            </div>
            <span>{t("content3")}</span>
          </div>
        </div>
        <div className="addFileWrap">
          <div className="h-full col-center addFileColorAnimate gap-y-4">
            <div className="bg-white rounded-full p-4 shadow-xl">
              <AddFile />
            </div>
            <div className="text-center">
              <p className="text-[18px]">Dosyanızı ekleyin</p>
              <p className="text-sm font-thin">en fazla 1mb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
