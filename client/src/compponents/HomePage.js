import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class HomePage extends Component {

    componentDidMount() {
        this.props.fetchCities({'city_name':"san jose "});
       // this.props.fetchEstablishments({'city_id':"10883"});

    }

    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <h2>  HomePage  </h2>
                    {/*{this.props.currentData}*/}
                    <a href="/api/test">Request Data Version 2</a>
                </div>
            </nav>
        );

    }

}

function mapStateToProps(state) {
    console.log("state is "+ state);
    return { cities: state.cities,
             establishments: state.establishments
    };
}

export default connect(mapStateToProps, actions )(HomePage);