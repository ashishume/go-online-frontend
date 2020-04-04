import axios from "axios";
import Loader from "../components/Shared/Loader/Loader";
import React, { Component } from "react";

const http = axios.create({
  baseURL: "https://helixlive.herokuapp.com",
  // baseURL: "http://localhost:8000"
});

// http.interceptors.request.use(
//   (request) => {
//     // if (!request) {
//     //   return <Loader isVisible="true" />;
//     // }
//     return request;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// http.interceptors.response.use(
//   (response) => {
//     // console.log(response);
//     // if (response) {
//     //   return <Loader isVisible="true" />;
//     // }

//     return response;
//   },
//   function (error) {},
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default http;
