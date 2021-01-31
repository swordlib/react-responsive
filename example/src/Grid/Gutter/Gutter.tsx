import React, { CSSProperties } from 'react'
import { Grid } from 'react-responsive'
import Divider from '../../Divider'
// import styles from './Gutter.module.scss'

const { Row, Col } = Grid

const style: CSSProperties = { background: 'rgba(0, 146, 255, 0.75)', padding: '8px 0', textAlign: 'center' }

export default function Gutter() {
  return (
    <>
      <Divider>Horizontal</Divider>
      <Row gutter={16}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider>Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider>Vertical</Divider>
      <Row gutter={[16, 24]}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  )
}
