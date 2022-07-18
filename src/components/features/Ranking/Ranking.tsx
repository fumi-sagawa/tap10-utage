import * as styles from './Ranking.styles'
import { useRanking } from './useRanking'

type Props = {
  gameKey: string
}

export const Ranking = (props: Props) => {
  const { loading, entryList } = useRanking(props.gameKey)
  if (loading) return <div>loading...</div>
  if (!entryList.length) return <div>data is not found</div>

  return (
    <div css={styles.container}>
      {entryList.map((item, index) => (
        <div css={styles.inner} key={item.teamNameJp}>
          <p css={styles.title}>
            {index + 1}位！{item.teamNameJp} {item.average}
          </p>
          <ul css={styles.scoreList}>
            {item.scoreList.map((entryItem) => (
              <li css={styles.scoreListItem} key={entryItem.id}>
                <div>{entryItem.full_name}さん</div>
                <div css={styles.tapCount}>{entryItem.tap_count || 0}回</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
