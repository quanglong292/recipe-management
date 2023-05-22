import React, { useState, useEffect } from "react";
import "./App.css";
import SearchText from "./components/SearchText";
import RecipeCard from "./components/RecipeCard";
import { IRecipe } from "./types/recipe.type";
import RecipeDetail from "./components/RecipeDetail";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { getRecipe } from "./apis/recipe.api";


function App() {
  const navaigate = useNavigate()

  const [search, setSearch] = useState<undefined | string>();
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [originRecipes, setOriginRecipes] = useState<IRecipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<string>("")

  // Functions
  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value
    setSearch(value)
    setRecipes(!value ? originRecipes : originRecipes.filter((i: IRecipe) => !search ? false : i.name?.toLowerCase()?.includes(search.toLowerCase())))
  }

  const handleAddRecipe = () => {
    navaigate("/create-new")
  }

  const handleInit = async () => {
    const data = await getRecipe()
    // console.log({ handleInit: data });
    setRecipes(data)
    setOriginRecipes(data)
  }

  useEffect(() => {
    handleInit()
  }, [])


  return (
    <div className="w-full flex flex-col gap-4 p-6">
      <SearchText onChange={onSearch} value={search} placeholder="Type recipe name..." />
      <div className="my-4 mb-2">
        <Button onClick={handleAddRecipe}>Add +</Button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {recipes.map(i => <RecipeCard key={i.id} onSelect={(id) => {
          if (id === selectedRecipe) setSelectedRecipe("")
          else setSelectedRecipe(id)
        }} item={i} />)}
      </div>
      <RecipeDetail onCancel={() => setSelectedRecipe("")} visible={Boolean(selectedRecipe)} data={recipes.find((item: IRecipe) => item.id === selectedRecipe)} />
    </div>
  );
}

export default App;
