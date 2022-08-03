import Image from 'next/image'
import { useRouter } from 'next/router'

import { Ranking } from '@/components/features/Ranking'
import { Spacer } from '@/components/parts/Spacer'

import { Announcement } from './components/Announcement'
import * as styles from './Result.styles'
import { useResult } from './useResult'

export const Result = () => {
  const router = useRouter()
  const { handleClickDetail, topTeam, loading, pageState } = useResult()

  if (loading) return <div>loading...</div>
  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <h1 css={styles.title}>TAM30周年記念ゲームアプリ タップバトル</h1>
        {pageState === 'scoretop' && (
          <Announcement topTeam={topTeam} onClickDetail={handleClickDetail} />
        )}
        {pageState === 'ranking' && router.isReady && (
          <>
            <p css={styles.rankingTitle}>結果発表！</p>
            <Ranking gameKey={router.query.key as string} />
            {/* <Ranking gameKey={'ce5f76fb-65bc-4e61-8e35-4ececdd253db'} /> */}
          </>
        )}
      </div>
    </div>
  )
}
