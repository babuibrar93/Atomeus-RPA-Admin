import React from 'react'
import UserManagement from '../../components/management/userManagement/userManagement'
import Navbar from '../../common/navbar/navbar'
import Sidebar from '../../common/sidebar/sidebar'
import { ManageUserWrapper } from './style'


const ManageUser = () => {
  return (
    <ManageUserWrapper>
        <Navbar />
        <Sidebar />
      <UserManagement />
    </ManageUserWrapper>
  )
}

export default ManageUser
