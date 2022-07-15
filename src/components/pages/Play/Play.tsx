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
    isEnd,
  } = usePlay(memberInfoList.length)
  return (
    <div>
      <h1 css={styles.title}>TAM30周年記念ゲームアプリ タップバトル</h1>
      <p>
        {userInfo.team} {userInfo.name} さんの挑戦
      </p>
      {pageStae == 'playng' && (
        <Game
          isPlayng={isPlayng}
          isEnd={isEnd}
          time={time}
          timeLimit={timeLimit}
          imageSrc={memberInfoList[userNumber]?.illustrationImageSrc}
          onClickTapButton={handleClickTapButton}
          tapCount={tapCount}
          onClickStart={startGame}
          onClickResult={handleClickResult}
          onClickToggle={toggleSound}
          isSoundOn={isSoundOn}
        />
      )}
      {pageStae == 'result' && (
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
  )
}
