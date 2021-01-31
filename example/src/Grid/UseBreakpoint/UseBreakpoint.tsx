import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import styles from './UseBreakpoint.module.scss'

const { useBreakpoint } = Grid

export default function UseBreakpoint() {
  const screens = useBreakpoint();
  console.log(screens)
  return (
    <div className={styles.tags}>
      Current break point:{' '}
      {Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => (
          <div className={styles.tag} key={screen[0]}>
            {screen[0]}
          </div>
        ))}
    </div>
  )
}
