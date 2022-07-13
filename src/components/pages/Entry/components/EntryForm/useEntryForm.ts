import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import type { UserInfo } from '../../useEntry'

export const useEntryForm = (
  handleClick: () => void,
  setUserInfo: (newState: { name: string; team: string }) => void,
  defaultValues: UserInfo
) => {
  const schema = yup.object({
    name: yup.string().required('入力してください'),
    team: yup.string().required('入力してください'),
  })
  const methods = useForm<UserInfo>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: defaultValues,
  })
  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data)
    setUserInfo(data)
    handleClick()
  })

  return { methods, handleSubmit }
}
