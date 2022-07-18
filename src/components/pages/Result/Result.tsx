import Image from 'next/image'
import { useRouter } from 'next/router'

import { Ranking } from '@/components/features/Ranking'
import { Button } from '@/components/parts/Button'

import * as styles from './Result.styles'
import { useResult } from './useResult'

export const Result = () => {
  const router = useRouter()
  const { handleClickDetail, topTeam, loading, pageState } = useResult()

  if (loading) return <div>loading...</div>
  return (
    <div>
      {pageState === 'scoretop' && (
        <div>
          {/* TODO: いい感じの切り替わりアニメーション */}
          <h1>TAM30周年記念ゲームアプリ タップバトル</h1>
          <p>結果発表！</p>
          <p>平均して 一番多くタップ できたチームは</p>
          <p>
            チーム {topTeam?.teamNameJp} 平均 {topTeam?.average}回!
          </p>
          <Image
            src="/tamkun.png"
            alt="Picture of the author"
            width={100}
            height={159}
            objectFit="contain"
          />
          <Button
            text={'詳しくみる'}
            type={'button'}
            onClick={handleClickDetail}
          />
        </div>
      )}
      {pageState === 'ranking' && router.isReady && (
        <div>
          <Ranking gameKey={router.query.key as string} />
          {/* <Ranking gameKey={'ce5f76fb-65bc-4e61-8e35-4ececdd253db'} /> */}
        </div>
      )}
    </div>
  )
}
