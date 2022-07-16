export type Entry = {
  id: number
  created_at: string
  full_name: string
  tap_count: number
  played: boolean
  team: string
  game_key: string
}

export type TeamMaster = {
  id: number
  created_at: string
  team_name: string
  team_value: string
}

export type Game = {
  id: number
  created_at: string
  key: string
  finished: boolean
}
