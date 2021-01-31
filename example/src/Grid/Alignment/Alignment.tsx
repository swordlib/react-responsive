import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import Divider from '../../Divider'
import styles from './Alignment.module.scss'

const { Row, Col } = Grid

const DemoBox = (props: { value: number, children: any}) => <div className={styles.demoBox} style={{ height: props.value }}>{props.children}</div>

export default function Alignment() {
  return (
    <>
      <Divider>Align Top</Divider>
    <Row justify="center" align="top" className={styles.row}>
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider>Align Middle</Divider>
    <Row justify="space-around" align="middle" className={styles.row}>
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>

    <Divider>Align Bottom</Divider>
    <Row justify="space-between" align="bottom" className={styles.row}>
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    </>
  )
}