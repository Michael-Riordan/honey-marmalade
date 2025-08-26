'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Bio() {
  return (
    <section className="flex flex-col mb-15 p-6 md:p-20 text-xl md:text-3xl">
      
      {/* Image with subtle scale animation */}
      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image 
          src={"/HONEYMARMALADE_PRESS1.jpg"}
          alt='Honey Marmalade Press Photo'
          width={800}
          height={600}
          className='mx-auto rounded-lg shadow-lg'
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-5xl p-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      >
        BIO
      </motion.h1>

      {/* Paragraphs */}
      <motion.div
        className="space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.2 } // stagger text paragraphs
          }
        }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          Performing under the stage name Honey Marmalade, Olivia Klein is a 26-year-old 
          singer from Omaha, Nebraska. After moving to New York to pursue music, Honey Marmalade 
          has the fluidity to perform as a singer-songwriter, trio, or full-blown band. Pulling 
          from influences of Blues, Rock, Indie, and Soul, Honey Marmalade strikes up a balance of 
          Janis Joplin-like vocals with equally powerful instrumental support.
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Honey Marmalade has performed at Brooklyn Bowl, The Sultan Room, Nublu, Garcias, 
          City Winery, Rockwood Music Hall, Pete's Candy Store, Bowery Electric, and more. 
          They have also been accepted as a Sofar Sounds artist, performing at sold-out events for crowds of 75+. 
        </motion.p>

        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          Additional festival credits include an Americana Fest Showcase in September 2024 and sitting in with members 
          of Tedeschi Trucks Band for Jazz Fest After Dark at The Maple Leaf in April 2024.
          Having performed for over a decade, Honey Marmalade finds the stage a second home. Momentum continues to build, with their debut album, 
          Over Before It Started, now out on streaming services. Honey Marmalade thrives when performing and cherishes 
          the connections live music creates.
        </motion.p>
      </motion.div>
    </section>
  );
}