import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

const CursorText = styled.span`
  font-size: 60px;
  color: #000;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 30px;
  }
`;

const Text = styled.h1`
  font-size: 60px;
  color: #000;
  font-weight: bold;
  border-bottom: 4px solid #000;
  @media screen and (max-width: 720px) {
    font-size: 30px;
  }
`;

export default function Home() {
  return (
    <>
      <ReactTypingEffect //
        text={["웹퍼블리셔", "1px", "꼼꼼한", "책임감있는", "협업하는"]}
        cursorRenderer={(cursor) => <CursorText>{cursor}</CursorText>}
        speed={200}
        eraseSpeed={200}
        eraseDelay={200}
        typingDelay={200}
        displayTextRenderer={(text, i) => {
          return (
            <Text>
              #
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return <span key={key}>{char}</span>;
              })}
            </Text>
          );
        }}
      />
    </>
  );
}
