import siswa from "../data/siswa.json";
import Card from "../components/Card";

export default function About() {
  const waliKelas = siswa.find((item) => item.role === "wali");
  const siswaBiasa = siswa.filter((item) => item.role !== "wali");
  return (
    <div className="mt-24 mb-24 px-4 pb-60 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Meet the members of our class.
        </p>
      </div>
      {/* <div className="flex justify-center"> */}
      {waliKelas && (
        <Card
          key={waliKelas.id}
          name={waliKelas.name}
          image={`${import.meta.env.BASE_URL}${waliKelas.image}`}
          hueA={waliKelas.hueA}
          hueB={waliKelas.hueB}
        />
      )}
      {/* </div> */}
      <div id="about" className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {siswaBiasa.map((item, i) => (
          <Card
            key={item.id}
            i={i}
            name={item.name}
            image={`${import.meta.env.BASE_URL}${item.image}`}
            hueA={item.hueA}
            hueB={item.hueB}
          />
        ))}
      </div>
    </div>
  );
}
