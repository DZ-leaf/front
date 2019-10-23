import React, { Component } from 'react';
import Tab from '../components/Tabs';

class FindScreen extends Component {
    state = {
        order: 1,
    }
    changePage = () => {
        console.log("click@@@");
        this.setState({
            order: 2,
        });
    }
    render() {
        const { navigation } = this.props;
        console.log("FSrender");
        console.log(this.state.order);

        console.log("!!!! " + navigation.getParam('order'));
        
        return (
            // <Tab order={this.state.order} onClickListener={this.changePage} />
            <Tab order={navigation.getParam('order')? navigation.getParam('order') : 1} />
        );
    }
}

export default FindScreen;


// import React from 'react';
// import Tab from '../components/Tabs';

// const FindScreen = (order) => {
//     console.log(this.props);

//     console.log("order_"+order);

//     return (
//         <Tab order={order}/>  
//     );
// };

// export default FindScreen;