import { usePreloadImage } from '@/hooks/usePreloadImage'

import { Confirmation } from './components/Confirmation'
import { EntryForm } from './components/EntryForm'
import * as styles from './Entry.styles'
import { useEntry } from './useEntry'

export const Entry = () => {
  const {
    pageState,
    goToComfirmation,
    backToInput,
    handleEntry,
    handleSetUserInfo,
    userInfo,
    teamNameJp,
    loading,
    selectOptions,
  } = useEntry()
  //画像のプリロード
  usePreloadImage()

  if (loading) return <div>loading...</div>

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <h1 css={styles.title}>
          <span css={styles.titleCaption}>TAM30周年記念ゲームアプリ</span>
          <span css={styles.titleMain}>タップバトル</span>
        </h1>
        <p css={styles.explanation}>
          {pageState === 'input' && 'まずはエントリーしてね'}
          {pageState === 'confirmation' && 'この内容でエントリーしますか？'}
        </p>
        {pageState === 'input' && (
          <EntryForm
            handleClick={goToComfirmation}
            setUserInfo={handleSetUserInfo}
            defaultValues={userInfo}
            selectOptions={selectOptions}
          />
        )}
        {pageState === 'confirmation' && (
          <Confirmation
            team={teamNameJp}
            name={userInfo.name}
            handleClickBack={backToInput}
            handleClickEntry={handleEntry}
          />
        )}
        <div css={styles.spacer}></div>
        <div css={styles.tamkunContainer}>
          {pageState === 'input' && (
            <img
              css={styles.tamkun}
              src="/tamkun_1.png"
              alt="Picture of the author"
            />
          )}

          {pageState === 'confirmation' && (
            <img
              css={styles.tamkun}
              src="/tamkun_3.png"
              alt="Picture of the author"
            />
          )}
        </div>
      </div>
    </div>
  )
}
