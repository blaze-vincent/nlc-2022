import Item from "./item"

export default function ItemsContainer({items, color}){

  return <div
    className="flex flex-col gap-8"
  >
    {items.map((itemObj, index) => {
      return <Item title={itemObj.title} body={itemObj.body} key={index} color={color} />
    })}
  </div>
}