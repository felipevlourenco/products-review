import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Button from '../Shared/Button'
import Input from '../Shared/Input'
import LOGO from './../../assets/images/logo.png'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const location = useLocation()
  const history = useHistory()

  const isHome = () => {
    return location.pathname === '/'
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <header className={styles['app-header']}>
      <img src={LOGO} />
      {isHome() ? (
        <Input value="" handleChange={(value) => console.log(value)} placeholder="Search..." />
      ) : (
        <Button onClick={goBack}>
          <span>Back</span>
        </Button>
      )}
    </header>
  )
}

export default Header
