export default function Banner(){
  return <section
    className="w-full h-max relative"
  >
    <img 
      src="/images/pollution.png" 
      alt='A forest coated in smog, with factories spewing emissions visible on the horizon' 
      title='Factories emitting more carbon dioxide than thousands of people can hope to offset'
      className="w-full h-auto min-h-[20rem] object-cover"
    />
    <div
      className="block w-full h-full absolute left-0 bottom-0 bg-orange-200 mix-blend-multiply"
    >
    </div>
    <div
      className="w-full h-full flex flex-row items-center justify-center px-4 absolute left-0 top-0"
    >
      <hgroup
        className="border-l-4 border-l-solid border-lime-200 m-auto w-max pl-4 text-white"
      >
        <h1
          className="font-bold text-2xl"
        >Reducing Your Carbon Footprint</h1>
        <h2
          className="text-lg"
        >As if You Can Make Any Difference</h2>
      </hgroup>
    </div>
    <div
      className="block bg-gradient-to-b from-transparent to-ironore w-full h-[25%] absolute left-0 bottom-0"
    />
  </section>
}