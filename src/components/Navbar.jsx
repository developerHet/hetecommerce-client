import { Search,ShoppingCartOutlined } from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
   ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
${mobile({width: "50px"})}
`;

const Center = styled.div`
flex: 1;
`;

const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({fontSize: "24px"})}
`;

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
${mobile({flex: 2,justifyContent: "center"})}
`;

const MenuItem = styled.div`
margin-left: 25px;
font-size: 14px;
cursor: pointer;
${mobile({fontSize: "12px",marginLeft: "10px"})}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <Input placeholder="search"/>
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          {" "}
          <Logo>HET.</Logo>{" "}
        </Center>
        <Right>

          {!user && <Link to="/register" style={{ textDecoration: 'none',color: 'black' }}><MenuItem>REGISTER</MenuItem></Link>}
          {!user && <Link to="/login" style={{ textDecoration: 'none',color: 'black' }}><MenuItem>SIGN IN</MenuItem></Link>}
          <Link  to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

// create span and make langauge pointer section
