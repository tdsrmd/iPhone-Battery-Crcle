import { AddFile } from "../assets/icons";

const Content = () => {
  return (
    <div className="w-full row-center">
      <div className="w-1/3 col-center gap-y-8">
        <div className="font-thin text-center">
          <p className="text-7xl">İphone Şarj Dögüsü Hesapla</p>
          <div className="text-2xl mt-4">
            <span>Analiz dosyanıza</span>
            <div>
              <span className=" text-sm addFileColor py-2 px-4 rounded-full">
                Ayarlar &gt; Gizlilik ve Güvenlik &gt; Analizler ve
                İyileştirmeler &gt; Analiz Verileri
              </span>
            </div>
            <span>adımlarını izleyerek erişebilirsiniz.</span>
          </div>
        </div>
        <div className="addFileWrap">
          <div className="h-full col-center addFileColor gap-y-4">
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
