import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";


class HomePage extends Component {

    state = {cityName: "", flag: ""};

    onSubmit = async (e) => {
        e.preventDefault();
        await this.props.fetchCities({'city_name': this.state.cityName});
        this.setState({flag: true});
    };

    componentDidMount() {
        this.props.cleanCities();
        this.props.cleanEst();

    }

    renderCityList() {
        return this.props.cities.map(city => {
            return (
                <div className="item" key={city.city_id}>
                    <Link to="/establish" onClick={() => {
                        this.props.fetchEstablishments({city_id: city.city_id});
                        this.props.mySelect([city.city_id, null]);
                    }}>
                        <strong> {city.city_name} </strong>
                    </Link>
                    <br/><br/>
                </div>
            );
        });
    }

    content() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2> HomePage </h2>
                    <TextField
                        required id="standard-required"
                        placeholder="Enter a Name of City "
                        type = "text"
                        maxLength={"20"}
                        onChange={e => this.setState({cityName: e.target.value})}/>
                    <button > Submit</button>
                </form>
                <br/>
            </div>);
    }

    render() {
        if (this.state.flag !== "") {
            return (
                <div className="nav-wrapper">
                    {this.content()}
                    {this.renderCityList()}
                </div>
            );
        } else {
            return (<div>{this.content()}</div>)
        }
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        establishments: state.establishments,
    };
}


export default connect(mapStateToProps, actions)(HomePage);