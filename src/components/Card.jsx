import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="col-4">
                <div class="card" style={{ width: '18rem' }}>
                    <img src="https://media.istockphoto.com/photos/man-using-mobile-smart-phone-with-global-network-connection-and-picture-id1274394138?s=612x612" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.cat} {props.cmp}</p>
                        <a href="/" class="btn btn-primary">{props.price} &#8377;</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
