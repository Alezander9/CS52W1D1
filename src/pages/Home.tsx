import { Link } from "react-router-dom"

const teams = [
  {
    name: "INSTRUCTORS",
    members: [
      ["AlexanderYue", "Alexander Yue"],
      ["LuciaLanganey", "Lucia Langaney"],
    ],
  },
  {
    name: "EPATT",
    members: [
      ["AnnieLi", "Annie Li"],
      ["SkyeFlowers", "Skye Flowers"],
      ["SophiaJiang", "Sophia Jiang"],
      ["ChloeZhong", "Chloe Zhong"],
      ["ChloeChou", "Chloe Chou"],
    ],
  },
  {
    name: "MBB",
    members: [
      ["EmilyDo", "Emily Do"],
      ["JacobLee", "Jacob Lee"],
      ["LeoMelton", "Leo Melton"],
      ["SriyaVenkataNeti", "Sriya Venkata Neti"],
    ],
  },
  {
    name: "CARETIE",
    members: [
      ["HenryHChang", "Henry H Chang"],
      ["GraceWang", "Grace Wang"],
      ["JasmineTostado", "Jasmine Tostado"],
      ["JulietaNoyola", "Julieta Noyola"],
      ["SofiaIslas", "Sofia Islas"],
      ["SonamNgamdung", "Sonam Ngamdung"],
    ],
  },
  {
    name: "PAVILLION",
    members: [
      ["IshaanBusireddy", "Ishaan Busireddy"],
      ["JessicaSu", "Jessica Su"],
      ["SueZhang", "Sue Zhang"],
      ["BriannaSun", "Brianna Sun"],
      ["ShreyasAnand", "Shreyas Anand"],
    ],
  },
  {
    name: "PLANET",
    members: [
      ["AngelisaWang", "Angelisa Wang"],
      ["AnyaPinto", "Anya Pinto"],
      ["BrandynLu", "Brandyn Lu"],
      ["DavidTomz", "David Tomz"],
      ["JolieTeo", "Jolie Teo"],
      ["VanesskaHall", "Vanesska Hall"],
    ],
  },
  {
    name: "OLLIE HINKLE",
    members: [
      ["AmritaMalhotra", "Amrita Malhotra"],
      ["CaraLee", "Cara Lee"],
      ["PriyankaKudallur", "Priyanka Kudallur"],
      ["EdwinSoriano", "Edwin Soriano"],
    ],
  },
]

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">CS52 Bootcamp</h1>
      {teams.map((team) => (
        <div key={team.name} className="mb-4">
          <h2 className="text-xl font-bold">{team.name}</h2>
          <div className="flex flex-wrap gap-3">
            {team.members.map(([file, name]) => (
              <Link key={file} to={`/${file}`} className="text-blue-600 underline">
                {name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
