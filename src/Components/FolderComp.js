import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Modal,
  Badge,
} from "react-bootstrap";
import { ADD_NEW_FOLDER } from "../ActionCreator/SignUpAction";
import { Link } from "react-router-dom";
function FolderComp(props) {
  const [folderName, setFolderName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    console.log(e.target.value, "lll");
    setFolderName(e.target.value);
  };
  const handleSubmit = (e) => {
    props.addNewFolder(folderName);
    setShow(false);
    setFolderName("");
  };
  //console.log(props, "all props");
  const { folderArray } = props;
  let folderlist = folderArray.map((item, index) => (
    <Button variant="primary" key={index}>
      <Badge variant="light">
        <Link to={"/folder/" + encodeURI(item)}>{item}</Link>
      </Badge>
    </Button>
  ));
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Folder
      </Button>
      <ul>{folderlist}</ul>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={folderName} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  folderArray: state.FolderReducer.folderArray,
});
const mapDispatchToProps = {
  addNewFolder: ADD_NEW_FOLDER,
};
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(FolderComp);
