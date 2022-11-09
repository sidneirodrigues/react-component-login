import * as C from './AppStyles';
import img from './assets/imgConection.svg';

const App = () => {

  console.log(img)
  return (
    <C.Container>

        <C.Header>
              <C.Title>Faça login<br />E entre para o nosso time</C.Title>
              <C.ImgPrimary src={img}></C.ImgPrimary>
        </C.Header>

        <C.AsideForm>
              <C.Form>
                <C.FormDiv>
                  <C.FormLabel>Usuário</C.FormLabel>
                  <C.FormInput placeholder='Usuário'></C.FormInput>
                </C.FormDiv>

                <C.FormDiv>
                  <C.FormLabel>Senha</C.FormLabel>
                  <C.FormInput placeholder='Senha' type="password"></C.FormInput>
                </C.FormDiv>
                <C.FormBtn>Login</C.FormBtn>
              </C.Form>
        </C.AsideForm>

    </C.Container>
  )
}

export default App;