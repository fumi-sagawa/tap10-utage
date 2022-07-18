import { useRouter } from 'next/router'

import { RankingContainer } from './components/RankingContainer'
import { Table } from './components/Table'
import * as styles from './Dashboard.styles'

export const Dashboard = () => {
  const router = useRouter()

  return (
    <div css={styles.wrapper}>
      <h1 css={styles.title}>
        TAM30周年記念ゲームアプリ タップアプリ(仮) 管理画面
      </h1>
      {router.query.key ? (
        <div css={styles.container}>
          <Table gameKey={router.query.key as string} />
          <RankingContainer gameKey={router.query.key as string} />
        </div>
      ) : (
        <div>立ち上げ中...</div>
      )}
    </div>
  )
}
