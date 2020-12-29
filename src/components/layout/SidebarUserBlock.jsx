import React from "react";
import { Collapse } from "reactstrap";

class SidebarUserBlock extends React.Component{
    state = {
        hasShowUserBlock: false
      };

      componentDidUpdate(newProps) {
        if (newProps.hasShowUserBlock !== this.props.hasShowUserBlock) {
          this.setState({ hasShowUserBlock: newProps.hasShowUserBlock });
        }
      }

      render() {
        return (
          <Collapse id="user-block" isOpen={this.state.hasShowUserBlock}>
            <div>
              <div className="">
                {/* User picture */}
                <div className="user-block-picture">
                  <div className="user-block-status">
                    <img
                      className="img-thumbnail rounded-circle"
                      src="img/user/02.jpg"
                      alt="Avatar"
                      width="60"
                      height="60"
                    />
                    <div className="circle bg-success circle-lg" />
                  </div>
                </div>
                {/* Name and Job */}
                <div className="user-block-info">
                  <span className="user-block-name">Hello, Mike</span>
                  <span className="user-block-role">Designer</span>
                </div>
              </div>
            </div>
          </Collapse>
        );
      }
}
export default SidebarUserBlock;