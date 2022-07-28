import { Spacer } from '@/components/parts/Spacer'

import * as styles from './Result.styles'
import { useResult } from './useResult'

type ResultProps = {
  tapCount: number
  memberIllustrationImageSrc: string
  memberName: string
  memberProfileImageSrc: string
}

export const Result = (props: ResultProps) => {
  const { isModalVisible, toggleModal } = useResult()
  return (
    <div css={styles.container}>
      <div css={styles.resultContainer}>
        <p css={styles.resultText}>あなたの結果は</p>
        <p>
          <span css={styles.count}>{props.tapCount}</span>
          <span css={styles.unit}>回</span>
        </p>
      </div>
      <Spacer margin={40} />
      <p css={styles.text}>
        結果発表をお待ちください
        <br /> (画面が自動で変わります)
      </p>
      <Spacer margin={32} />
      <p>２回目の挑戦はなしです</p>
      <Spacer margin={64} />
      <div css={styles.imageWrapper}>
        <div css={styles.imageContainer}>
          <img
            src={props.memberIllustrationImageSrc}
            alt="TAMメンバーの素敵な似顔絵"
            css={styles.image}
          />
        </div>
        <button css={styles.profileButton} onClick={toggleModal}>
          {props.memberName}さん プロフィールはこちら
        </button>
      </div>
      {isModalVisible && (
        <div css={styles.modalWrapper} onClick={toggleModal}>
          <img
            css={styles.modalImage}
            src={props.memberProfileImageSrc}
            alt="TAMメンバーの素敵なプロフィール"
          />
        </div>
      )}
    </div>
  )
}
