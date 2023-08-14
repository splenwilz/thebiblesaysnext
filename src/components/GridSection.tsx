import Link from 'next/link'

interface GridItemProps {
  title: string
  description: string
  link: string
}

interface GridSectionProps {
  items: Array<GridItemProps>
  // onClick: () => void
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => {
  return (
    <div
      className="grid md:grid-cols-2 px-10 md:px-20  gap-6 cursor-pointer"
      // onClick={onClick}
    >
      {items.map((item, index) => (
        // <div key={index} className="bg-thebiblesaysoffwhite p-10">
        //   <h6 className="font-lexend font-extrabold text-xl">{item.title}</h6>
        //   <p className="mt-5 font-serifpro">{item.description}</p>
        // </div>
        <Link
          key={index}
          className="bg-thebiblesaysoffwhite p-10"
          href={`./timeline2/${item.link}`}
        >
          <h6 className="font-lexend font-extrabold text-xl">{item.title}</h6>
          <p className="mt-5 font-serifpro">{item.description}</p>
        </Link>
      ))}
    </div>
  )
}

export default GridSection
