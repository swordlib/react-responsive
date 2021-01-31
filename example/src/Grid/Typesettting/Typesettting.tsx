import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import Divider from '../../Divider'
import styles from './Typesettting.module.scss'

const { Row, Col } = Grid

export default function Typesettting() {
  return (
    <>
      <Divider>sub-element align left</Divider>
      <Row justify='start' className={styles.row}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider>sub-element align center</Divider>
      <Row justify='center' className={styles.row}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider>sub-element align right</Divider>
      <Row justify='end' className={styles.row}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider>sub-element monospaced arrangement</Divider>
      <Row justify='space-between' className={styles.row}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>

      <Divider>sub-element align full</Divider>
      <Row justify='space-around' className={styles.row}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </>
  )
}
