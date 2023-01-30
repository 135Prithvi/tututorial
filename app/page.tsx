import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main + " sm:p-20 "}>
      <div className={inter.className}>
        <h1 className="md:text-4xl font-medium text-4xl leading-8" >Proxy Service</h1>
        <div className={styles.center}>
          <span className={styles.description}>
            Discover fast and secure internet freedom with our free proxy
            service. Browse anonymously and bypass restrictions with ease. Start
            browsing with peace of mind today.
          </span>

          <div className="sm:m-4 m-2  ">
            <span className="md:text-4xl text-lg font-medium">How it would look Like</span>
          </div>
          <div className="sm:m-10  m-4">
            {" "}
            <Image
              src="/demo.png"
              priority
              width={1000}
              height={1000}
              alt="Lux"
              className={styles.logo}
            />
           
          </div>
          <div className="m-4 text-4xl font-medium hover:underline duration-300">
              <Link href="https://empty-recipe-3d53.codechronicles.workers.dev/" target="_blank">
                proxy
              </Link>
            </div>
        </div>
      </div>
    </main>
  );
}