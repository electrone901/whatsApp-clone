import { Avatar, IconButton, Button } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import * as EmailValidator from "email-validator"
import Chat from '@material-ui/icons/Chat'
import SearchIncon from '@material-ui/icons/Search'
import styled from 'styled-components'

function Sidebar() {

  const createChat = () => {
    const input = prompt("lease enter an email address for the user you wish to chat with")

    if(!input) return null;

    // email validator
    if(EmailValidator.validate(input)) {
      // we need to add  the chat into the DB 'chats' collection
    }

    // react firebase hooks

  }




  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIncon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat} >Start a new chat</SidebarButton>
    </Container>
  )
}

export default Sidebar
const Container = styled.div``
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`
const IconsContainer = styled.div``
