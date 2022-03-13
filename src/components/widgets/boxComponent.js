import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar } from '@fortawesome/free-solid-svg-icons'

const BoxComponent = (props) => {
    const { revenueData } = props;
    return (
        <div className="col-md-4 col-xl-3" >
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">{revenueData.title}</h6>
                    <h2 className="text-right"><i><FontAwesomeIcon icon={faDollar} /></i><span>{revenueData.amount}k</span></h2>
                </div>
            </div>
        </div>
    )
}

export default BoxComponent;