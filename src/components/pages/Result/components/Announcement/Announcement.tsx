import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/parts/Button'
import { Spacer } from '@/components/parts/Spacer'

import * as styles from './Announcement.styles'
import { Fukidashi } from './components/Fukidashi'
import { useAnnouncement } from './useAnnouncement'

type Props = {
  topTeam:
    | {
        teamNameJp: string
        average: number
      }
    | undefined
  onClickDetail: () => void
}

export const Announcement = (props: Props) => {
  const { phase } = useAnnouncement()
  return (
    <div css={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {phase === 0 && (
          <Fukidashi key={'result'} textContent={<p>結果発表！</p>} />
        )}
        {phase === 1 && (
          <Fukidashi
            key={'teamis'}
            textContent={
              <p>
                平均して
                <br />
                一番多くタップ
                <br />
                できたチームは
              </p>
            }
          />
        )}
        {phase === 2 && (
          <Fukidashi key={'nanto'} textContent={<p>なんと！！</p>} />
        )}
        {phase === 3 && (
          <Fukidashi
            key={'comfirmation'}
            textContent={<p>ちょっと確認しますね💦</p>}
          />
        )}
        {phase === 4 && (
          <Fukidashi
            key={'kiwotori'}
            textContent={<p>では気を取り直して…</p>}
          />
        )}
        {phase === 5 && (
          <Fukidashi
            key={'teamis2'}
            textContent={
              <p>
                平均して
                <br />
                一番多くタップ
                <br />
                できたチームは！
              </p>
            }
          />
        )}
        {phase === 6 && (
          <Fukidashi
            key={'happyo'}
            textContent={
              <p>
                {props.topTeam?.teamNameJp}
                <br /> 平均 {props.topTeam?.average}
                回🎉
              </p>
            }
          />
        )}
      </AnimatePresence>
      <Image
        src="/dekatamkun.png"
        alt="Picture of the author"
        width={188}
        height={330}
        objectFit="contain"
      />
      <Spacer margin={40} />
      {phase === 6 && (
        <Button
          text={'詳しくみる'}
          type={'button'}
          onClick={props.onClickDetail}
        />
      )}
    </div>
  )
}
