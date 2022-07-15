import Image from 'next/image'

import * as styles from './Result.styles'

type ResultProps = {
  tapCount: number
  memberIllustrationImageSrc: string
  memberName: string
  memberProfileImageSrc: string
}

export const Result = (props: ResultProps) => {
  return (
    <div css={styles.container}>
      <p>あなたの結果は</p>
      <p>{props.tapCount}回</p>
      <p>結果発表をお待ちください (画面が自動で変わります)</p>
      <p>２回目の挑戦はなしです</p>
      <div>
        <Image
          src={props.memberIllustrationImageSrc}
          alt="TAMメンバーの素敵な似顔絵"
          objectFit={'cover'}
          height={100}
          width={100}
        />
        <button>{props.memberName}さん プロフィールはこちら</button>
      </div>
      <div>
        <button>バツ</button>
        <Image
          src={props.memberProfileImageSrc}
          alt="TAMメンバーの素敵なプロフィール"
          objectFit={'cover'}
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}
