import { EOL } from 'os'
import styled from 'styled-components'


export const ScrollBox =styled.div`
width: 100%;
padding: 20px 72px 0px 72px;

`
export const InnerBox1 =styled.div`
display:flex;
border: 2px solid #f9f1f1;
height: 375px;
border-radius: 6px;
position: relative;


`
export const Ib1Left = styled.div`
width:100%;
`
export const Img = styled.img`
width:100%;
height: 100%;
border: 2px solid #f9f1f1;

`
export const Ib1Right = styled.div`
position: absolute;
right: 99px;
text-align: center;
`
export const H1tag = styled.div`
font: normal normal bold 32px/18px Segoe UI;
color: #C92818;
margin-top: 77px;
`
export const H2tag = styled.div`
font: italic normal bold 45px/18px Segoe UI;
color: #8A9B3A;
margin-top: 44px;
`
export const H3tag = styled.div`
font: normal normal 600 16px/18px Segoe UI;
color: #2A2A2A;
margin-top: 27px;
`
export const Buttons = styled.span`
display:flex;
position: absolute;
left: 50%;
transform: translate(-50%);
bottom: 0px;

`
// export const Buttons = styled.button`
// cursor: pointer;
// width: auto;
// padding: 6px;
// border-radius: 6px;
// &:hover {
//     background-color: #899644;
//     color: #FFFFFF;
//     border: none;


// }
// `


// TOP DETAILS

export const Titleicon = styled.img`
width: 45px;
height: 20px;
`
export const TopDeals = styled.div`
font: normal normal bold 24px/18px Georgia;
color: #2A2A2A;
`
export const Innerbox2 = styled.div`
margin-top: 40px;
`
export const Head = styled.div`
margin-top: 24px;
text-align: center;
`
export const Fruits = styled.div`
display:flex;
margin-top: 40px;
`
export const Card = styled.div`
width:25%;
margin-right:20px;
position: relative;
`
export const Pineapple = styled.img`
width:100%;
`
export const Tomato = styled.img`
width:100%;
`
export const Butter = styled.img`
width:100%;
`
export const Dhania = styled.img`
width:100%;
`
export const FruitsName = styled.div`
position: absolute;
right: 21px;
top: 15px;

`
export const Pin = styled.div`
font: normal normal bold 18px/18px Georgia;
color: #207346;

`
export const Rate = styled.div`
font: normal normal bold 14px/18px Helvetica Rounded;
color: #2A2A2A;
margin-top: 4px;
`
export const Toma = styled.div`
font: normal normal bold 18px/18px Georgia;
color: #FBD02B;
`
export const Butte = styled.div`
font: normal normal bold 18px/18px Georgia;
color: #805D06;
`
export const Dhan = styled.div`
font: normal normal bold 18px/18px Georgia;
color: #FFFFFF;
`

//OUR PRODUCTS


export const ButtonRow = styled.div`
display:flex;
margin-top: 24px;
justify-content: center;
`
export const InnerBox3 = styled.div`
display:flex;
width: 1205px;
margin-top: 25px;
overflow-x: auto;
flex-wrap: nowrap;
position: relative;
&::-webkit-scrollbar {
    width: 10px;
    
}
`
export const Card1 = styled.div`
min-width: calc(33.33% - 34px);
margin-right: 50px;
border: 1px solid #f0e3e3;
`
export const Img1 = styled.img`
border-bottom: 1px solid #f0e3e3;
`
export const Text = styled.div`
font: normal normal bold 16px/18px Segoe UI;
color: #00326F;
text-align: center;
margin-top: 8px;
`
export const Rate1 = styled.div`
font: normal normal bold 16px/18px Segoe UI;
color: #7EC460;
text-align: center;
margin-top: 8px;
`
export const Icons = styled.div`
display:flex;
margin-top: 11px;
border: 1px solid #eee4e4;
width: 86px;
margin: auto;
gap:5px;
`
export const ArrowButton = styled.div`
display:flex;
justify-content: center;
margin-top: 50px;
`


// OUR OFFERS

export const InnerBox4 = styled.div`
display:flex;
margin-top: 30px;


`
export const Card2 = styled.div`
display:flex;
width: calc(100% - 401px);
margin-right: 25px;
background-color: #F6F6F6;
`
export const Img3 = styled.img`
background-color: white;
margin: 24px 0px 24px 0px;
`
export const Cayneey = styled.div`
background-color: white;
margin: 24px 0px 24px 12px;
padding: 0px 23px 0px 23px;
`
export const Cay = styled.div`
font: normal normal bold 30px/18px Segoe UI;
color: #2A2A2A;
margin-top: 25px;
`
export const Price = styled.div`
display: flex;
margin-top: 13px;
`
export const Negative = styled.div`
font: normal normal bold 18px/18px Segoe UI;
color: #BBBBBB;
text-decoration: line-through;
margin-right: 16px;
`
export const Passitive = styled.div`
font: normal normal bold 18px/24px Segoe UI;
color: #6AC20B;

`
export const Caytext = styled.div`
font: normal normal normal 14px/24px Segoe UI;
color: #2A2A2A;
margin-top:18px;
`
export const Offerdays = styled.div`
font: normal normal bold 14px/19px Segoe UI;
color: #FF5667;
margin-top: 16px;
`
export const Row3 = styled.div`
display: flex;
margin-left: 15px;
`
export const Days = styled.div`
font: normal normal 600 10px/14px Segoe UI;
color: #2A2A2A;
margin: 2px 10px 5px 0px;
`
export const Hrs = styled.div`
font: normal normal 600 10px/14px Segoe UI;
color: #2A2A2A;
margin: 2px 10px 5px 0px;
`
export const Mins = styled.div`
font: normal normal 600 10px/14px Segoe UI;
color: #2A2A2A;
margin: 2px 10px 5px 0px;
`
export const Sec = styled.div`
font: normal normal 600 10px/14px Segoe UI;
color: #2A2A2A;
margin: 2px 10px 5px 0px;
`
export const Number = styled.div`
border: 1px solid #f0e3e3;
display:flex;
border-radius: 8px;
`
export const Daysnum = styled.div`
font: normal normal bold 14px/19px Segoe UI;
color: #FF5667;
margin: 2px 10px 0px 0px;
`
export const Hrsnum = styled.div`
font: normal normal bold 14px/19px Segoe UI;
color: #FF5667;
margin: 2px 10px 0px 0px;
`
export const Minsnum = styled.div`
font: normal normal bold 14px/19px Segoe UI;
color: #FF5667;
margin: 2px 10px 0px 0px;
`
export const Secnum = styled.div`
font: normal normal bold 14px/19px Segoe UI;
color: #FF5667;
margin: 2px 10px 0px 0px;
`
export const Offericon = styled.div`
border: 1px solid #f0e3e3;
display:flex;
gap:5px;
margin-left: 140px;
`
export const Card3 = styled.div`
width: 401px;
background-color: #F6F6F6;
`
export const HeadCard3 = styled.div`
display:flex;
background-color: #D9AE06;
height: 40px;
border-radius: 10px 10px 0px 0px;
justify-content: center;
padding: 7px;

`
export const Categories = styled.div`
font: normal normal bold 18px/24px Segoe UI;
color: #FFFFFF;
margin-right: 20px;

`
export const CardColoum = styled.div`

`
export const FruitsColoum = styled.div`
display:flex;
padding: 20px 20px 10px 20px;
`
export const OfferFruits = styled.div`

`
export const Img2 = styled.img`
width: 80px;
height: 96px;
background-color: white;
border-right: 1px solid #eee4e4;
`
export const OfferRate = styled.div`
background-color: white;
flex: 1;
`
export const PomegranateText = styled.div`
font: normal normal 600 18px/18px Segoe UI;
color: #2A2A2A;

`
export const Price1 = styled.div`
display:flex;
margin-top: 10px;
`
export const Icons1 = styled.div`
margin-top: 10px;
margin-left: 10px;
display: flex;
gap: 5px;
border: 1px solid #eee4e4;
width: 86px;

`


// OUR CATEGORIES



export const InnerBox5 = styled.div`
position: relative;
`
export const Img4 = styled.img`
width:100%;
margin-top: 24px;
`
export const Categoryimg = styled.div`
display:flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50% );
gap:52px;
`
export const Fruitbox = styled.div`
border: 6px solid #19BF07;
border-radius: 50%;
background-color: white;
position: relative;
animation: mymove infinite;
animation-duration: 2s;
@keyframes mymove {
    from {top: 0px;}
    to {top: 150px;}
  }
`
export const Img5 = styled.img`

`
export const Img6 = styled.img`

`
export const Img7 = styled.img`

`
export const Img8 = styled.img`

`
export const ImgName = styled.div`
display:flex;
position:absolate;
top: 77%;
position: absolute;
left: 10%;
gap: 145px;
`
export const Fruitname = styled.div`
font: normal normal bold 30px/18px Segoe UI;
color: #FFFFFF;
`
export const Vegename = styled.div`
font: normal normal bold 30px/18px Segoe UI;
color: #FFFFFF;
`
export const Dairyname = styled.div`
font: normal normal bold 30px/18px Segoe UI;
color: #FFFFFF;
`
export const Staplesname = styled.div`
font: normal normal bold 30px/18px Segoe UI;
color: #FFFFFF;
`
export const Rowtetails = styled.div`
display:flex;
text-align: center;
margin-top: 15px;
`
export const Tetailsbox = styled.div`
padding: 40px;
border-right: 1px solid #eee5e5;
`
export const Textbold = styled.h1`
font: normal normal 600 24px/18px Segoe UI;
color: #2A2A2A;
margin-top: 10px;
`
export const Font = styled.p`
font: normal normal normal 14px/24px Segoe UI;
color: #2A2A2A;
margin-top: 20px;
`
export const Img9 = styled.img`

`
export const Img10 = styled.img`

`
export const Img11 = styled.img`

`
export const Img12 = styled.img`

`



// CUSTOMER REVIEWS


export const InnerBox6 = styled.div`
display:flex;
margin-top:25px;
background-color: #F6F6F6;
padding: 25px;
`
export const Reviewstext = styled.div`
text-align:center;
font: italic normal 400 24px/36px Segoe UI;
color: #2A2A2A;
padding: 0px 83px 0px 83px;
`
export const Reviewstextbold = styled.div`
font: normal normal 600 24px/36px Segoe UI;
color: #6FAE1D;
text-align:center;
`

