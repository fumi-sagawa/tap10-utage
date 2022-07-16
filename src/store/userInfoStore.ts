import { atom } from 'jotai'

export const userInfoAtom = atom({ name: '', team: '' })
export const userTeamJpAtom = atom<string>('')
export const userIdAtom = atom<number>(0)
export const gameKeyAtom = atom<string>('')
