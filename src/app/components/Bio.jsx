import Image from 'next/image';

export default function Bio() {
    return (
        <section className="flex flex-col mb-15 p-6 md:p-20 text-xl md:text-3xl">
            <Image 
                src={"/HONEYMARMALADE_PRESS1.jpg"}
                alt='Honey Marmalade Press Photo'
                width={800}
                height={600}
                className='mx-auto'
            />
            <h1 className="text-3xl md:text-5xl p-10 text-center">BIO</h1>
            <p className="text-xl md:text-3xl">Performing under the stage name Honey Marmalade, Olivia Klein is a 26-year-old 
                singer from Omaha, Nebraska. After moving to New York to pursue music, Honey Marmalade 
                has the fluidity to perform as a singer-songwriter, trio, or full-blown band. Pulling 
                from influences of Blues, Rock, Indie, and Soul, Honey Marmalade strikes up a balance of 
                Janis Joplin-like vocals with equally powerful instrumental support.
            </p>
            <p className='mt-5'>
                Honey Marmalade's performed at Brooklyn Bowl, The Sultan Room, Nublu, Garcias, 
                City Winery, Rockwood Music Hall, Pete's Candy Store, Bowery Electric, and more. 
                They have also been accepted as a Sofar Sounds artist, performing at sold-out events for crowds of 75+. 
            </p>

            <p className='mt-5'>
                Additional festival credits include an Americana Fest Showcase in September 2024 and sitting in with members 
                of Tedeschi Trucks Band for Jazz Fest After Dark at The Maple Leaf in April 2024.
                Having performed for over a decade, Honey Marmalade finds the stage a second home. Momentum continues to build, with their debut album, 
                Over Before It Started, now out on streaming services. Honey Marmalade thrives when performing and cherishes 
                the connections live music creates.
            </p>
        </section>
    );
}