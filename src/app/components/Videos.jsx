export default function Videos() {
    return (
        <section className="flex flex-col mt-20">
            <h1 className="text-5xl mb-15 pl-10">VIDEOS</h1>
            <div className="flex flex-col md:flex-row gap-4 p-2">
                <iframe
                    className="w-full h-60 md:h-100"
                    src="https://www.youtube.com/embed/6Vj5fxt4QZk"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                <iframe
                    className="w-full h-60 md:h-100"
                    src="https://www.youtube.com/embed/uGPxDn3fL5Q"
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>

            </div>
        </section>
    );
}