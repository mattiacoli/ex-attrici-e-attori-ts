import { Person } from "./Person_type"

export type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: string
}