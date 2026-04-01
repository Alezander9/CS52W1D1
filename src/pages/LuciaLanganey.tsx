import myPhoto from "../assets/lucialanganey.jpeg";

export default function LuciaLanganey() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[24pt] font-bold">Lucia Langaney</h1>
      <img src={myPhoto} alt="Lucia" className="w-[100px] h-[100px]" />
      <a href="https://github.com/lucialanganey">Github</a>
    </div>
  );
}
