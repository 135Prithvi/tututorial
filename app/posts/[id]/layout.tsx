export const dynamicParams = true 
export const revalidate = 30
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
  <article className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-white antialiased" >{children}</article> 
    
    )
  }