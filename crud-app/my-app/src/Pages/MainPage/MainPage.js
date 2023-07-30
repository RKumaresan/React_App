import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Modal, Form } from 'react-bootstrap';

export default function MainPage() {
    const [showModal, setShowModal] = useState(false);
    const [formValue, setFormValue] = useState({});
    let user = JSON.parse(localStorage.getItem('currentUser'));
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem(`userData-${user.email}`)) || []);
    const [editUserData, setEditUserData] = useState(false);


    useEffect(() => {
        localStorage.setItem(`userData-${user.email}`, JSON.stringify(userData));
    }, [userData]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        setFormValue({});
        setShowModal(true);
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    const onHandeChange = (e) => {
        setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        if (formValue && editUserData) {
            setUserData((prev) => {
                if (prev?.find((item) => item?.id === formValue?.id)) {
                    return prev.map((i) => {
                        if (i?.id === formValue?.id) {
                            return { ...i, ...formValue };
                        }
                        return { ...i };
                    });
                }
                return prev;
            });
            setEditUserData(false);
        } else {
            setUserData((prev) => {
                let uniqId = (prev[prev?.length - 1]?.id ?? 0) + 1;
                return [...prev, { id: uniqId, ...formValue }];
            });
        }
    };

    const onhandleEdit = (e, data) => {
        e.preventDefault();
        setFormValue(data);
        setShowModal(true);
        setEditUserData(true);
    };

    const onhandleDelete = (e, data) => {
        let userData = JSON.parse(localStorage.getItem(`userData-${user.email}`));
        userData = userData.filter((i) => i.id !== data.id);
        setUserData(userData);
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="shadow m-5" style={{ minHeight: '80%', width: '80%' }}>
                <Card.Body className="d-flex flex-column align-items-start h-100">
                    <div className="d-flex justify-content-between w-100">
                        <Button variant="primary" size="sm" onClick={handleShow}>Add</Button>
                        <Button variant="danger" size="sm" onClick={handleLogout}>Logout</Button>
                    </div>
                    <div className="d-flex flex-wrap mt-3">
                        {userData.map(user => (
                            <Card key={user.id} className="m-2" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>Age: {user.age}</Card.Text>
                                    <Card.Text>Role: {user.role}</Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button variant="primary" onClick={(e) => onhandleEdit(e, user)}>Edit</Button>
                                        <Button variant="danger" onClick={(e) => onhandleDelete(e, user)}>Delete</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name='name' placeholder="Enter name" value={formValue?.name || ''} onChange={onHandeChange} />
                                </Form.Group>
                                <Form.Group controlId="formAge">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control type="number" name='age' placeholder="Enter age" value={formValue?.age || ''} onChange={onHandeChange} />
                                </Form.Group>
                                <Form.Group controlId="formRole">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" name='role' placeholder="Enter role" value={formValue?.role || ''} onChange={onHandeChange} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleFormSubmit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </div>
    )
}
