import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import abuelo from '../public/images/abuelo.jpeg';
import abuela from '../public/images/abuela.jpeg';
import framboyan from '../public/images/framboyan.webp';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        <Image
          alt="ABUELO"
          src={abuelo}
          width={100}
          height={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        <Image
          alt="ABUELA"
          src={abuela}
          width={100}
          height={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>


      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        <Image
          alt="framboyan"
          src={framboyan}
          width={100}
          height={100}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
     

    </nav>
  )
}
{/* <div class="rounded-full ..."></div> */ }