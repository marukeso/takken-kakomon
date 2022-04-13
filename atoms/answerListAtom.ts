import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { answerListItem } from '../types/types'

const { persistAtom } = recoilPersist()

export const answerListState = atom<answerListItem[]>({
  key: 'answerListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})
