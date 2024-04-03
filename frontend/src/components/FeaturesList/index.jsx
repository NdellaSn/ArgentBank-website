import icon_money from '../../assets/img/icon-money.png'
import icon_security from '../../assets/img/icon-security.png'
import icon_chat from '../../assets/img/icon-chat.png'

import FeatureItem from '../FeatureItem'
import './Features.css'

function FeaturesList() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem icon={icon_chat}
                titre="You are our #1 priority"
                description=" Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem icon={icon_money }
                titre="More savings means higher rates"
                description="The more you save with us, the higher your interest rate will be!"
            />

            <FeatureItem icon={icon_security }
                titre="Security you can trust"
                description="We use top of the line encryption to make sure your data and money
                is always safe."
            />

        </section>
    )
}

export default FeaturesList