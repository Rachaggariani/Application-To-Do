import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {deleteTask} from '../Redux/Actions';
import{useDispatch} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {updateTask} from'../Redux/Actions';
import{doneTask} from '../Redux/Actions';
function CardTask({task}) {
    const [text,setText]=useState('');
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    const handledelete=()=>{
      dispatch(deleteTask(task.id));
    }
    const handleUpdate=()=>{
        dispatch(updateTask(task.id,text));
        handleClose();
    }
  const handledone=()=>{
dispatch(doneTask(task.id));
  }
  return (
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title style={task.done?{textDecoration:"line-through"}:{textDecoration:"none"}}>{ task && task.text}</Card.Title>
      <Form.Check type="checkbox" onClick={handledone} />
    
      <Button variant="primary" onClick={handleShow}>Update Task </Button>
      <Button variant="danger" onClick={handledelete}>delete Task </Button>
    </Card.Body>
  </Card>
  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body><input placeholder={task.text} onChange={(e)=>setText(e.target.value)}/></Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleUpdate}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
</>
  )
}

export default CardTask;
