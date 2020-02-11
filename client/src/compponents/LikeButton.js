import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link, Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";


class LikeButton extends Component {
    state = {isLike: false, dataModel:"default"};

    componentDidMount() {
        this.setState({dataModel: this.props.dataModel});

    }



    render() {
        switch (this.state.isLike) {
            case false:
                return (
                    <Button style={{float: 'right'}}
                            variant="contained"
                            size="medium"
                            onClick={() => {
                                this.setState({isLike: true});
                                let model = this.state.dataModel;
                                model.res_likes = 1;
                                this.props.addLikes(model);
                            }}>
                        Likes
                    </Button>

                );
            case true:
                return (
                    <Button style={{float: 'right'}}
                            variant="contained"
                            size="medium"
                            color="primary"
                            onClick={() => {
                                this.setState({isLike: false});
                                let model = this.state.dataModel;
                                console.log("unlike1"+ this.state.dataModel.res_id);
                                model.res_likes = -1;
                                this.props.addLikes(model);

                            }}>
                        👍 Likes
                    </Button>

                )
        }

    }
}


function mapStateToProps(state) {
    return {
        selection: state.mySelect,
        restaurants: state.restaurants,
    };
}

export default connect(mapStateToProps, actions)(LikeButton);

