import React from 'react'
import { MdSearch, MdNotifications }  from 'react-icons/md'
import Avatar from '../../assets/Avatar1.png'
import { StyledHeader, StyledHeaderForm } from './style'


const Header = () => {
   return (
      <StyledHeader>
         <StyledHeaderForm>
            <button type='submit'>
               <MdSearch size={30} color='rgba(255, 255, 255, .5)'/>
            </button>
            <input type='text' name='search' id='search' placeholder='Buscar...' />
         </StyledHeaderForm>
         <div className='userMenu'>
            <button type='submit'>
               <MdNotifications size={30} color='#FFF' />
            </button>
            <img src={Avatar} alt="Nome do usuário" />
         </div>
      </StyledHeader>
   )
}

export default Header
