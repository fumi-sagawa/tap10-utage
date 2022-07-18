import { Ranking } from '@/components/features/Ranking'
import { Button } from '@/components/parts/Button'

import * as styles from './RankingContainer.styles'
import { useRankingContainer } from './useRankingContainer'

type Props = {
  gameKey: string
}

export const RankingContainer = (props: Props) => {
  const {
    isResultVisible,
    isModalVisible,
    openModal,
    closeModal,
    notPlayedUserLength,
    handleClickFinishGame,
    handleClickRestart,
  } = useRankingContainer(props.gameKey)
  return (
    <div>
      {isResultVisible ? (
        <div css={styles.rankingContainer}>
          <p>ユーザーに結果が発表されました</p>
          <Ranking gameKey={props.gameKey} />
        </div>
      ) : (
        <div css={styles.buttonContainer}>
          <Button text={'結果を表示する'} onClick={openModal} type={'button'} />
        </div>
      )}
      {isResultVisible && (
        <div css={styles.restart}>
          <Button
            text={'ゲームを再発行する'}
            onClick={handleClickRestart}
            type={'button'}
          />
        </div>
      )}
      {isModalVisible && (
        <div css={styles.modalWrapper}>
          <div css={styles.modal}>
            <div css={styles.modalText}>
              <p>未完了 ステータスのユーザーが {notPlayedUserLength}名います</p>
              <p>集計を終了して、結果を表示しても良いですか ? </p>
            </div>
            <div css={styles.modalButtonContainer}>
              <Button text={'いいえ'} onClick={closeModal} type={'button'} />
              <Button
                text={'はい'}
                onClick={handleClickFinishGame}
                type={'button'}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
