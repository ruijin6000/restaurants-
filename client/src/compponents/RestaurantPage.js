import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class RestaurantPage extends Component {

    componentDidMount() {
    }

    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <h2> RestaurantPage </h2>
                </div>
            </nav>
        );

    }

}

function mapStateToProps(state) {
    return { };
}

export default connect(mapStateToProps, actions )(RestaurantPage);