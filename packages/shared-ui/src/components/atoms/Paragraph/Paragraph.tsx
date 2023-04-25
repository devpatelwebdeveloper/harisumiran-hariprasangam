import React from 'react'
import { classNames } from '../../../utils';
import styles from "./Paragraph.module.scss";

export interface ParagraphProps {
 children: string,
 theme: 'red' | 'blue'|'default'
}

function Paragraph({ children, theme = 'default' }: ParagraphProps) {
 return (
  <p className={classNames(styles[theme])}>{children}</p>
 )
}

export default Paragraph