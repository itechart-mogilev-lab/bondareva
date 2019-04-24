import React, { Component } from "react";
import {EditCompany} from "./Company";
import {EditUser} from "./User";
import loadingHOC from '../../common/loading/loadingHOC'
import PropTypes from "prop-types";
import { roles } from "../../../utils";

class EditProfile extends Component {

  constructor(){
    super();

    this.renderProfileEdit = this.renderProfileEdit.bind(this);
    this.saveChanged = this.saveChanged.bind(this);
  }

  componentWillUnmount() {
    this.props.cleanError();
  }

  renderProfileEdit() {
    const { role, profile } = this.props;
    if (role !== roles.executor) {
      return <EditUser user={profile} saveChanged={this.saveChanged}/>;
    } else return <EditCompany company={profile} saveChanged={this.saveChanged} />;
  }

 saveChanged(data){
    this.props.saveChanges(data, this.props.role);
  }

  render() {
    return (
      <div className="main__section-form">
        <h3 className="title_bold title_big">Редактирование аккаунта</h3>
        {this.props.error && <p className="error-text">Something be wrong</p>}
        {this.renderProfileEdit()}
      </div>
    );
  }
}

EditProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
  saveChanges: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  cleanError:  PropTypes.func.isRequired
};
export  const EditProfilePage = loadingHOC("isLoading")(EditProfile);