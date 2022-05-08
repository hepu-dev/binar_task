import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import keyIcon from '../assets/icons/Users_Icon.png'
import settingIcon from '../assets/icons/Settings_Icon.png'
import calendarIcon from '../assets/icons/Calendar_Icon.png'
import SearchingForm from "../components/searching";


function SearchingCars() {
    const {date, pickUpTime,} = useParams()
    const navigate = useNavigate()
    const [ dataCars, setDataCars] = React.useState([])

    React.useEffect(() => {
        getDataCars()
    }, [])

    const getDataCars = async () => {
        try {
            const res = await axios.get('https://rent-cars-api.herokuapp.com/admin/car/');
            setDataCars(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const redirectOnPageDetail = (id) => {
        navigate(`/car/${id}`)
    }

    return (
            <Container fluid>
                <Header/>

                <Container>
                    <div className="box-pencarian-without-header-text mx-5">

                        <h5 className="mb-3 fw-bold">Pencarianmu</h5>
                        <SearchingForm />
                    
                    </div>

                    <Row className="mx-4">
                        {dataCars.map((item) => {
                            let showCard = true
                            let bookingDate = new Date(date + " " + pickUpTime).toISOString()

                            if (item.status === true) {
                                if(bookingDate >= item.start_rent_at && bookingDate <= item.finish_rent_at) {
                                    showCard = false
                                }
                            }

                            if (showCard === true) {
                                return(
                                    <Col className="mt-5 p-0 d-flex justify-content-center" key={item.id}>
                                        <div className="card-list">
                                            <div className="car-img">
                                                <img src={item.image} className="car-size" alt="car"/>
                                            </div>
                                            <p className="m-0 fw-bold">{item.name}</p>
                                            <h5 className="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))} / hari</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p><img src={keyIcon} className="pe-2" alt=""/>{item.category}</p>
                                            <p><img src={settingIcon} className="pe-2" alt=""/>Manual</p>
                                            <p className="mb-4"><img src={calendarIcon} className="pe-2" alt=""/>Tahun {item.createdAt.slice(0, 4)}</p>
    
                                            <button type="button" className="btn choice-btn" onClick={() => {
                                                redirectOnPageDetail(item.id)
                                                }}>
                                                Pilih Mobil
                                            </button>
                                        </div>
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Container>

                <Footer />
                
            </Container>
        )
    }

export default SearchingCars;