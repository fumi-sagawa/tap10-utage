import Image from 'next/image'

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
    teamName,
    loading,
    selectOptions,
  } = useEntry()

  if (loading) return <div>loading...</div>

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>
        <span>
          TAM30周年記念ゲームアプリ
          <br />
        </span>
        タップバトル(仮)
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
          // team={userInfo.team}
          team={teamName}
          name={userInfo.name}
          handleClickBack={backToInput}
          handleClickEntry={handleEntry}
        />
      )}
      <Image
        src="/tamkun.png"
        alt="Picture of the author"
        width={100}
        height={159}
        objectFit="contain"
      />
    </div>
  )
}
