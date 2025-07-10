import { Person } from "./Person_type"


type ActressNationality =
  | "American"
  | "British"
  | "Australian"
  | " Israeli - American"
  | "South African"
  | "French"
  | "Indian"
  | "Spanish"
  | " South Korean"
  | "Chinese"

export type Actress = Person & {
  most_famous_movies: [string, string, string],
  awards: string,
  nationality: ActressNationality
}