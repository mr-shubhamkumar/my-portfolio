import React from 'react'

const Contact = () => {
  return (
    <>
        <section className='contact section' id='contact'>
          <h2 className="section__title">Get in Touch</h2>
          <span className="section__subtitle">Contact Me</span>

          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Talk to Me</h3>
{/* Email */}
              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bx contact__card-icon"></i>

                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-data">use@gmail.com</span>
                  <a href="" className="contact_button">
                  Write Me{""}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
{/* Whatsapp */}
                <div className="contact__card">
                  <i className="bx bx contact__card-icon"></i>

                  <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-data">6386064964</span>
                  <a href="" className="contact_button">
                  Write Me{""}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
                
              
              </div>
            </div>

            <div className="contact__content">
              <h3 className="contact__title">Write Me Your Project</h3>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact