import React from 'react'
import { Grid } from 'react-responsive'
import styles from './MoreResponsive.module.scss'

const { Row, Col } = Grid

export default function MoreResponsive() {
  return (
    <>
      <Row className={styles.row}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
    </>
  )
}
