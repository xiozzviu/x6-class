import { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const items = [
    {
      id: 1,
      title: "Instagram",
      image: "bannerinsta.png",
      desc: "Follow Instagram kami untuk update terbaru dan informasi kegiatan terkini.",
      href: "https://www.instagram.com/ten6lissful/",
      target: "_blank",
      color: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      id: 2,
      title: "Tiktok",
      image: "bannertiktok.png",
      desc: "Tonton video singkat, video random, dan konten seru lainnya di TikTok asli kami.",
      href: "https://www.tiktok.com/@cimiteenam",
      target: "_blank",
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      title: "WhatsApp",
      image: "bannerwhatsapp.jpg",
      desc: "Hubungi kami melalui WhatsApp untuk pertanyaan atau informasi lainnya.",
      href: "https://wa.me/6281231196670",
      target: "_blank",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Ngl",
      image: "bannerngl.png",
      desc: "Kirimkan Kami pesan rahasia di NGL-! Hanya ingin menyapa? Disini!",
      href: "https://ngl.link/wacimcenam.archives",
      target: "_blank",
      color: "bg-gradient-to-r from-pink-500 to-orange-500",
    },
    {
      id: 5,
      title: "Spotify Archives",
      image: "bannerspotify.png",
      desc: "Lihat playlist khusus kami di Spotify! Suasana yang kami ciptakan melalui musik.",
      href: "https://open.spotify.com/user/31m3hldcq2gfbyqjdy7tsvhklhma?nd=1&dlsi=5eb1ceb01cf74625",
      target: "_blank",
      color: "bg-gradient-to-r from-emerald-700 to-green-700",
    },
  ];

  useLayoutEffect(() => {
    if (sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setScrollDistance(totalWidth - viewportWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <div
      ref={containerRef}
      style={{ height: scrollDistance + window.innerHeight }}
      className="relative"
      id="contact"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-20">
        <div className="text-center mb-10 px-6">
          <h1 className="text-4xl font-bold text-slate-600">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-400">
            Scroll down to see contact info
          </p>
        </div>

        <motion.div
          ref={sliderRef}
          style={{ x }}
          className="flex gap-4 pl-[2vw] pr-[6vw]"
        >
          {items.map((item) => (
            <div key={item.id} className="shrink-0">
              <div
                className={`w-[85vw] sm:w-125 md:w-150 ${item.color} text-white p-8 rounded-3xl flex flex-col gap-6 shadow-xl`}
              >
                <h2 className="text-2xl font-bold">{item.title}</h2>

                <a href={item.href} target={item.target}>
                  <img
                    src={`img/${item.image}`}
                    alt={item.title}
                    className="w-full h-64 rounded-xl object-cover object-top-left border-2"
                  />
                </a>

                <p className="text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
