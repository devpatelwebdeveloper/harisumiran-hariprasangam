import React from 'react'
import { textColor } from './Paragraph.css'

type ParagraphProps = {
  children: string,
  variant:'primary'|'secondary'
}

export default function Paragraph({children,variant}:ParagraphProps) {
  return (
    <p className={textColor[variant]}>{children}Check</p>
  )
}
