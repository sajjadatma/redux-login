import React, { Component } from "react";
import axios from "../axios";
import { connect } from "react-redux";
import { loading } from "../Redux/Actions/loadingAction";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
class Spinner extends Component {
  componentWillMount() {
    const self = this;
    axios.interceptors.request.use(
      function (config) {
        // spinning start to show
        self.props.loading(true);
        return config;
      },
      function (error) {
        self.props.loading(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        // spinning hide
        self.props.loading(false);
        return response;
      },
      function (error) {
        self.props.loading(false);
        console.log(error.toJSON());
        
        return Promise.reject(error);
      }
    );
  }
  render() {
    return (
      <div>
        <Backdrop
          open={this.props.loader.loaded}
          style={{ zIndex: 100, color: "#fff", margin: 0 }}
        >
          <CircularProgress
            style={{ width: 60, height: "unset" }}
            color="inherit"
          />
        </Backdrop>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loader: state,
  };
};
export default connect(mapStateToProps, { loading })(Spinner);
