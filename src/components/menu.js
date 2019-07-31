import React from 'react'
import { Menu } from 'semantic-ui-react'

class MenuBasic extends React.Component {

  render() {  
    return (
      <Menu>
        <Menu.Item name='editorials'>
          Home Page
        </Menu.Item>

        <Menu.Item name='reviews' >
          Other Pages
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBasic