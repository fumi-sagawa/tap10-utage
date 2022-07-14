import { Controller } from 'react-hook-form'

import { Button } from '@/components/parts/Button'

import type { UserInfo } from '../../useEntry'
import { Input } from './components/Input'
import { Select } from './components/Select'
import * as styles from './EntryForm.styles'
import { useEntryForm } from './useEntryForm'

export type Props = {
  handleClick: () => void
  setUserInfo: (newState: { name: string; team: string }) => void
  defaultValues: UserInfo
}

export const EntryForm = (props: Props) => {
  const { methods, handleSubmit } = useEntryForm(
    props.handleClick,
    props.setUserInfo,
    props.defaultValues
  )
  return (
    <form css={styles.form} onSubmit={handleSubmit}>
      <Controller
        name="team"
        control={methods.control}
        render={({ field }) => (
          <Select
            label={'チーム名'}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={methods.formState.errors.team?.message}
            id={'team'}
          />
        )}
      />
      <Controller
        name="name"
        control={methods.control}
        render={({ field }) => (
          <Input
            label={'名前'}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={methods.formState.errors.name?.message}
            id={'name'}
          />
        )}
      />
      <Button
        text={'エントリー'}
        type={'submit'}
        disabled={!methods.formState.isValid} // here
      />
    </form>
  )
}
