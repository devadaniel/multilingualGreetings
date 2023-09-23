import './index.css'

const TabItem = props => {
  const {TabItems, isActiveTab, onClickTab} = props
  const {buttonText, id} = TabItems

  const activeButtonClass = isActiveTab ? 'active-button' : ''

  const onClickTabButton = () => {
    onClickTab(id)
  }
  return (
    <li className="tab-items">
      <button
        className={`language-button ${activeButtonClass}`}
        type="button"
        onClick={onClickTabButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
