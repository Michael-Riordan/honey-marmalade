
export default function Hero() {
    return (
      <section className="bg-cover bg-center h-screen w-screen md:w-3/4 md:justify-self-center text-white" style={{ backgroundImage: "url('/honey-marmalade-hero.png')", backgroundPosition: 'center 30%' }}>
        <div className="h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Honey Marmalade</h1>
          <p className="mt-4 text-xl p-4 text-center">Singer-songwriter blending blues, rock, indie & soul</p>
        </div>
      </section>
    );
  }