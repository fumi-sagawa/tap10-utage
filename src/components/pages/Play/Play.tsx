import { Spacer } from '@/components/parts/Spacer'
import { memberInfoList } from '@/constants/memberInfo'

import { Game } from './components/Game'
import { Result } from './components/Result'
import * as styles from './Play.styles'
import { usePlay } from './usePlay'

export const Play = () => {
  const {
    handleClickTapButton,
    startGame,
    handleClickResult,
    isPlayng,
    tapCount,
    pageStae,
    userNumber,
    time,
    timeLimit,
    isSoundOn,
    toggleSound,
    userInfo,
    userTeamJp,
    isEnd,
  } = usePlay(memberInfoList.length)

  const imageSrc =
    tapCount === 29
      ? '/tamkun.png'
      : memberInfoList[userNumber]?.illustrationImageSrc

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <h1 css={styles.title}>TAM30周年記念ゲームアプリ タップバトル</h1>
        <Spacer margin={34} />
        <p css={styles.caption}>
          <span css={styles.name}>
            {userTeamJp} {userInfo.name}
          </span>{' '}
          さんの挑戦
        </p>
        <Spacer margin={8} />
        {pageStae === 'playng' && !isPlayng ? (
          <p css={styles.caption}>{timeLimit / 1000}秒で何回タップできるか？</p>
        ) : (
          <Spacer margin={18} />
        )}
        {pageStae === 'playng' && (
          <Game
            isPlayng={isPlayng}
            isEnd={isEnd}
            time={time}
            imageSrc={imageSrc}
            onClickTapButton={handleClickTapButton}
            onClickStart={startGame}
            onClickResult={handleClickResult}
            onClickToggle={toggleSound}
            isSoundOn={isSoundOn}
          />
        )}
        {pageStae === 'result' && (
          <Result
            tapCount={tapCount}
            memberIllustrationImageSrc={
              memberInfoList[userNumber]?.illustrationImageSrc
            }
            memberName={memberInfoList[userNumber]?.name}
            memberProfileImageSrc={memberInfoList[userNumber]?.profileImageSrc}
          />
        )}
      </div>
    </div>
  )
}
