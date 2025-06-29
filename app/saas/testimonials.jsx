import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager",
    photo: "https://i.pravatar.cc/128?u=user4",
    quote: "This tool revolutionized the way I manage projects—intuitive, fast, and reliable!",
  },
  {
    name: "Sara Lee",
    role: "Full-Stack Developer",
    photo: "https://i.pravatar.cc/128?u=user11",
    quote: "Integrating it into my workflow was seamless. The support team is top-notch!",
  },
  {
    name: "John Smith",
    role: "Startup Founder",
    photo: "https://i.pravatar.cc/128?u=user8",
    quote: "A game-changer for small teams. We're more efficient than ever!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8">
          What our clients say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5 bg-neutral-300/25 rounded-md shadow-2xs shadow-green-400/75 hover:shadow-uniform-xs transition-shadow duration-300">
              <div className="flex flex-row mb-4">
                <Image
                  src={t.photo}
                  width={40}
                  height={40}
                  alt={`${t.name}'s photo`}
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-400 text-lg pb-0 mb-0">{t.name}</p>
                  <p className="text-sm pt-0 mt-0">{t.role}</p>
                </div>
              </div>
              <p>&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
