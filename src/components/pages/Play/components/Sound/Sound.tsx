import { ToggleSwitch } from '@/components/parts/ToggleSwitch'

import * as styles from './Sound.styles'

type SoundProps = {
  isOn: boolean
  onClick: () => void
}

export const Sound = (props: SoundProps) => {
  return (
    <div>
      SOUND
      <ToggleSwitch {...props} />
    </div>
  )
}
