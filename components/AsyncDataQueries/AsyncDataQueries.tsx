import Link from 'next/link'
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from 'recoil'
import { dateGetApiState } from '../atom'

export const AsyncDataQueries = () => {
  const date = useRecoilValueLoadable(dateGetApiState)

  const updater = useRecoilRefresher_UNSTABLE(dateGetApiState)

  if (date.state === 'hasValue') {
    return (
      <div>
        <p>{date.contents}</p>
        <Link href="./time">でっかく見る</Link>
        <div>
          <button onClick={updater}>Reload</button>
        </div>
      </div>
    )
  }
  return <p> {date.state}</p>
}
