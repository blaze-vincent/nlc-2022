export default function Section({children}){
  return <section
    className="w-full max-w-full h-max bg-ironore flex flex-col px-4 py-48 gap-4"
  >
    {children}
  </section>
}