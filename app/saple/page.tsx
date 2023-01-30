export default function page(){
  return <div>nothing</div>
}
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

// import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export default async function Home() {
//   // data fetch in nextjs


// const xyxData = await (await fetch("http://localhost:3000/api/posts", { cache: 'force-cache' })).json()



//   return (
//     <>
     
//       <main className={styles.main}>
//         <div className={styles.center}>
//           <h1 className="text-7xl">Blogs</h1>
//         </div>
//         <div className={styles.grid}>

//           {/*map through the array and displays the todo text*/}
//           {xyxData.map((data: any) => (
//             <div key={data.id} className={styles.card}>
//               <Link href = {`/posts/${data.id}`}>
//               <p className={inter.className}>{data.title}</p></Link>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// }
