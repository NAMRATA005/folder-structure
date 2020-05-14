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
import { ADD_CHILD_NEW_FOLDER } from "../ActionCreator/SignUpAction";
import { Link } from "react-router-dom";
function ChildFolder(props) {
  const [folderName, setFolderName] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    console.log(e.target.value, "lll");
    setFolderName(e.target.value);
  };
  const handleSubmit = (e) => {
    sessionStorage.setItem("selectedFolder", props.match.params.id);
    props.addNewFolder({
      name: folderName,
      parent: props.match.params.id,
    });
    setShow(false);
    setFolderName("");
  };
  console.log(props, "all props");
  const { childfolderArray } = props;
  const parent = props.match.params.id;
  const parentName = decodeURI(props.match.params.id);

  let childfolderList = childfolderArray
    .filter((item) => item.parent === parent)
    .map((item, index) => (
      <Button variant="primary" key={index}>
        <Badge variant="light">{item.name}</Badge>
      </Button>
    ));
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Folder
      </Button>
      Parent: <Link to={"/folder"}>{parentName}</Link>
      <ul>{childfolderList}</ul>
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
  childfolderArray: state.FolderReducer.childfolderArray,
});
const mapDispatchToProps = {
  addNewFolder: ADD_CHILD_NEW_FOLDER,
};
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connectToStore(ChildFolder);
