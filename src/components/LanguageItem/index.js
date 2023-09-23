import './index.css'

const LanguageItem = props => {
  const {languageItem} = props
  const {imageUrl, imageAltText} = languageItem
  return (
    <li className="language-item">
      <img src={imageUrl} className="language-image" alt={`${imageAltText}`} />
    </li>
  )
}

export default LanguageItem
