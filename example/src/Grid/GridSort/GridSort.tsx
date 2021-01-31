import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import styles from './GridSort.module.scss'

const { Row, Col } = Grid

export default function GridSort() {
  return (
    <>
      <Row className={styles.row}>
        <Col span={18} push={6}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
          col-6 col-pull-18
        </Col>
      </Row>
    </>
  )
}
