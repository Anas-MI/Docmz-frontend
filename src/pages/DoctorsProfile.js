import React, { Component } from 'react'
import Banner from '../components/Banner/Banner'
import Section from '../components/Sections/Section'
import Avatar from '../components/Avatar/Avatar';
export default class DoctorsProfile extends Component {
    render() {
        return (
            <div className="p-doctors-profile">
                <Banner parentClass="p-doctors" />
                <Section type={["above-banner", "container", "bg-bule-alpha" ,"shadow"]}>
                    <div>
                        <div>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                        </div>
                        <div>
                            <Avatar parentClass="p-doctors" type="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={150} />
                        </div>
                    </div>
                    <div>
                        <h3>Tamara Sprigel, Ph.D.</h3>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem,</p>
                    </div>
                </Section>
            </div>
        )
    }
}
