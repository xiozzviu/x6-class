import siswa from "../data/siswa.json";
import Card from "../components/Card";

export default function About() {
  const waliKelas = siswa.find((item) => item.role === "wali");
  const siswaBiasa = siswa.filter((item) => item.role !== "wali");
  return (
    <div className="mt-24 mb-24 px-4 pb-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 id="about" className="text-4xl font-bold text-slate-200">
          About Us
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Meet the members of our class.
        </p>
      </div>
      <div className="mb-12">
        {waliKelas && (
          <Card
            key={waliKelas.id}
            name={waliKelas.name}
            image={waliKelas.image}
            hueA={waliKelas.hueA}
            hueB={waliKelas.hueB}
          />
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {siswaBiasa.map((item, i) => (
          <Card
            key={item.id}
            i={i}
            name={item.name}
            image={`${item.image}`}
            // hueA={item.hueA}
            // hueB={item.hueB}
            hueA={160}
            hueB={240}
          />
        ))}
      </div>
    </div>
  );
}
