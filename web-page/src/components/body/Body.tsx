import React from "react";
import{ScrollBox,InnerBox1,Ib1Left,Img,Ib1Right,H1tag,H2tag,H3tag,Buttons} from '../component_style'
import image from '../image/banner.png';
import image1 from '../image/many-fresh.jpg';
import image2 from '../image/istockphoto.jpg';
import image3 from '../image/images-vege.jpg';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Carousel from 'react-material-ui-carousel';
import {Titleicon,TopDeals,Innerbox2,Head,Fruits,Card,Pineapple,Tomato,Butter,Dhania,FruitsName,
   Pin,Rate,Toma,Butte,Dhan} from '../component_style';
import title from '../image/Title-icon.png';
import Pineapplee from '../image/Pine.png';
import Tomatoo from '../image/Tomato.png';
import Butterr from '../image/butter.png';
import Dhaniaa from '../image/Dhania.png';
import {ButtonRow,InnerBox3,Card1,Img1,Text,Rate1,Icons,ArrowButton} from '../component_style';
import Litchi from '../image/litchi.png';
import Pine from '../image/Pine1.png';
import grap from '../image/grapes.png';
import Apple from '../image/apple.png';
import Mango from '../image/mango.png';
import kiw from '../image/kiwi.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {InnerBox4,Card2,Img3,Cayneey,Cay,Negative,Passitive,Caytext,Offerdays,Row3,Days,Hrs,Mins,
   Sec,Number,Daysnum,Hrsnum,Minsnum,Secnum,Offericon,Card3,HeadCard3,Categories,CardColoum,
   FruitsColoum,OfferFruits,Img2,OfferRate,PomegranateText,Price1,Icons1} from '../component_style';
import Rating from '@mui/material/Rating';
import Pomegranate from '../image/A-Pomegranate.png';
import Straw from '../image/A-Straw.png';
import {InnerBox5,Img4,Categoryimg,Fruitbox,Img5,Img6,Img7,Img8,ImgName,Fruitname,Vegename,
  Dairyname,Staplesname,Rowtetails,Tetailsbox,Textbold,Font,Img9,Img10,Img11,Img12} from '../component_style';
import cate from '../image/categories.png';
import fruit from '../image/cat-fruits.png';
import vege from '../image/cat-vegetables.png';
import dairy from '../image/cat-dairy.png';
import staples from '../image/cat-staples.png';
import shipping from '../image/localshipping.svg';
import account from '../image/accountbalance.svg';
import lang from '../image/language.svg';
import phone from '../image/phonetalk.svg';
import{InnerBox6,Reviewstext,Reviewstextbold} from '../component_style'
import { black } from "material-ui/styles/colors";


const Body = () => {

// Radio button
   //  const [selectedValue, setSelectedValue] = React.useState('a');
   //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   //      setSelectedValue(event.target.value);
   //    };


return(
      <>
      <ScrollBox>
         <Carousel
        autoPlay={true}
        animation={"slide"}
     
        sx={{
             width:"100%",
             height: "375px",
         }}
    
     >
           <InnerBox1>
               <Img src={image} ></Img>
                  <Ib1Right>
                        <H1tag>Organic</H1tag>
                        <H2tag>Fruits & Vegetables</H2tag>
                        <H3tag>Save Up To 20% Off on Your First Order</H3tag>
                        <Button sx={{marginTop:"38px",backgroundColor:"#8A9B3A",fontSize:"15px"}} variant="contained">SHOP NOW</Button>
                  </Ib1Right>
           </InnerBox1>

           <InnerBox1> 
               <Img src={image1} ></Img>
                  <Ib1Right>
                        <H1tag>Organic</H1tag>
                        <H2tag>Fruits & Vegetables</H2tag>
                        <H3tag>Save Up To 20% Off on Your First Order</H3tag>
                        <Button sx={{marginTop:"38px",backgroundColor:"#8A9B3A",fontSize:"15px"}} variant="contained">SHOP NOW</Button>
                  </Ib1Right>
           </InnerBox1>

           <InnerBox1> 
              <Img src={image2} ></Img>
                  <Ib1Right>
                        <H1tag>Organic</H1tag>
                        <H2tag>Fruits & Vegetables</H2tag>
                        <H3tag>Save Up To 20% Off on Your First Order</H3tag>
                        <Button sx={{marginTop:"38px",backgroundColor:"#8A9B3A",fontSize:"15px"}} variant="contained">SHOP NOW</Button>
                  </Ib1Right>
           </InnerBox1>

          <InnerBox1>
              <Img src={image3} ></Img>
                  <Ib1Right>
                        <H1tag>Organic</H1tag>
                        <H2tag>Fruits & Vegetables</H2tag>
                        <H3tag>Save Up To 20% Off on Your First Order</H3tag>
                        <Button sx={{marginTop:"38px",backgroundColor:"#8A9B3A",fontSize:"15px"}} variant="contained">SHOP NOW</Button>
                  </Ib1Right>
              </InnerBox1>
               
 </Carousel> 
                  {/* <Buttons>
                  <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                         sx={{'&:hover':{color:'#899644'}}}/>
                        <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        sx={{'&:hover':{color:'#899644'}}}/>
                         <Radio
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value="c"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'C' }}
                        sx={{'&:hover':{color:'#899644'}}}/>
                         <Radio
                        checked={selectedValue === 'd'}
                        onChange={handleChange}
                        value="d"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'D' }}
                        sx={{'&:hover':{color:'#899644'}}}/>
                  </Buttons> */}
                    
                 
         
           


{/* TOP DEALS */}
                <Innerbox2>
                   <Head>
                      <Titleicon src={title}></Titleicon>
                      <TopDeals>TOP DEALS</TopDeals>
                   </Head>

                    <Fruits>
                       <Card>
                            <Pineapple src={Pineapplee}></Pineapple>
                         <FruitsName>
                            <Pin>Pineapple</Pin>
                            <Rate>1kg-RS.75%</Rate>
                            <Button sx={{color:'white',padding:'3px', backgroundColor: '#8A9B3A',marginTop: '8px'}}>SHOP NOW</Button>
                        </FruitsName>

                       </Card>

                       <Card>
                            <Tomato src={Tomatoo}></Tomato>
                          <FruitsName>
                            <Toma>Tomatto</Toma>
                            <Rate>1kg-RS.22%</Rate>
                            <Button sx={{color:'white',padding:'3px', backgroundColor: '#8A9B3A',marginTop: '8px'}}>SHOP NOW</Button>
                        </FruitsName> 
                       </Card>

                       <Card>
                            <Butter src={Butterr}></Butter>
                          <FruitsName>
                            <Butte>Butter</Butte>
                            <Rate>1kg-RS.147%</Rate>
                            <Button sx={{color:'white',padding:'3px', backgroundColor: '#8A9B3A',marginTop: '8px'}}>SHOP NOW</Button>
                        </FruitsName>
                       </Card>

                       <Card>
                            <Dhania src={Dhaniaa}></Dhania>
                          <FruitsName>
                            <Dhan>Dhania</Dhan>
                            <Rate>1kg-RS.120%</Rate>
                            <Button sx={{color:'white',padding:'3px', backgroundColor: '#8A9B3A',marginTop: '8px'}}>SHOP NOW</Button>
                        </FruitsName>
                       </Card>

                    </Fruits>
                </Innerbox2>

{/* OUR PRODUCTS */}

                   <Head>
                      <Titleicon src={title}></Titleicon>
                      <TopDeals>OUR PRODUCTS</TopDeals>
                   </Head>
               <ButtonRow>
                 <Button sx={{borderColor:'#D9AE06',color:'#2A2A2A',fontWeight:'bold',width:'157px',marginRight:'24px','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none'}}}variant="outlined">FRUITS</Button>
                 <Button sx={{borderColor:'#D9AE06',color:'#2A2A2A',fontWeight:'bold',width:'157px',marginRight:'24px','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none'}}}variant="outlined">VEGETABLES</Button>
                 <Button sx={{borderColor:'#D9AE06',color:'#2A2A2A',fontWeight:'bold',width:'157px',marginRight:'24px','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none'}}}variant="outlined">DAIRY & BAKERY</Button>
                 <Button sx={{borderColor:'#D9AE06',color:'#2A2A2A',fontWeight:'bold',width:'157px',marginRight:'24px','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none'}}}variant="outlined">STAPLES</Button>
               </ButtonRow>

               <InnerBox3>
                 <Card1> 
                      <Img1 src={Litchi}></Img1>
                      <Text>Litchi</Text>
                      <Rate1>Rs.300/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={Pine}></Img1>
                      <Text>Pineapple</Text>
                      <Rate1>Rs.75/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={grap}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={Apple}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={Mango}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={kiw}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={grap}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>

                 <Card1> 
                      <Img1 src={Pine}></Img1>
                      <Text>Grapes</Text>
                      <Rate1>Rs.110/ Kg</Rate1>
                 
                   <Icons>
                      <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                      <ShoppingBasketIcon /> 
                   </Icons>
                 </Card1>
               </InnerBox3>

                <ArrowButton>
                     <ArrowBackIcon sx={{width:'50px',height:'50px',margin: '8px 8px 8px 8px',borderRadius: '12px',marginRight: '12px',border: '1px solid #D9AE06','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none',width:'50px',height:'50px',cursor:'pointer'}}}/>
                     <ArrowForwardIcon sx={{width:'50px',height:'50px',margin: '8px 8px 8px 8px',borderRadius: '12px',marginRight: '12px',border: '1px solid #D9AE06','&:hover':{backgroundColor:'#D9AE06',color:'#FFFFFF',border:'none',width:'50px',height:'50px',cursor:'pointer'}}}/>  
                </ArrowButton>


 {/* OUR OFFERS */}

                <Head>
                      <Titleicon src={title}></Titleicon>
                      <TopDeals>OUR OFFERS</TopDeals>
               </Head>

             <InnerBox4>
                <Card2>
                  <ArrowBackIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/>
                  <Img3 src={Pine}></Img3>

                  <Cayneey>
                              <Cay>Cayenne Pineapple</Cay>
                        <Price1>
                              <Negative>1KG - Rs.90/-</Negative>
                              <Passitive>1KG - Rs.65/-</Passitive>
                        </Price1>
                              <Rating name="size-medium" defaultValue={2} />
                              <Caytext>Cayenne Pineapples are likely the ones you’d find in a typical food store in the United States. They’re the main type of pineapple grown in Hawaii, and are bigger than most other varieties, weighing in at four to ten pounds. They feature a distinctive yellow flesh and are very juicy.</Caytext>
                              <Offerdays>Offer Valid Days</Offerdays>
                        <Row3>
                              <Days>Days</Days>
                              <Hrs>Hrs</Hrs>
                              <Mins>Mins</Mins>
                              <Sec>Sec</Sec>
                        </Row3>
                        <Row3>
                           <Number>
                              <Daysnum>02</Daysnum>
                              <Hrsnum>13</Hrsnum>
                              <Minsnum>35</Minsnum>
                              <Secnum>24</Secnum>
                           </Number> 

                           <Offericon>
                              <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                              <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                              <ShoppingBasketIcon /> 
                           </Offericon>
                        </Row3>
               </Cayneey>

               <ArrowForwardIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/>
                </Card2>

                <Card3>
                   <HeadCard3>
                              <Categories>Categories Special Offer</Categories>
                              <ArrowBackIcon sx={{borderRadius: '12px',border: '2px solid white',marginRight:"10px",color:"white"}}/>
                              <ArrowForwardIcon sx={{borderRadius: '12px',border: '2px solid white',color:"white"}}/>
                   </HeadCard3>


                  <CardColoum>
                        <FruitsColoum>
                              <OfferFruits>
                                   <Img2 src={Pomegranate}></Img2>
                              </OfferFruits>
                              <OfferRate>
                                  <PomegranateText>Pomegranate</PomegranateText>
                                 <Price1>
                                       <Negative>1KG - Rs.65/-</Negative>
                                       <Passitive>1KG - Rs.60/-</Passitive>
                                 </Price1>
                                 <Icons1>
                                       <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <ShoppingBasketIcon /> 
                                 </Icons1>
                              </OfferRate>
                        </FruitsColoum>

                        <FruitsColoum>
                              <OfferFruits>
                                   <Img2 src={grap}></Img2>
                              </OfferFruits>
                              <OfferRate>
                                  <PomegranateText>Kashmir Grapes</PomegranateText>
                                 <Price1>
                                       <Negative>1KG - Rs.140/-</Negative>
                                       <Passitive>1KG - Rs.90/-</Passitive>
                                 </Price1>
                                 <Icons1>
                                       <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <ShoppingBasketIcon /> 
                                 </Icons1>
                              </OfferRate>
                        </FruitsColoum>

                        <FruitsColoum>
                              <OfferFruits>
                                   <Img2 src={Straw}></Img2>
                              </OfferFruits>
                              <OfferRate>
                                  <PomegranateText>Strawberry</PomegranateText>
                                <Price1>
                                       <Negative>1KG - Rs.350/-</Negative>
                                       <Passitive>1KG - Rs.270/-</Passitive>
                                 </Price1>
                                 <Icons1>
                                       <VisibilityIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <FavoriteBorderIcon sx={{borderRight:'1px solid #f0e3e3'}}/>
                                       <ShoppingBasketIcon /> 
                                 </Icons1>
                              </OfferRate>
                        </FruitsColoum>
                        </CardColoum>
                       
                              
                   
                </Card3>
             </InnerBox4>



{/* OUR CATEGORIES */}

             <Head>
                      <Titleicon src={title}></Titleicon>
                      <TopDeals>OUR CATEGORIES</TopDeals>
             </Head>

             <InnerBox5>
                   <Img4 src={cate}></Img4>
               <Categoryimg>
                     <Fruitbox>
                        <Img5 src={fruit}></Img5>
                     </Fruitbox>

                     <Fruitbox> 
                       <Img6 src={vege}></Img6>
                     </Fruitbox>

                     <Fruitbox> 
                       <Img7 src={dairy}></Img7>
                     </Fruitbox>

                     <Fruitbox>
                       <Img8 src={staples}></Img8>
                     </Fruitbox> 
              </Categoryimg>

          <ImgName>
            <Fruitname>Fruits</Fruitname>
            <Vegename>Vegetables</Vegename>
            <Dairyname>Dairy & Bakery</Dairyname>
            <Staplesname>Staples</Staplesname>
         </ImgName>
     </InnerBox5>

          <Rowtetails>
            <Tetailsbox>
                  <Img9 src={shipping}></Img9>
                  <Textbold>Free Shipping</Textbold>
                  <Font>Our Customers do not have to Pay an Additional Shipping Charge.</Font>
            </Tetailsbox>

            <Tetailsbox> 
                  <Img10 src={account}></Img10>
                  <Textbold>Money Back</Textbold>
                  <Font>Promise that the Money a Person spent on a Product will 
                     be returned if the Product is not Good</Font>
            </Tetailsbox>

            <Tetailsbox> 
                  <Img11 src={lang}></Img11>
                  <Textbold>Online Support</Textbold>
                  <Font>Resolve their issues without having to contact a Customer 
                     Service Saving Time and Effort.</Font>
            </Tetailsbox>

            <Tetailsbox>
                  <Img12 src={phone}></Img12>
                  <Textbold>24/7 Support</Textbold>
                  <Font>Customer Service Strategy that involves providing support 24 Hours a Day,
                     and 7 Days a Week.</Font>
            </Tetailsbox> 
          </Rowtetails>


{/* CUSTOMER REVIEWS */}
             <Head>
                      <Titleicon src={title}></Titleicon>
                      <TopDeals>CUSTOMER REVIEWS</TopDeals>
             </Head>
             <Carousel
                autoPlay={true}
                stopAutoPlayOnHover={true}
                interval={5000}
                animation={"slide"}
                swipe={true}
                navButtonsAlwaysVisible={false}
                navButtonsProps={{ 
                    style: {
                        backgroundColor: "#000000",
                        opacity: 1,
                    }
                }} 
              >
             <InnerBox6>
                
                     {/* <ArrowBackIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/>      */}
                     <Reviewstext>" There are many variations of passages of Lorem Ipsum available,
                         but the majority have suffered alteration in some form, by injected humour,
                         or randomised words which don't look even slightly believable. " 
                         <Reviewstextbold>-- William James.R</Reviewstextbold>
                     </Reviewstext>
                     {/* <ArrowForwardIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/> */}
             </InnerBox6>

             <InnerBox6>
                
                     {/* <ArrowBackIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/>      */}
                     <Reviewstext>" There are many variations of passages of Lorem Ipsum available,
                         but the majority have suffered alteration in some form, by injected humour,
                         or randomised words which don't look even slightly believable. " 
                         <Reviewstextbold>-- Suresh.T</Reviewstextbold>
                     </Reviewstext>
                     {/* <ArrowForwardIcon sx={{alignSelf:"center",borderRadius: '12px',border: '2px solid black'}}/> */}
             </InnerBox6>
             </Carousel>

      </ScrollBox>
      </>
  )
  }   
export default Body;