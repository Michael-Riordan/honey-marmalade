
import Hero from "./components/Hero";
import Music from "./components/Music";
import Bio from "./components/Bio";
import Shows from "./components/Shows";
import Videos from "./components/Videos";

export default function Home() {
  return (
    <div className="p-4">
      <Hero />
      <Music />
      <Bio />
      <Shows />
      <Videos />
    </div>
  );
}
