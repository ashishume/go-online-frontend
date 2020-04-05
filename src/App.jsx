import React, { Component } from "react";
import Navbar from "./components/Header/navbar";
import MainNavigation from "./components/Navigation/MainNavigation";
import http from "./API/HttpService";
import { loading } from "./store/actions/loader";
import { connect } from "react-redux";
import Loader from "./components/Shared/Loader/Loader";
class App extends Component {
  componentWillMount() {
    const self = this;

    http.interceptors.request.use(
      (request) => {
        self.props.loading(true);
        return request;
      },
      (error) => {
        self.props.loading(false);

        return Promise.reject(error);
      }
    );

    http.interceptors.response.use(
      (response) => {
        self.props.loading(false);

        return response;
      },
      (error) => {
        self.props.loading(false);
        return Promise.reject(error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loader ? <Loader /> : null}
        <Navbar />
        <MainNavigation />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};

export default connect(mapStateToProps, { loading })(App);
