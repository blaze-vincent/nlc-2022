export default function Item({title, body, color}){

  const borders = {
    'orange-200': 'border-orange-200',
    'violet-200': 'border-violet-200',
    'lime-200': 'border-lime-200'
  }

  return <div
    className={`flex flex-col text-white border-l-2 border-solid ${borders[color]} max-w-screen-md w-full pl-4`}
  >
    <h5
      className="text-lg font-[Syne]"
    >
      {title}
    </h5>
    <p>{body}</p>
  </div>
}