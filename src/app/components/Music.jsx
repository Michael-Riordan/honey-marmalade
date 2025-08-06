export default function Music() {
    return(
        <section className="flex flex-col justify-center md:w-1/2 md:justify-self-center">
            <h1 className="text-5xl text-center mt-20">Music</h1>
                <iframe
                    style={{ borderRadius: '12px', padding:'2rem' }}
                    src="https://open.spotify.com/embed/album/4za1Q9aI1K1KNBB9flpw64?utm_source=generator"
                    width="100%"
                    height="750"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
        </section>
    );
}