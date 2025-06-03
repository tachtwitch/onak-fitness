export default function Card({
    children,
    width,
    height
  }: Readonly<{
    children: React.ReactNode,
    width?:number | null,
    height?:number | null
  }>) {
    return (
        <div className={`resources-info w-[${width}px] h-[${height}px]`}>
            {children}
        </div>
    )
    
}