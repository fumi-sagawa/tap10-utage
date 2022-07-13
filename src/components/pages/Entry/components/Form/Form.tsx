import * as styles from './Form.styles'
import { useForm } from './useForm'

export const Form = () => {
  const {} = useForm()
  return (
    <div>
      <p>まずはエントリーしてね</p>
    </div>
  )
}
