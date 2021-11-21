import React, { useState, useEffect } from "react";
import EdutionCard from "./cards/EdutionCard";
import { Container, Row, Col } from "reactstrap";

const Education = (props) => {

    const [educationInfo, seteducationInfo] = useState("")
    const [loadStatus, setLoadstatus] = useState(false)
    useEffect(() => {


        seteducationInfo(props.educationData)
        setLoadstatus(true)

    }, []);
    console.log("yo");
    console.log(educationInfo);
    return (
        loadStatus ?
            <section id="education" >
                <Container>
                    <div className="d-flex px-3 eduHeader">
                        <div>
                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                                <i className="ni ni-books text-info" />
                            </div>
                        </div>
                        <h1 className="section-title" style={{ color: "black" }}>
                            <span>Education</span>
                        </h1>
                    </div>
                    <Row className="row-grid align-items-center">
                        {educationInfo.map((info) => {
                            return (
                                <Col
                                    className="order-lg-1"
                                    lg="6"
                                    key={info.schoolName}
                                >
                                    <EdutionCard education={info} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                
            </section>
            : ""
    );
};

export default Education;