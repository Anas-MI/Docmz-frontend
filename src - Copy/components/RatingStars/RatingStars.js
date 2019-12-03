import React, { Component } from 'react'
import {Icon , Rate } from 'antd'
import { number  } from 'prop-types'

export default class RatingStars extends Component {
    // renderStar = rating => {
    //     const arr = new Array(rating).fill(el => {
    //         console.log({
    //             el
    //         })
    //         return el
    //     })

        
    // }
    render() {
        const {rating} = this.props;
        return (
            <div>
               <Rate allowHalf disabled  defaultValue={rating}  style={{ fontSize: 14 }} />
            </div>
        )
    }
}

RatingStars.prototype.rating = number