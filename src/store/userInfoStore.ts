import { atom } from 'jotai'

export const userInfoAtom = atom({ name: '', team: '' })
export const userIdAtom = atom<number>(0)
