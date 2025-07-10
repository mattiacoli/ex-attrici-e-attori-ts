import { Actress } from "./types/Actress_type";

function isActress(actress: unknown): actress is Actress {
  if (
    actress &&
    typeof actress === "object" &&
    "id" in actress &&
    typeof actress.id === "number" &&
    "name" in actress &&
    typeof actress.name === "string" &&
    "birth_year" in actress &&
    typeof actress.birth_year === "number" &&
    "biography" in actress &&
    typeof actress.biography === "string" &&
    "image" in actress &&
    typeof actress.image === "string" &&
    "id" in actress &&
    typeof actress.id === "number" &&
    "most_famous_movies" in actress &&
    Array.isArray(actress.most_famous_movies) &&
    "awards" in actress &&
    typeof actress.awards === "string" &&
    "nationality" in actress &&
    typeof actress.id === "string"
  ) {
    return true
  }
  return false
}


async function getActress(id: number): Promise<Actress | null> {
  try {
    const response = await fetch(`http://localhost:3333/actresses/${id}`)
    if (!response.ok) {
      throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`)
    }
    const actress: unknown = await response.json()
    if (!isActress(actress)) {
      throw new Error('Formato non valido')
    }
    return actress
  } catch (error) {
    console.error(error)
    return null
  }
}
async function getAllActresses(): Promise<object[] | null> {
  try {
    const response = await fetch(`http://localhost:3333/actresses`)
    if (!response.ok) {
      throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`)
    }
    const actresses: [] | null = await response.json()
    return actresses
  } catch (error) {
    console.error(error)
    return null
  }
}
