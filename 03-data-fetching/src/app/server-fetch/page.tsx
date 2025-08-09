type RecipeItem = {
  id: number;
  name: string;
  ingredients: string[];
};

type Recipe = {
  recipes: RecipeItem[];
};

async function fetchRecipes(): Promise<Recipe> {
  const response = await fetch('https://dummyjson.com/recipes');

  if (!response.ok) {
    throw new Error('Failed to fetch recipes!');
  }

  return response.json();
}

export default async function ServerFetchExp() {
  const recipes = await fetchRecipes();

  return (
    <div className="flex flex-col p-2 items-center">
      <h1 className="text-2xl font-bold">Data Fetching in Server Component</h1>

      <div className="flex flex-col items-start gap-4 my-4">
        {recipes?.recipes?.map((recipe) => (
          <div
            key={recipe.id}
            className="w-full p-3 border bg-cyan-100 rounded-full"
          >
            <h1 className="font-semibold">{recipe.name}</h1>
            <p className="text-neutral-500">
              Ingredients: {recipe.ingredients.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
