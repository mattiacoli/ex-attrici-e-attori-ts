import { Actress } from "./types/Actress_type";

// type guards
function isActress(actress: unknown): actress is Actress {
  if (
    actress &&
    typeof actress === "object" && actress != null &&
    "id" in actress && typeof actress.id === "number" &&
    "name" in actress && typeof actress.name === "string" &&
    "birth_year" in actress && typeof actress.birth_year === "number" &&
    "biography" in actress && typeof actress.biography === "string" &&
    "image" in actress && typeof actress.image === "string" &&
    "most_famous_movies" in actress &&
    actress.most_famous_movies instanceof Array &&
    actress.most_famous_movies.length === 3 &&
    actress.most_famous_movies.every(m => typeof m === 'string') &&
    "awards" in actress && typeof actress.awards === "string" &&
    "nationality" in actress && typeof actress.nationality === "string"
  ) {
    return true
  }
  return false
}

// get single actress
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
    if (error instanceof Error) {
      console.error('Errore durante il recupero di dati', error)
    } else {
      console.error('Unknown Error', error)
    }
    return null
  }
}

// get all actresses
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

async function getActresses(ids: number[]): Promise<Actress[] | null> {
  try {
    const promises = ids.map(id => getActress(id))
    const actresses = await Promise.all(promises)
    const validActresses = actresses.filter((actress): actress is Actress => actress !== null)
    return validActresses
  } catch (error) {
    console.error(error)
    return null
  }
}


const attrici = getAllActresses()
console.log(attrici)