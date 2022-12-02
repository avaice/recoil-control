import { useRecoilValueLoadable } from 'recoil'
import { dateGetApiState } from '../../components/atom'
import styles from './time.module.css'

export default function Time() {
  const date = useRecoilValueLoadable(dateGetApiState)

  return (
    <div>
      <h1>現在時刻は！？</h1>
      <p className={styles.date} suppressHydrationWarning>
        {date.state === 'hasValue' ? date.contents : date.state}
      </p>
    </div>
  )
}
