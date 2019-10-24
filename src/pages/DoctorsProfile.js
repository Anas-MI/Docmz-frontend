import React, { Component } from 'react'
// import Banner from '../components/Banner/Banner'
import Section from '../components/Sections/Section'
import AppointmentCard from '../components/appointment/AppointmentCard/AppointmentCard';
import DoctorInfo from '../components/drList/DoctorInfo';
export default class DoctorsProfile extends Component {
    render() {
        return (
            <div className="p-doctors-profile">
                {/* <Banner parentClass="p-doctors" image="//via.placeholder.com/1920x1080/fff" /> */}
                <Section className="p-doctors-profile__section" bgImg={"https://www.thehealthy.com/wp-content/uploads/2017/09/02_doctor_Insider-Tips-to-Choosing-the-Best-Primary-Care-Doctor_519507367_Stokkete.jpg"} type={[, "bg-black-alpha", "shadow"]}>
                    <div className="c-container p-doctors-profile__container">
                        <DoctorInfo />
                        <AppointmentCard type="shadow" title="Make Your Next Appointment" />
                    </div>
                </Section>
                <div style={{textAlign: "left"}} className="c-container">
                    <div style={{clear: "both", marginTop: "160px"}}></div>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">About Dr. Andrew Fagelman</h3>
                        <p>Dr. Andrew Fagelman is board certified with the American Board of Internal Medicine and current physician at SOHO Health NY.
                            <br/>
                            Providing general medical care in the heart of SOHO. Dr. Fagelman provides a full range our services include sick visits, routine physicals, treatment of chronic medical conditions to travel counseling for that upcoming trip.
                            <br/>The office accepts most insurance plans</p>
                    </div>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">In-network insurances</h3>
                        <p>1199SEIUAetnaAmerican Republic Insurance Company</p>
                    </div>

                    <div>
                        <h3 className="c-title p-doctors-profile__title">Specialties</h3>
                        <p>Primary Care Doctor</p>
                    </div>
                    <br/>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">Practice names</h3>
                        <p>Soho Health NY</p>
                    </div>
                    <br/>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">Hospital affiliations</h3>
                        <p>Beth Israel Medical Center - Petrie Division</p>
                    </div>
                    <br/>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">Board certifications</h3>
                        <p>American Board of Internal Medicine</p>
                    </div>
                    <br/>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">Education and training</h3>
                        <p>Medical School - State University of New York, Buffalo, Doctor of Medicine Saint Vincent Catholic Medical Center, Residency in Internal Medicine Maimonides Medical Center, Internship in General Surgery</p>
                    </div>
                    <br/>
                    <div>
                        <h3 className="c-title p-doctors-profile__title">Awards and publications</h3>
                        <p>Journal of Urology - "Efficacy, Safety, and Use of Viagra in Clinical Practice."Critical Care Resident of the Year - 2003</p>
                    </div>
                </div>
            </div>
        )
    }
}
