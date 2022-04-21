import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import image from '../image/ELLAN-TEC-LOGO-06.png';
import { Headerbox,Headding, H1tag, H2tag,H3tag,Icons,Icon, Icon2, Icon3, Card, Thomson ,Img,Pname1,Pname2} from '../header/Header_style';

const Header = () => {
    return (
        <>
            <Headerbox>
                                <Icon><ReorderIcon /></Icon>
                        <Headding> 
                            <Img src={image}></Img>
                            <H1tag>
                                <H2tag><Pname1>Ellan</Pname1><Pname2>Grocery</Pname2></H2tag>
                                <H3tag>Online Food Store</H3tag>
                            </H1tag>
                        </Headding> 

                        <Icons>
                                <Icon2><ShoppingCartIcon/></Icon2>
                                <Card>Cart</Card>
                                <Icon3><PersonIcon /></Icon3>
                                <Thomson>Thomson</Thomson>
                        </Icons>
                    
               
            </Headerbox>
            
        
        </>
    )
};

export default Header;