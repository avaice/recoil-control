import { AsyncDataQueries } from '../components/AsyncDataQueries/AsyncDataQueries'
import { AsyncDataQueries2 } from '../components/AsyncDataQueries2/AsyncDataQueries2'

export default function Home() {
  return (
    <div>
      <h1>Hello, Recoil!</h1>
      <hr />
      <section>
        <h2>これは何</h2>
        <p>Recoilマスターになるための勉強ページ</p>
      </section>
      <h2>ここから実装</h2>
      <section>
        <h3>Recoilで非同期データフェッチ（永続キャッシュ）</h3>
        <AsyncDataQueries />
      </section>
      <section>
        <h3>
          Recoilで非同期データフェッチ（参照するstateの値が変わったらデータ更新）
        </h3>
        <AsyncDataQueries2 />
      </section>
    </div>
  )
}
