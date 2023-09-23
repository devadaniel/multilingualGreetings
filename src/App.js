import {Component} from 'react'
import TabItem from './components/TabItem'
import LanguageItem from './components/LanguageItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onClickTab = tabValue => {
    this.setState({activeTab: tabValue})
  }

  render() {
    const {activeTab} = this.state
    const filterLanguageGreeting = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    return (
      <div className="greeting-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="tab-item-container">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              key={eachItem.id}
              TabItems={eachItem}
              onClickTab={this.onClickTab}
              isActiveTab={activeTab === eachItem.id}
            />
          ))}
        </ul>

        {filterLanguageGreeting.map(eachItem => (
          <LanguageItem key={eachItem.id} languageItem={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
