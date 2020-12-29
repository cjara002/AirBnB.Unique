import React from "react";
import { withTranslation, Trans } from "react-i18next";
import { Link, withRouter } from "react-router-dom";
// import { Badge } from "reactstrap";
import { connect } from "react-redux";
// import SidebarUserBlock from "./SidebarUserBlock";
import getMenu from "./menu.js";

/** Component to display headings on sidebar */
const SidebarItemHeader = ({ item }) => (
  <li className="nav-heading">
    <span>
      <Trans i18nKey={item.translate}>{item.heading}</Trans>
    </span>
  </li>
);

/** Normal items for the sidebar */
const SidebarItem = ({ item, isActive }) => (
  <li id={isActive ? "active" : ""}>
    <Link to={item.path} title={item.name}>
      {/* 
            <Badge tag="div" className="float-right" color={item.label.color}>
              {item.label.value}
            </Badge>
          )}
          */}
      {item.icon && <em className={item.icon} />}
      <span>
        <Trans i18nKey={item.translate}>{item.name}</Trans>
      </span>
    </Link>
  </li>
);

class Sidebar extends React.Component {
  state = {
    menu: [],
  };

  componentDidMount() {
    this.setState(() => ({
      menu:
        // getMenu(this.props.currentUser.role)
        getMenu(),
    }));
  }

  navigator = (route) => {
    this.props.history.push(route);
  };
  routeActive(paths) {
    paths = Array.isArray(paths) ? paths : [paths];
    return paths.some((p) => this.props.location.pathname.indexOf(p) > -1);
  }
  /** map menu config to string to determine which element to render */
  itemType = (item) => {
    if (item.heading) return "heading";
    if (!item.submenu) return "menu";
    if (item.submenu) return "submenu";
  };

  render() {
    const { showSidebar } = this.props;
    return (
      <React.Fragment>
        {showSidebar ? (
          <aside className="aside-container">
            {/* START Sidebar (left) */}
            <div className="aside-inner">
              <nav data-sidebar-anyclick-close="" className="sidebar">
                {/* START sidebar nav */}
                <ul className="sidebar-nav">
                  {/* START user info */}
                  {/* <li className="has-user-block">
                <SidebarUserBlock />
              </li> */}
                  {/* END user info */}
                  {/* Iterates over all sidebar items */}
                  {this.state.menu.map((item, i) => {
                    // heading
                    if (this.itemType(item) === "heading")
                      return <SidebarItemHeader item={item} key={i} />;
                    else {
                      if (this.itemType(item) === "menu")
                        return (
                          <SidebarItem
                            isActive={this.routeActive(item.path)}
                            item={item}
                            key={i}
                          />
                        );
                    }
                    return null; // unrecognized item
                  })}
                </ul>
                {/* END sidebar nav */}
              </nav>
            </div>
            {/* END Sidebar (left) */}
          </aside>
        ) : null}
      </React.Fragment>
    );
  }
}

export default connect()(withTranslation("translations")(withRouter(Sidebar)));
