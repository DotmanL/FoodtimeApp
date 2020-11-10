import React, { Fragment, useState } from 'react'
import { Container, Top, MenuNav, MenuLinks, Links, Main } from './Admin.styles'

import Users from './Users'
import Categories from './Categories'




const Admin = () => {


	const items = {
    users: <Users />,
   categories: <Categories />,
 }

 const [menus, setMenus] = useState('users')


  return (
    <Fragment>
       <Container> 
         <Top>
         <MenuNav>
							<MenuLinks>
									<Links  onClick={() => setMenus('users')}>
									Users List
								</Links>
							</MenuLinks>
              <MenuLinks>
									<Links  onClick={() => setMenus('categories')}>
									Categories
								</Links>
							</MenuLinks>
              <MenuLinks>
									<Links>
									Orders
								</Links>
							</MenuLinks>
              <MenuLinks>
									<Links>
									Analytics
								</Links>
							</MenuLinks>
              </MenuNav>
         </Top>

           <Main>
           {items[menus]}
           </Main>

       </Container>



    </Fragment>
  )
}



export default Admin
