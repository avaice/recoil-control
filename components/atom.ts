import { useState } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { RecoilKeys } from './RecoilKeys'
import { ApiLoaded, ApiNotLoaded } from './types'

export const dateGetApiState = selector({
  key: RecoilKeys.DateGetApi,
  get: async () => {
    const result = await (await fetch('/api/nowtime')).json()
    return result.now
  },
})
export const arrayLenState = atom({
  key: RecoilKeys.ArrayLenState,
  default: 10,
})

type NumArrayApiType = { count: number; item: string[] }

export const arrayGetApiState = selector<NumArrayApiType>({
  key: RecoilKeys.ArrayGetApi,
  get: async ({ get }) => {
    const result = await (
      await fetch(`/api/counter?count=${get(arrayLenState)}`)
    ).json()
    return result
  },
  //cachePolicy_UNSTABLE
})
