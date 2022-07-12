import React from 'react'
import '../../../css/header/Header.css';
import { words } from '../../../words';
export default function Header() {
  return (
    <header>
        {words.headerTitle}
    </header>
  )
}
