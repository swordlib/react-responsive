import React from 'react'
import { Grid } from '@swordlib/react-responsive'
import Divider from '../../Divider'
import styles from './FlexStretch.module.scss'

const { Row, Col } = Grid

export default function FlexStretch() {
  return (
    <>
      <Divider>Percentage columns</Divider>
      <Row className={styles.row}>
        <Col flex={2}>2 / 5</Col>
        <Col flex={3}>3 / 5</Col>
      </Row>
      <Divider>Fill rest</Divider>
      <Row className={styles.row}>
        <Col flex='100px'>100px</Col>
        <Col flex='auto'>Fill Rest</Col>
      </Row>
      <Divider>Raw flex style</Divider>
      <Row className={styles.row}>
        <Col flex='1 1 200px'>1 1 200px</Col>
        <Col flex='0 1 300px'>0 1 300px</Col>
      </Row>

      <Row wrap={false} className={styles.row}>
        <Col flex='none'>
          <div style={{ padding: '0 16px' }}>none</div>
        </Col>
        <Col flex='auto'>auto with no-wrap</Col>
      </Row>
    </>
  )
}
