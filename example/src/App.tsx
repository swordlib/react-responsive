import React from 'react'

import '@swordlib/react-responsive/dist/index.css'
import styles from './App.module.scss'
import Divider from './Divider'
import Alignment from './Grid/Alignment/Alignment'
import Basic from './Grid/Basic/Basic'
import FlexStretch from './Grid/FlexStretch/FlexStretch'
import GridSort from './Grid/GridSort/GridSort'
import Gutter from './Grid/Gutter/Gutter'
import MoreResponsive from './Grid/MoreResponsive/MoreResponsive'
import Offset from './Grid/Offset/Offset'
import Order from './Grid/Order/Order'
import Responsive from './Grid/Responsive/Responsive'
import Typesettting from './Grid/Typesettting/Typesettting'
import UseBreakpoint from './Grid/UseBreakpoint/UseBreakpoint'

const App = () => {
  return <>
    {/* Grid demo  */}
    <div className={styles.app}>
      <Divider bold>Basic Example</Divider>
      <Basic />
      <Divider bold>Gutter Example</Divider>
      <Gutter />
      <Divider bold>Offset Example</Divider>
      <Offset />
      <Divider bold>Sort Example</Divider>
      <GridSort />
      <Divider bold>Typesettting Example</Divider>
      <Typesettting />
      <Divider bold>Alignment Example</Divider>
      <Alignment />
      <Divider bold>Order Example</Divider>
      <Order />
      <Divider bold>FlexStretch Example</Divider>
      <FlexStretch />
      <Divider bold>Responsive Example</Divider>
      <Responsive />
      <Divider bold>Responsive Example</Divider>
      <MoreResponsive />
      <Divider bold>UseBreakpoint Example</Divider>
      <UseBreakpoint />
    </div>
  </>
}

export default App
