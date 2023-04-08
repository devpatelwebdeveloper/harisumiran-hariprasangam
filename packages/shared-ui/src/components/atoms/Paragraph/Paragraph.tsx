import React from 'react'
import { classNames } from '../../../utils';
import styles from "./Paragraph.module.scss";

export interface ParagraphProps {
 children: string,
 theme: 'red' | 'blue'
}

function Paragraph({ children, theme = 'blue' }: ParagraphProps) {
 return (
  <div className={classNames(styles[theme])}>{children}</div>
 )
}

export default Paragraph