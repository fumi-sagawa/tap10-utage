import * as styles from './TextWithLabel.styles'

type TextWithLabelProps = {
  title: string
  text: string
}

export const TextWithLabel = (props: TextWithLabelProps) => {
  return (
    <div>
      <span>{props.title}</span>
      <p>{props.text}</p>
    </div>
  )
}
