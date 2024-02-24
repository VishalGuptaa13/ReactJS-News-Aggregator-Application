import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API;
  pageSize=6;
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  // render is live cycle function whose work is to converted whatever the js inside the render function in to html and render it
  ////we used here key as a unique identifier to remount our component as it will understand that news component is already mounted than why i again mount it
  render() {
    return (
      <div>
        {/* here we are preparing react router dom by using the react router dom documentation so that any one can easily move to different category of news in our site */}
        <Router>
          {/* here we are importing the components of the site that we make it inside our components folder */}
          <Navbar />
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
      />


          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
