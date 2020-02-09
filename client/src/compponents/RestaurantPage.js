import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


class RestaurantPage extends Component {

    componentDidMount() {
    }

    renderList() {
        return this.props.restaurants.map(res => {
            return (
                <div className="item" key={res.res_id}>

                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <strong>  {res.res_name} </strong>
                        </ExpansionPanelSummary>

                        <ExpansionPanelDetails>
                            <div style={{width: '90%'}}>
                                <Typography style={{float: 'left'}}>
                                    <strong>Address: </strong> {res.address}
                                    <strong>Cuisines: </strong> {res.cuisines}
                                </Typography>

                                    <Button style={{float: 'right'}}
                                            variant="outlined"
                                            size="medium"
                                            color="primary">
                                        Likes
                                    </Button>

                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                </div>
            );
        });
    }

    render() {
        console.log(this.props);
        if (this.props.selection !== null && this.props.restaurants !== null) {
            return (
                <nav>
                    <div className="nav-wrapper">
                        <h2> RestaurantPage </h2>
                         {this.renderList()}
                    </div>
                </nav>
            );
        }
        else if (this.props.selection !== null && this.props.restaurants == null ){
            return "Processing...."
        }
        else {
            return (<Redirect to={'/'}/>)
        }
    }

}

function mapStateToProps(state) {
    return {
        selection: state.mySelect,
        restaurants: state.restaurants
    };
}

export default connect(mapStateToProps, actions)(RestaurantPage);