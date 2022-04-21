import React from "react";
import {Footerbox,Responce,Infromation,Myaccound,Contact,Payment,
  Coloum,Row1,Row2,Row3,Row4,Row5,Img,Rows1,
  Rows2,Img1,Img2,Responce1,Coloum1,Coloum2,Sign,Follow,Input,Box,Rows3} from '../footer/Footer_style';
import locat from '../image/location.svg';
import call from '../image/callback.svg';
import email from '../image/emailblack.svg';
import visa from '../image/visa1.png';
import RUPAY from '../image/RUPAY1.png';
import master from '../image/mastercard.png';
import american from '../image/americanexpress.png';
import discover from '../image/discoverbank.png';
import PayPal from '../image/PayPallogo.png';
import Button from '@mui/material/Button';
import Facebook from '../image/FacebookLogo.png';
import twitter from '../image/twitterlogo.png';
import Instagram from '../image/Instagramlogo.png';
import pinterest from '../image/pinterestlogo.png';


const Footer = () => {
    return(
     <> 
         <Footerbox>
      <Responce> 
          <Coloum>
                <Infromation>INFORMATION</Infromation>
                <Row1>About Us</Row1>
                <Row2>Delivery </Row2>
                <Row3>Privacy Policy</Row3>
                <Row4>Terms & Conditions</Row4>
         </Coloum>

         <Coloum>
            <Myaccound>MY ACCOUNT</Myaccound>
                <Row1>My Account</Row1>
                <Row2>Order History </Row2>
                <Row3>Site Map</Row3>
                <Row4> Wish List</Row4>
        </Coloum>

        <Coloum>   
            <Contact>CONTACT US</Contact>     
                <Row1 ><Img src={locat}></Img> #54, Main Avenue, </Row1>
                <Row5>Manchester, MR5421 </Row5>    
                <Row3><Img src={call}></Img>+44 12345 78965 </Row3>
                <Row4><Img src={email}></Img> ellangrocery@online.com</Row4> 
        </Coloum>

        <Coloum>
            <Payment>PAYMENT METHOD</Payment>
                <Rows1>
                    <Img1 src={RUPAY}></Img1>
                    <Img1 src={master}></Img1>
                    <Img1 src={visa}></Img1>
                </Rows1>
                <Rows2>
                    <Img2 src={american}></Img2>
                    <Img2 src={discover}></Img2>
                    <Img2 src={PayPal}></Img2>
                </Rows2>
             
        </Coloum>
       </Responce> 

       <Responce1>
       <Coloum1>   
            <Sign>SIGN UP & GET OFFER</Sign>
               <Box>     
                 <Input></Input>
                 <Button sx={{backgroundColor: "#6FAE1D",borderRadius: "0px 6px 6px 0px"}} variant="contained">Subscribe</Button>
               </Box>
        </Coloum1>

        <Coloum2>
            <Follow>FOLLOW US</Follow>
                <Rows3>
                    <Img1 src={Facebook}></Img1> 
                    <Img1 src={twitter}></Img1>
                    <Img1 src={Instagram}></Img1>
                    <Img1 src={pinterest}></Img1>
                </Rows3>
               
             
        </Coloum2>
       </Responce1>   
  </Footerbox>
      </>
    )
}
export default Footer;