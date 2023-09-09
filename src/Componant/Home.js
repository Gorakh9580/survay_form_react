import Footer from './Footer'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage, 
  MDBCardText, 
  MDBCardTitle, 
  MDBCol, 
  MDBRow } 
  from 'mdb-react-ui-kit'
import React from 'react'


const Home = () => {
  return (
   <>
     <header>
     <div
        className='p-5 text-center bg-image hover-overlay'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/042.webp')", height: 500 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Survey with My Business</h1>
              <h4 className='mb-3'>Business</h4>
              <a className='btn btn-warning btn-lg' href='/create' role='button'>
                START SURVEY
              </a>
            </div>
          </div>
        </div>
      </div>
     </header>
     
     <h4 className='pt-3'>This is the beautyful world</h4>
{/* =======================  Card Section  ================ */}
     <MDBRow className='row-cols-1 row-cols-md-3 g-4 pt-3'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Street Views</MDBCardTitle>
            <MDBCardText>
              This is a longer Street with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle> Hills Views</MDBCardTitle>
            <MDBCardText>This is a short Area of Hills. There are many tree on the road side</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Buliding Tower Views </MDBCardTitle>
            <MDBCardText>
              This is a longer Buliding with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
    <Footer/>
   </>
  )
}

export default Home