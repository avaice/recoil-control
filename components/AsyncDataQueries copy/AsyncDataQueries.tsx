import Link from 'next/link'
import { useRecoilValueLoadable } from 'recoil'
import { dateGetApiState } from '../atom'

export const AsyncDataQueries = () => {
  const date = useRecoilValueLoadable(dateGetApiState)

  if (date.state === 'hasValue') {
    return (
      <div>
        <p>{date.contents}</p>
        <Link href="./time">でっかく見る</Link>
      </div>
    )
  }
  return <p> {date.state}</p>
}
