// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, clickTabImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onImageChange = () => {
    clickTabImage(id)
  }

  const activeTabBtnClassName = isActive ? '' : 'active-tab-btn'

  return (
      <button className={`thumb-image ${activeTabBtnClassName}`}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onImageChange}
        />
      </button>
  )
}

export default ThumbnailItem
