import React from 'react'
import { Grid } from 'react-responsive'
import styles from './Offset.module.scss'

const { Row, Col } = Grid

export default function Offset() {
  return (
    <>
      <Row className={styles.row}>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
        <Col span={6} offset={6}>
          col-6 col-offset-6
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
    </>
  )
}
