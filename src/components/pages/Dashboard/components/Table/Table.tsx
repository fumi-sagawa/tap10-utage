import * as styles from './Table.styles'
import { useTable } from './useTable'

type Props = {
  gameKey: string
}

export const Table = (props: Props) => {
  const { loading, entryList } = useTable(props.gameKey)

  if (loading) return <div>loading...</div>
  if (!entryList.length) return <div>data is not found</div>

  return (
    <div css={styles.container}>
      <h2 css={styles.title}>エントリー</h2>
      <ul css={styles.table}>
        <li css={styles.listItem}>
          <div>時間</div>
          <div>チーム名</div>
          <div>名前</div>
          <div>ステータス</div>
          <div>結果</div>
        </li>
        {entryList.map((item) => (
          <li css={styles.listItem} key={item.id}>
            <div>{item.created_at_hhtt}</div>
            <div>{item.teamJp}</div>
            <div>{item.full_name}</div>
            <div css={styles.playIndicator(item.played)}>
              {item.played ? '完了' : '未完了'}
            </div>
            <div>{item.tap_count || 0}回</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
