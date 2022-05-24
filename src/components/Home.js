import React from 'react'
import styled from 'styled-components'
import Section from './Section'
const Home = () => {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order  Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />


    <Section 
        title="Model Y"
        description="Order  Online for Touchless Delivery"
        leftBtnText="Custom order"
        backgroundImg="model-y.jpg"
        rightBtnText="Existing inventory"
      />


    

          
    <Section 
        title="Model 3"
        description="Order  Online for Touchless Delivery"
        leftBtnText="Custom order"
        backgroundImg="model-3.jpg"
        rightBtnText="Existing inventory"
      />


          
    <Section 
        title="Model X"
        description="Order  Online for Touchless Delivery"
        leftBtnText="Custom order"
        backgroundImg="model-x.jpg"
        rightBtnText="Existing inventory"
      />



    <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        leftBtnText="Order now"
        backgroundImg="solar-panel.jpg"
        rightBtnText="Learn more"
      />


      
    <Section 
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof"
        leftBtnText="Order now"
        backgroundImg="solar-roof.jpg"
        rightBtnText="Learn more"
      />


<Section 
        title="Accessories"
        description=""
        leftBtnText="Shop now"
        backgroundImg="accessories.jpg"
        
      />
    </Container>
  )
}

export default Home


const Container=styled.div`
  height:100vh;
`