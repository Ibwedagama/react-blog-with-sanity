import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
	return (
		<header className='bg-blue-400'>
			<section className='container mx-auto flex justify-between'>
				<nav className='flex'>
					<NavLink
						to='/'
						exact
						activeClassName='text-white'
						className='inline-flex py-6 px-3 items-center mr-4 text-blue-600 hover:text-blue-800 text-4xl font-bold cursive tracking-wide'
					>
						Home
					</NavLink>
					<NavLink
						to='/post'
						activeClassName='text-white'
						className='inline-flex py-6 px-3 items-center mr-4 text-blue-600 hover:text-blue-800 text-xl font-bold cursive tracking-wide'
					>
						Blog Posts
					</NavLink>
					<NavLink
						to='/project'
						activeClassName='text-white'
						className='inline-flex py-6 px-3 items-center mr-4 text-blue-600 hover:text-blue-800 text-xl font-bold cursive tracking-wide'
					>
						Projects
					</NavLink>
					<NavLink
						to='/about'
						activeClassName='text-white'
						className='inline-flex py-6 px-3 items-center mr-4 text-blue-600 hover:text-blue-800 text-xl font-bold cursive tracking-wide'
					>
						About
					</NavLink>
				</nav>
				<section className='inline-flex my-6 mx-3'>
					<SocialIcon
						url='https://twitter.com/satpamkncl'
						className='mr-4'
						target='_blank'
						rel='noopener no referrer'
						fgColor='#FFF'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url='https://www.linkedin.com/in/ibwedagama/'
						className='mr-4'
						target='_blank'
						rel='noopener no referrer'
						fgColor='#FFF'
						style={{ height: 35, width: 35 }}
					/>
				</section>
			</section>
		</header>
	)
}

export default NavBar
