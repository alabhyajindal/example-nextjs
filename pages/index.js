import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-400 px-4 py-8 text-2xl">hello</div>
      <p className="text-lg">
        Refer to the below links to set up your project:{" "}
      </p>
      <div className="flex flex-col gap-1">
        <a
          href="https://www.loom.com/share/dad38ee340fe4071994d6897c1bd1005"
          target="_blank"
        >
          Video guide
        </a>
        <a href="https://tailwindcss.com/docs/guides/nextjs" target="_blank">
          Documentation
        </a>
      </div>
    </div>
  );
}
