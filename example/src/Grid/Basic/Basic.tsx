import React from 'react'
import { Grid } from 'react-responsive'
import styles from './Basic.module.scss'

const { Row, Col } = Grid

export default function Basic() {
  return (
    <>
      <Row className={styles.row}>
        <Col span={24}>col</Col>
      </Row>
      <Row className={styles.row}>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row className={styles.row}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row className={styles.row}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  )
}