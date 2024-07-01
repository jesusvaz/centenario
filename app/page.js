"use client"
//https://www.youtube.com/watch?v=5s8Ol9uw-yM
//7.9
//https://www.youtube.com/watch?v=m5UcZ9thgPI&list=RDm6fn3GoC85o&index=12
//https://www.facebook.com/dei.carrillo.1/videos/712873040580568
import Image from "next/image";
import script from "../main";
import Primos from './primos.json'
import { useState } from "react";
export default function Home() {

  const [primichis, setPrimichis] = useState(Primos);
  const primosList = primichis.primos.map(
    primo => <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
          <Image
            alt={primo.foto}
            src={primo.foto}
            width={100}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        {primo.name}{" "}

      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      {primo.frase}
      </p>
    </a>
  );
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        {
          primosList
        }
      </main>
    </>
  )
}
