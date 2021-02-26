import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

const urlFor = (source) => {
	return builder.image(source)
}

const About = () => {
	const [author, setAuthor] = useState(null)
	useEffect(() => {
		sanityClient
			.fetch(
				`
				*[_type=='author']{
			name,
			bio,
			"authorImage" : image.asset->url }
		`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error)
	}, [])

	if (!author) {
		return <div>Loading...</div>
	}
	return (
		<main className='relative'>
			<img src='/assets/image1.jpg' alt='background images' className='absolute w-full' />
			<div className='p-10 lg:pt-48 container mx-auto relative'>
				<section className='bg-green-800 rounded-lg shadow-2xl flex p-20'>
					<img
						src={urlFor(author.authorImage).url()}
						alt={author.name}
						className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
					/>
					<div className='flex flex-col justify-center'>
						<h1 className='cursive text-6xl text-green-300 mb-4'>
							Hi there, I'm <span className='text-green-100'>{author.name}</span>
						</h1>
						<div className='prose lg:prose-xl text-white'>
							<BlockContent
								blocks={author.bio}
								projectId='ywf6igjy'
								dataset='production'
							></BlockContent>
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default About
