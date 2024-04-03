
import './FeatureItem.css'

function FeatureItem({ icon, titre, description }) {
    return (
        <div className="feature-item">
            <img src={icon} alt="Icon" className="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
                {description}
            </p>
        </div>
    )

}
export default FeatureItem