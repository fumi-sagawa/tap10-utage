import * as styles from './TextWithLabel.styles'

type TextWithLabelProps = {
  title: string
  text: string
}

export const TextWithLabel = (props: TextWithLabelProps) => {
  return (
    <div css={styles.container}>
      <span css={styles.title}>{props.title}</span>
      <p css={styles.text}>{props.text}</p>
    </div>
  )
}
