import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import classNames from 'classnames'
import { Button } from 'antd'
export default class PayCardSlider extends Component {
    constructor(){
        super()
        this.state = {
            cards: [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    render() {
        const componentClass= "c-pay-card-slider"
        const {
            cards
        } = this.state
        const {
            onCardSelect, selectedCard, initialIndex
        } = this.props
        return (
            <div className="c-pay-card-slider">
                <Flickity
                    className={`${componentClass}__slider`}
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    ref={"flickityRef"}
                    options={{
                        flickityOption,
                        initialIndex: initialIndex
                    }}
                    flickityRef={c => (this.flkty = c)}
                >
                    {
                        cards.map((e, i)=> (
                        <div key={i} className={classNames(`${componentClass}__slide col-md-4`, {
                            "is-active": e === selectedCard
                        })}>
                            <p>selected is {e}</p>
                            <p>number is {selectedCard}</p>
                            <img src="https://picsum.photos/200/300" alt="safd" />
                            <Button onClick={()=> {onCardSelect(e)}}  type="primary">select</Button>
                        </div>))
                    }
                </Flickity>
            </div>
        )
    }
}
PayCardSlider.defaultProps = {
    onCardSelect : ()=> {},
    initialIndex: 0
}
const flickityOption = {
    initialIndex: 0,
    pageDots: false,
    cellAlign: "left",
    contain: true
}