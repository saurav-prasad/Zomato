import React from 'react'
import './category.css'
import { Link } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';

function Category() {
    return (
        <div className='category maxWidth flexCenter'>
            <div className="categoryCard card mb-3">
                <Link className='Link' to='/collections/delivery'>
                    <Zoom cascade duration={200} triggerOnce={true}>
                        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className="card-img-top categoryImage" alt="..." />
                    </Zoom>
                    <div className="card-body">
                        <h5 className="card-title categoryTitle">Order Online</h5>
                        <p className="card-text categoryText">Stay home and order to your doorstep</p>
                    </div>
                </Link>
            </div>
            <div className="categoryCard card mb-3">
                <Link className='Link' to='/collections/nightlife'>
                    <Zoom cascade duration={200} triggerOnce={true}>
                        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" className="card-img-top categoryImage" alt="..." />
                    </Zoom>
                    <div className="card-body">
                        <h5 className="card-title categoryTitle">Dining</h5>
                        <p className="card-text categoryText">View the city's favourite dining venues</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Category