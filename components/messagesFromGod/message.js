export default function Message({children, time}){
  return <div
    className="flex flex-row max-w-max gap-2 items-end"
  >
    <p
      className="bg-lime-200 py-1 px-2 rounded-md rounded-bl-none max-w-full w-max text-base text-ironore"
    >{children || 'this is the test message'}</p>
    <p
      className="text-xs text-white"
    >{time || '4:20 PM'}</p>
  </div>
}