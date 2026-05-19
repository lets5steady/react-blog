import Logo from "./components/commons/Logo/Logo"
import SectionHeader from "./components/commons/SectionHeader/SectionHeader"
import SimpleButton from "./components/commons/SimpleButton/SimpleButton"
import FooterArea from "./components/footer/FooterArea/FooterArea"
import HeaderArea from "./components/header/HeaderArea/HeaderArea"
import MainArea from "./components/main/MainArea/MainArea"
import RadioButton from "./components/main/RadioButton/RadioButton"
import SelectBoxItem from "./components/main/SelectBoxItem/SelectBoxItem"
import SelectBoxItemList from "./components/main/SelectBoxItemList/SelectBoxItemList"
import TextArea from "./components/main/TextArea/TextArea"
import GridLayout from "./components/main/GridLayout/GridLayout"
import CheckBox from "./components/main/CheckBox/CheckBox"

function App() {
  const medium = [
    { text: 'z', value: 'z', id: 1 },
    { text: '友人の紹介', value: 'friend', id: 2 },
    { text: 'SNS', value: 'SNS', id: 3 },
    { text: 'webバナー', value: 'banner', id: 4 },
    { text: '動画配信', value: 'video', id: 5 },
    { text: '広告・ポスター', value: 'poster', id: 6 },
    { text: 'その他', value: 'other', id: 7 },
  ];

  const ages = [
    { text: '0 - 10', value: '0 - 10', id: 1 },
    { text: '10 - 20', value: '10 - 20', id: 2 },
    { text: '20 - 30', value: '20 - 30', id: 3 },
    { text: '30 - 40', value: '30 - 40', id: 4 },
    { text: '40 - 50', value: '40 - 50', id: 5 },
    { text: '50 and above', value: '50 and above', id: 6 },
  ]

  const favoriteField = [
    { text: '音楽', value: 'music', id: 1 },
    { text: '芸術', value: 'art', id: 2 },
    { text: 'デザイン', value: 'design', id: 3 },
    { text: 'プログラミング', value: 'programming', id: 4 },
  ]

  return (
    <>
      <HeaderArea />
      <MainArea />
      <FooterArea />
      <SectionHeader title='We Value Your Feedback' />
      <SimpleButton text='送信' />
      <TextArea />
      <SelectBoxItemList categoryName='medium'>
        <SelectBoxItem items={medium} />
      </SelectBoxItemList>
      <GridLayout>
        <RadioButton categoryName='age' options={ages}/>
      </GridLayout>
      <GridLayout>
        <CheckBox options={favoriteField}/>
      </GridLayout>
    </>
  )
}

export default App

