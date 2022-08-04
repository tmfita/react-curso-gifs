import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'Simpsons'])
  console.log(categories)
  const onAddCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories([category, ...categories]);
  };
  return (
    <>
      
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory= { (event) => onAddCategory(event) } />
        { categories.map(category => (
          <GifGrid key={category} category={category} />
        )) }
        
    </>
  )
}
