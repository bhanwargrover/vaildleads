import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 opacity-50 pointer-events-none select-none w-[200px] xl:w-[400px] sm:w-[150px] sm:opacity-60 md:w-[250px] md:opacity-70">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
