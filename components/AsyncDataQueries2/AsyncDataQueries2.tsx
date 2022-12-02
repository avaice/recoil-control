import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { arrayLenState } from '../atom'

export const AsyncDataQueries2 = () => {
  const [count, setCount] = useRecoilState(arrayLenState)
  return (
    <div>
      <p>数の羅列を見てみよう</p>
      <label>
        長さ
        <input
          type={'number'}
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
      </label>
      <Link href="./suretsu">さあみよう</Link>
    </div>
  )
}

// import { useEffect, useState } from 'react'
// import { selector, useRecoilValue, useRecoilValueLoadable } from 'recoil'
// import { RecoilKeys } from '../components/RecoilKeys'

// type DateApiNotLoaded = { status: 'LOADING' | 'FAILED' }

// type DateApiSucceed = {
//   status: 'SUCCESS'
//   data: { now: string }
// }

// type DateApiType = DateApiNotLoaded | DateApiSucceed

// export const AsyncDataQueries = () => {
//   const useDateGetApi = () => {
//     const [apiResult, setApiResult] = useState<DateApiType>({
//       status: 'LOADING',
//     })
//     useEffect(() => {
//       fetch('/api/nowtime')
//         .then((res) => res.json())
//         .then((d: { now: string }) =>
//           setApiResult({ status: 'SUCCESS', data: d })
//         )
//         .catch(() => setApiResult({ status: 'FAILED' }))
//     }, [])

//     return apiResult
//   }

//   const date = useDateGetApi()

//   if (date.status === 'SUCCESS') {
//     return <p>Now time is: {date.data.now}</p>
//   }
//   return <p>{date.status}</p>
// }
