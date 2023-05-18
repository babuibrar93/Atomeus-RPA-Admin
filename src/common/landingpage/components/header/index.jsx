import React, { useState, useEffect } from 'react'
import {DesktopMenu} from './styles'

import DesktopNav from '../desktopmenu'
// import ResponsiveMenu from '../mobilemenu'

export default function Header() {
  

  return (
    <DesktopMenu>
        <DesktopNav/>
        {/* <ResponsiveMenu/> */}
    </DesktopMenu>
  )
}
