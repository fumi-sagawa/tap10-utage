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
    setUserInfo,
    userInfo,
  } = useEntry()
  return (
    <div css={styles.container}>
      <h1>
        <span>TAM30周年記念ゲームアプリ</span>
        タップバトル(仮)
      </h1>
      {pageState === 'input' && (
        <EntryForm
          handleClick={goToComfirmation}
          setUserInfo={setUserInfo}
          defaultValues={userInfo}
        />
      )}
      {pageState === 'confirmation' && (
        <Confirmation
          team={userInfo.team}
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
