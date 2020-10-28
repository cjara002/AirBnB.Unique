import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import PageLoader from "../components/common/PageLoader";
import cleanerRoutes from "./cleanerRoutes.js";
import publicRoutes from "./publicRoutes.js";
const Base = lazy(() => import("../components/layout/Base"));
const BasePage = lazy(() => import("../components/layout/BasePage"));

// const listofPages = [
//   "/",
//   "/login",
//   "/register",
//   "/recover",
//   "/lock",
//   "/notfound",
//   "/error500",
//   "/maintenance",
//   "/restricted",
//   "/confirm"
// ];

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        role: [],
        email: "",
      },
      isLoggedIn: false,
      cleanerRoutes: cleanerRoutes.map(this.mapRoutes),
      publicRoutes: publicRoutes.map(this.mapRoutes),
    };
    this.currentKey = props.location.pathname.split("/")[1] || "/";
    this.timeout = { enter: 500, exit: 500 };
    this.animationName = "rag-fadeIn";
  }

  // componentDidMount() {
  //     this is where I will get the current user
  // }

  mapRoutes = (route) => {
    let Component = route.component;
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={(props) => <Component {...props} />}
      />
    );
  };

  render() {
    // let pathArr = this.props.location.pathname.split("/");
    // let newPath = "/" + pathArr[1];
    let content = null;
    // if(
    //     listofPages.includes(this.props.location.pathname) ||
    //     listofPages.includes(newPath)
    // )
    // {
    // content = this.getCleanerContact();
    // }

    // {
    content = this.getPublicContent();
    // } else if (this.state.allRoutes){
    //     content = this.getAllRoutes();
    // }

    return content;
  }

  getCleanerContact = () => {
    // console.log("getCleanerContact:", this.state.cleanerRoutes)
    return (
      <Suspense fallback={<PageLoader />}>
        <Base>
          <TransitionGroup>
            <CSSTransition
              key={this.currentKey}
              timeout={this.timeout}
              classNames={this.animationName}
              exit={false}
            >
              <div>
                <Suspense fallback={<PageLoader />}>
                  <Switch location={this.props.location}>
                    {this.state.cleanerRoutes}
                  </Switch>
                </Suspense>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Base>
      </Suspense>
    );
  };
  getPublicContent = () => {
    return (
      <Suspense fallback={<PageLoader />}>
        <BasePage>
          <Switch location={this.props.location}>
            {this.state.publicRoutes}
          </Switch>
        </BasePage>
      </Suspense>
    );
  };
}

export default withRouter(AppRoutes);
