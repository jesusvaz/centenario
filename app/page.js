"use client";
import Image from "next/image";
import Primos from './primos.json';
import { useState } from "react";

export default function Home() {
  const [primichis, setPrimichis] = useState(Primos);

  const primosList = primichis.primos.map(primo => (
    <a
      key={primo.id} // Unique key for each item
      href="#"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
      aria-label={`More about ${primo.name}`}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
          <Image
            priority
            alt={primo.name} // Meaningful alt text
            src={primo.foto}
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        {primo.name}
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        {primo.frase}
      </p>
    </a>
  ));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {primosList}
    </main>
  );
}
