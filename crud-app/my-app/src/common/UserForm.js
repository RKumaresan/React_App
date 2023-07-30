import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const UserForm = ({ handleClose, show }) => {
    // const [formValue, setFormValue] = useState({});


    // const onHandeChange = (e) => {
    //     setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    // }

    // return (
    //     <Modal show={show} onHide={handleClose}>
    //         <Modal.Header closeButton>
    //             <Modal.Title>Add User</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //             <Form onSubmit={handleSubmit}>
    //                 <Form.Group controlId="formName">
    //                     <Form.Label>Name</Form.Label>
    //                     <Form.Control type="text" name='name' placeholder="Enter name" onChange={onHandeChange} />
    //                 </Form.Group>
    //                 <Form.Group controlId="formAge">
    //                     <Form.Label>Age</Form.Label>
    //                     <Form.Control type="number" name='age' placeholder="Enter age" onChange={onHandeChange} />
    //                 </Form.Group>
    //                 <Form.Group controlId="formRole">
    //                     <Form.Label>Role</Form.Label>
    //                     <Form.Control type="text" name='role' placeholder="Enter role" onChange={onHandeChange} />
    //                 </Form.Group>
    //                 {/* <Form.Group controlId="formFile">
    //                     <Form.Label>Upload Image</Form.Label>
    //                     <Form.File />
    //                 </Form.Group> */}
    //             </Form>
    //         </Modal.Body>
    //         <Modal.Footer>
    //             <Button variant="secondary" onClick={handleClose}>
    //                 Close
    //             </Button>
    //             <Button variant="primary" onClick={handleSubmit}>
    //                 Save Changes
    //             </Button>
    //         </Modal.Footer>
    //     </Modal>
    // )
};

export default UserForm;