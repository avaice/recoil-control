import { useRecoilValueLoadable } from 'recoil'
import { arrayGetApiState } from '../../components/atom'

export default function Suretsu() {
  const arr = useRecoilValueLoadable(arrayGetApiState)

  return (
    <div>
      <h1>美しい数字たち</h1>
      {arr.state === 'hasValue' && (
        <p suppressHydrationWarning>長さ：{arr.contents.count}</p>
      )}
      {arr.state === 'hasValue'
        ? arr.contents.item.map((v) => <p key={v}>{v}</p>)
        : arr.state}
    </div>
  )
}
