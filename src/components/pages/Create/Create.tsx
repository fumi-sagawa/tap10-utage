import { Button } from '@/components/parts/Button'

import * as styles from './Create.styles'
import { useCreate } from './useCreate'

export const Create = () => {
  const { pageState, handleClickCreate, shareUrl, handleClickAdmin } =
    useCreate()
  return (
    <div>
      <h1>TAM30周年記念ゲームアプリ タップバトル</h1>
      {pageState === 'create' && (
        <Button
          text={'ゲームを作成する！'}
          type={'button'}
          onClick={handleClickCreate}
        />
      )}
      {pageState === 'share' && (
        <div>
          <p> 参加者にURLを共有し管理画面へ進んでください！</p>
          <p>{shareUrl}</p>
          <Button
            text={'管理画面へ進む'}
            type={'button'}
            onClick={handleClickAdmin}
          />
        </div>
      )}
    </div>
  )
}
