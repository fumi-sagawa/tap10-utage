import { useRouter } from 'next/router'

import { Ranking } from './components/Ranking'
import { Table } from './components/Table'
import * as styles from './Dashboard.styles'
// import { useDashboard } from './useDashboard'

export const Dashboard = () => {
  const router = useRouter()
  console.log(router.query.key)

  // const { gameKey } = useDashboard()
  return (
    <div css={styles.wrapper}>
      <h1 css={styles.title}>
        TAM30周年記念ゲームアプリ タップアプリ(仮) 管理画面
      </h1>
      {router.query.key ? (
        <div css={styles.container}>
          <Table gameKey={router.query.key as string} />
          {/* <Ranking /> */}
        </div>
      ) : (
        <div>立ち上げ中...</div>
      )}
    </div>
  )
}
