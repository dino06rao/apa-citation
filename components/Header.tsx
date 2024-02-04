import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
         APA Citation Generator
        </h1>
      </Link>
      {/* Google AdSense Ad Unit */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-1126540952570363"
           data-ad-slot="1694372343"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </header>
  );
}
