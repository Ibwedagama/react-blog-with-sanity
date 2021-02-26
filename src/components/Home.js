import React from 'react'

const Home = () => {
	return (
		<main className='absolute w-full h-screen'>
			<img
				src='/assets/3DVisaCard.jpg'
				alt='Card'
				className='absolute object-cover w-full h-screen'
			/>
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-16'>
				<h1 className='text-6xl text-white font-bold cursive leading-none lg:leading-snug'>
					Hello, I'm Ibwedagama
				</h1>
			</section>
		</main>
	)
}

export default Home
