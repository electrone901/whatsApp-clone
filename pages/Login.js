import Head from 'next/head'

function Login() {
  return (
    <div>
      <Container>
        <Head>
          <title>Login</title>
        </Head>

        <LoginContainer>
          <Logo/>
        </LoginContainer>
      </Container>
    </div>
  )
}

export default Login

const Container = styled.div``
const LoginContainer = styled.div``
const Logo = styled.img``
