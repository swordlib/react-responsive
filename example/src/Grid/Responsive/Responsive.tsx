import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import styles from './Responsive.module.scss'

const { Row, Col } = Grid

export default function Responsive() {
  return (
    <>
      <Row className={styles.row}>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          Col
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Col
        </Col>
      </Row>
    </>
  )
}
