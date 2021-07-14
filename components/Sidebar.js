import { Avatar, IconButton, Button } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIncon from '@material-ui/icons/Search'
import * as EmailValidator from 'email-validator'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import Chat from './Chat'


function Sidebar() {
  const [user] = useAuthState(auth)
  // gets access to chats
  const userChatRef = db
    .collection('chats')
    .where('users', 'array-contains', user.email)

  // gives  the actual data
  const [chatsSnapshot] = useCollection(userChatRef)

  const createChat = () => {
    const input = prompt(
      'lease enter an email address for the user you wish to chat with',
    )

    if (!input) return null

    // email validator: chat doesn't exist & prevent chatUser to star a chat with itself
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      // add chat users to firebase
      db.collection('chats').add({
        users: [user.email, input],
      })
    }

    // react firebase hooks
  }

  const chatAlreadyExists = (recipientEmail) =>
    // I need to get the collection of chats and see if that chat exist
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0,
    )

  return (
    <Container>
      <Header>
        <UserAvatar
          onClick={() => {
            auth.signOut()
          }}
        />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
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

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* List of chats */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} user={chat.data().users} />
      ))}
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
