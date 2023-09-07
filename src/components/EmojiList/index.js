import styled from "@emotion/styled"
import EmojiListItem from "../EmojiListItem"

const Container = styled.ul`
  width: 100%;
  padding: 0;
`

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis
        // indexOf()가 -1이면 없다는 뜻.
        .filter(
          (emoji) =>
            emoji.title.indexOf(keyword) >= 0 ||
            emoji.keywords.indexOf(keyword) >= 0
      )
        // 10개씩 잘라서 보여주기
        .slice(0, 10)
        .map((emoji) => (
          <EmojiListItem key={emoji.title} emoji={emoji} />
        ))}
    </Container>
  )
}

export default EmojiList