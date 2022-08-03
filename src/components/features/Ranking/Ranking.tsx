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
          <div css={styles.rankingGrid}>
            <span css={styles.titleRank}> {index + 1}</span>
            <p css={styles.titleTeam}>{item.teamNameJp}</p>
            <p css={styles.titleNumber}>{item.average}回</p>
            <ol css={styles.scoreList}>
              {item.scoreList.map((entryItem) => (
                <li css={styles.scoreListItem} key={entryItem.id}>
                  <div>{entryItem.full_name}さん</div>
                  <div css={styles.tapCount}>{entryItem.tap_count || 0}回</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  )
}
