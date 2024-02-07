import React from "react";
import { client, urlFor } from "@/app/lib/sanity";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogType } from "./lib/DataTypes";


const getData = async () => {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
      "currentslug": slug.current,
      summary,
      titleImage
  }`
  const data = client.fetch(query);
  return data;
  
}
export default async function Home() {
  const data: BlogType[] = await getData();
  console.log(data)
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {
        data.map((post, idx) =>
          <div key={idx} className="border rounded-t-lg shadow-md">
            <Card>
              <Image src={urlFor(post.titleImage).url()} alt="Title Image"
              width={500} height={500}
              className="rounded-t-lg h-[200px] object-cover"
              />
            </Card>     
            <CardContent className="mt-5">
              <h3 className="font-bold text-lg line-clamp-2">{post.title}</h3>
              <p className="line-clamp-3 mt-2 text-gray-600 dark:text-gray-300 text-sm">{post.summary}</p>
            <Button asChild className="w-full mt-7 ">
              <Link href={`/blog/${post.currentslug}`} >Read more</Link>
            </Button>
            </CardContent>
          </div>
                    
                    
        )
      }
      
    </main>
  );
}
