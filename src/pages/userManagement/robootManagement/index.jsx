import React from 'react'
import { ManageUserWrapper } from '../style'
import Navbar from '../../../common/navbar/navbar'
import Sidebar from '../../../common/sidebar/sidebar'
import RobootManagement from '../../../components/management/robootManagement/robootManagement'

const ManageRoboot = () => {
  return (
    <ManageUserWrapper>
        <Navbar />
        <Sidebar />
      <RobootManagement />
    </ManageUserWrapper>
  )
}

export default ManageRoboot
