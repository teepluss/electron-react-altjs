import React from 'react'
import { Toolbar, Actionbar, Button, ButtonGroup } from 'react-photonkit'
import { changeContent } from '../utilities/navigation'

class Header extends React.Component {
  render() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="home" onClick={() => changeContent('home', {})} />
            <Button glyph="github" onClick={() => changeContent('download', {})} />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    )
  }
}

export default Header
