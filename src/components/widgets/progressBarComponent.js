import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressComponent = (props) => {
    const {progressData} = props;

    return (
        
            <div className="col-md-3">
                <div className="card bg-dark text-white">
                    <div className="card-header">{progressData.title}</div>
                    <div className="card-body">
                    <div style={{ width: 200, height: 200, margin: "auto" }}>
                        <CircularProgressbar strokeWidth={5}value={progressData.amount} text={`${progressData.amount}%`} />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default ProgressComponent;