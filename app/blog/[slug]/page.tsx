import { FullBlog } from '@/app/lib/DataTypes';
import { client, urlFor } from '@/app/lib/sanity'
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react'

const getData = async (slug:string) => {
    const query =`
    *[_type == 'blog' && slug.current =='${slug}']{
      title,
        "currentslug": slug.current,
        content,
        titleImage
      }[0]`
      const data = await client.fetch(query);
      return data;
}

const SinglePost = async({params}:{params:{slug:string}}) => {
  const data:FullBlog = await getData(params.slug);
  console.log(data)
  return (
    <div>
      <h1 className='mt-3'>
        <span className='block text-base text-center text-primary font-extrabold tracking-wide uppercase'>
          Saqib Murtaza-Blog
        </span>
        <span className='block font-bold mt-1 leading-8 text-center text-3xl sm:text-4xl tracking-tighter'>{data.title}</span>
      </h1>
      <Image src={urlFor(data.titleImage).url()} alt='Picture'
      width={1000} height={1000}
      className='mt-8 rounded-lg w-full h-80 object-cover justify-center'/>
      <div className='mt-8 prose prose-blue dark:prose-invert'>
      <PortableText value={data.content}/>
      </div>
      
    </div>
  )
}

export default SinglePost