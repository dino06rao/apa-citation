import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import Github from "../components/GitHub";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("APA");
  const [generatedBios, setGeneratedBios] = useState<String>("");

  const bioRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `Generate ${vibe} style citation. ${
    vibe === "AMA"
      ? "Make sure it is in AMA citation style."
      : null
  }
  create a complete citation, has format of citation, when more info is needed ask user and base it on this context: ${bio}${
    bio.slice(-1) === "." ? "" : "."
  }`;

  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }
    scrollToBios();
    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>APA Citation Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
          Free APA Citation Generator 
        </h1>
        <p className="text-slate-500 mt-5">98 Million Citations generated so far.</p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Add  details{" "}
              <span className="text-slate-500">
                Enter or paste a web address, book title, journal, video for Citation
              </span>
              .
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "👋 Start here! Cite websites, books, journals, and videos automatically -- just search with the title or an identifier. Tip use the ISBN, ISSN, DOI, or URL for the best accuracy."
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select your Citation style.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateBio(e)}
            >
              Generate your Citation &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedBios && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Your generated Citations
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {generatedBios
                  .substring(generatedBios.indexOf("1") + 3)
                  .split("2.")
                  .map((generatedBio) => {
                    return (
                      <div
                        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedBio);
                          toast("Citation copied to clipboard", {
                            icon: "✂️",
                          });
                        }}
                        key={generatedBio}
                      >
                        <p>{generatedBio}</p>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
        /**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZxulXxmz5TB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6">
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">SOP Generator</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Personalized SOP</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Expert Guidance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Quick Turnaround</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">Profile Evaluation</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Detailed Evaluation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Improvement Suggestions</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Follow-up Support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
      <Card className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg md:text-xl">Practice Visa Interview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Free</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Mock Interviews</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Interview Tips</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm">Visa Approval Guidance</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

        <div>
        <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Mastering APA Citation and Formatting: A Detailed Guide</h2>
    <p>This comprehensive guide is designed to help you understand and apply the 7th edition of the APA (American Psychological Association) formatting and citation style. It includes essential information on referencing, various citation formats for different types of sources, and additional useful tips.</p>

    <p>For those interested in MLA format, the Citation Machine MLA Guide is a valuable resource. Additionally, the Citation Machine website offers an APA formatter, a handy tool for generating APA citations, along with guidance on other citation styles.</p>

    <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Ethical Research Practices:</h2>
    <p>In academic writing, such as research papers or projects, it's common to incorporate the work of others to support your own ideas. Ethical research practices require acknowledging these contributions through proper citation, thereby avoiding plagiarism.</p>

    <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Understanding Plagiarism:</h2>
    <p>Plagiarism, from the Latin word 'plagiare' meaning 'to kidnap,' refers to the unauthorized use of someone else's work as your own without giving due credit to the original author. This unethical practice can have serious consequences. However, plagiarism is preventable by including accurate citations and references in your research.</p>

    <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >
                  Citations and References Explained:</h2>
    <p>Whenever you use information from another person's work, whether it's a direct quote, paraphrased content, images, or other material, it's crucial to cite these sources. This section of the guide will teach you how to effectively create citations and references.</p>

    <p>In APA style, citations appear within the text of your paper (in-text citations) and are concise. They typically include the author's last name, the year of publication, and, if applicable, page numbers. These in-text citations correspond to more detailed references found at the end of your paper, which provide complete information about the sources. References are organized alphabetically by the author's last name.</p>

    <p>An APA in-text citation generally contains three key elements: the author(s)' last names, the publication year, and sometimes the specific page or location of the cited information. The reference entries include more comprehensive details like the author(s)' full names, publication year, title of the work, and the URL or page range if applicable.</p>

    <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={bioRef}
                >Tips:</h2>
    <p>This guide aims to equip you with the knowledge and tools to accurately cite sources using APA style, ensuring the integrity and credibility of your academic work. For quick and easy citation generation, consider using the Citation Machine citation generator available on their homepage. Remember, proper citation is not just a formal requirement; it's a practice of academic honesty and respect for the intellectual contributions of others.</p>
</div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
