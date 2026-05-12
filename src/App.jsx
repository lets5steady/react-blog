import SectionHeader from "./components/commons/SectionHeader/SectionHeader"
import SimpleButton from "./components/commons/SimpleButton/SimpleButton"
import FooterArea from "./components/footer/FooterArea/FooterArea"
import HeaderArea from "./components/header/HeaderArea/HeaderArea"
import MainArea from "./components/main/MainArea/MainArea"

function App() {

  return (
    <>
      <HeaderArea />
      <MainArea />
      <FooterArea />
      <SectionHeader title='We Value Your Feedback' />
      <SimpleButton text='送信'/>
    </>
  )
}

export default App

