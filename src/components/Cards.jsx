import React from 'react'
import Card from 'react-bootstrap/Card';



const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((elm, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem', border: "none" }} className='hove mb-4'>
                                <Card.Img variant="top" className='cd' src={elm?.imgdata} />
                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{elm?.rname}</h4>
                                        <span>{elm?.rating} &nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex justify-content-between">
                                        <h5>{elm?.address}</h5>
                                        <span>{elm?.price}</span>
                                    </div>


                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={elm?.arrimg} className="limg" alt="" />
                                        <p>{elm?.somedata}</p>
                                        <img src={elm?.delimg} className="laimg" alt="" />
                                    </div>
                                </div>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default Cards