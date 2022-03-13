import axios from 'axios';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../../states/index";

const SummaryComponent = () => {
    const [selectedClient, setSelectedClient] = useState(0);
    const handleSelectChange = (event) => {
        setSelectedClient(event.target.value);
        getDetails()
    }

    
    const dispatch = useDispatch()
    const { revenueAction, progressAction } = bindActionCreators(actions, dispatch);

    useEffect(() => {
        getDetails()
    }, [selectedClient])

    const getDetails = async () => {
        const revenueResponse = await axios.get('http://localhost:4000/revenue')
        revenueAction(revenueResponse)
        const progresResponse = await axios.get('http://localhost:4000/progress')
        progressAction(progresResponse)

    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Summary</a>
            </div>
            <div className="nav navbar-nav navbar-right">
                <select className="form-select" aria-label="Default select example" onChange={handleSelectChange}>
                    <option value="0">Nov 2021</option>
                    <option value="1">Dec 2021</option>
                    <option value="2">Jan 2022</option>
                    <option value="3">Feb 2022</option>
                </select>
            </div>
        </nav>
    )
}

export default SummaryComponent;