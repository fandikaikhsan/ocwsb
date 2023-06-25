"use client"

import { FC } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import styled from "styled-components"

interface MarkdownWrapProps {
  description: string
  color?: string
}

interface StyledMarkdownWrapProps {
  color: string
}

const MarkdownWrap: FC<MarkdownWrapProps> = ({ description, color }) => {
  const selectedColor = color || "black"

  return (
    <StyledMarkdownWrap color={selectedColor}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {description}
      </ReactMarkdown>
    </StyledMarkdownWrap>
  )
}

const StyledMarkdownWrap = styled.div<StyledMarkdownWrapProps>`
  h1 {
    color: ${(props) => props.color};
    padding: 0.5rem 0rem;
    text-decoration: bold;
    font-size: 2rem;
  }

  h2 {
    color: ${(props) => props.color};
    padding: 0.5rem 0rem;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a {
    text-decoration: underline;
  }

  img {
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
    width: 300px;
    height: 300px;
    padding: 1rem;
  }

  p {
    padding: 0.5rem 0rem;
    color: ${(props) => props.color};
    text-color: ${(props) => props.color};
    font-size: 14px;
  }

  ol,
  ul {
    color: #575758;
    font-size: 14px;
    margin-left: 20px;
  }
`

export default MarkdownWrap
