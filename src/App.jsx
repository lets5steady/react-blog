import Logo from "./components/commons/Logo"
import SectionHeader from "./components/commons/SectionHeader/SectionHeader"
import SimpleButton from "./components/commons/SimpleButton/SimpleButton"
import FooterArea from "./components/footer/FooterArea/FooterArea"
import FirstView from "./components/header/FirstView/FirstView"
import HeaderArea from "./components/header/HeaderArea/HeaderArea"
import MainArea from "./components/main/MainArea/MainArea"
import TextArea from "./components/main/TextArea/TextArea"

function App() {

  return (
    <>
      <HeaderArea />
      <MainArea />
      <FooterArea />
      <SectionHeader title='We Value Your Feedback' />
      <SimpleButton text='送信'/>
      <Logo color='accent' />
      <FirstView />
      <TextArea />
    </>
  )
}

export default App

