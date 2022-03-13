const revenueData = [
    {
        "title": "Total Revinue",
        "amount": 3456.90
    },
    {
        "title": "Flipkart",
        "amount": 656.90
    },
    {
        "title": "Amazon",
        "amount": 456.90
    },
    {
        "title": "Ebay",
        "amount": 4545.90
    }

]
const progressData = [
    {
        "title": "Purchase Rate",
        "amount": 34
    },
    {
        "title": "Cart Rate",
        "amount": 65
    },
    {
        "title": "Abandoned Cart Rate",
        "amount": 45
    },
    {
        "title": "Sale Rate",
        "amount": 97
    }

]

const reducer = (state = {
    "revenue": revenueData,
    "progress": progressData
}, action) => {
    switch (action.type) {
        case "SET_REVENUE":
            return { ...state, "revenue": action.payload.revenue }
        case "SET_PROGRESS":
            return { ...state, "progress": action.payload.progress }
        default:
            return state
    }
};

export default reducer;