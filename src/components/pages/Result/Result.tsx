import Image from 'next/image'

import { Button } from '@/components/parts/Button'

// import * as styles from './Result.styles'
import { useResult } from './useResult'

export const Result = () => {
  useResult()
  return (
    <div>
      {/* TODO: いい感じの切り替わりアニメーション */}
      <h1>TAM30周年記念ゲームアプリ タップバトル</h1>
      <p>結果発表！</p>
      <p>平均して 一番多くタップ できたチームは</p>
      <p>チーム TAMKO 平均 140回!</p>
      <Image
        src="/tamkun.png"
        alt="Picture of the author"
        width={100}
        height={159}
        objectFit="contain"
      />
      <Button text={'詳しくみる'} type={'button'} />
    </div>
  )
}
