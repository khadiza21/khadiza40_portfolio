import { Col, Container, Row } from 'react-bootstrap';


const Overview = () => {
    return (
        <div className='m-0 p-0 overflow-hidden' style={{ backgroundColor: "#111111" }}>
            <Container className='my-5 py-5'>
                <Row >
                    <Col >
                        <div className='card1 card px-3 border-0 border-bottom border-primary shadow-sm py-5 my-3 d-flex flex-row gap-4 justify-content-center align-items-center '>
                            <div className='text-light fs-3'>
                            </div>
                            <div >
                                <h2 className='text-primary fw-bolder fs-3 text-center'>100%</h2>
                                <h3 className='text-light text-center'>Code on GitHub</h3>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='card1 card px-3 border-0 border-bottom border-primary shadow-sm py-5  my-3 d-flex flex-row gap-4 justify-content-center align-items-center '>
                            <div className='text-light fs-3'>
                            </div>
                            <div >
                                <h2 className='text-primary fw-bolder fs-3 text-center'>5+ Frameworks</h2>
                                <h3 className='text-light text-center'> Mastered</h3>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='card1 card px-3 border-0 border-bottom border-primary  py-5 shadow-sm my-3 d-flex flex-row gap-4 justify-content-center align-items-center '>
                            <div className='text-light fs-3'>
                            </div>
                            <div >
                                <h2 className='text-primary fw-bolder fs-3 text-center'>5+ Projects</h2>
                                <h3 className='text-light text-center'>Completed</h3>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='card1 card px-3 border-0 border-bottom border-primary py-5  shadow-sm my-3 d-flex flex-row gap-4 justify-content-center align-items-center '>
                            <div className='text-light fs-3'>

                            </div>
                            <div >
                                <h2 className='text-primary fw-bolder fs-3 text-center'>1+ Years</h2>
                                <h3 className='text-light text-center'>Experience</h3>
                            </div>
                        </div>
                    </Col>
                </Row>






            </Container>
        </div>
    );
};

export default Overview;