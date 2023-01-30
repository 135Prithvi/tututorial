// export default async function page({ params }: any) {
//   const xyxData = await (
//     await fetch(`http://localhost:3000/api/getOnePost?id=${params.id}`)
//   ).json();
//   return (
//     <main className="text-white prose font-[0.8rem] py-16 px-6 sm:px-8 sm:prose-sm md:prose-base mx-auto lg:prose-lg  hover:prose-a:text-blue-500 prose-a:text-blue-200 prose-strong:text-white prose-h1:text-white prose-h2:text-slate-300 prose-h2:text-xs prose-h2:font-thin prose-code:bg-[#1f2937] prose-code:text-white  prose-blockquote:mr-4 prose-blockquote:text-white prose-code:select-all">
//       <h1 className="not-prose">{xyxData.title}</h1>

//       <h2 className="">{xyxData.date}</h2>
//       <div
//         className=""
//         dangerouslySetInnerHTML={{ __html: xyxData.contentHtml }}
//       />
//       <p className="hidden">Post: {params.id}</p>
//     </main>
//   );
// }
export default function page(){
  return <div>nothing</div>
}