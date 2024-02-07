import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    apiVersion: '2022-03-07',
    dataset: 'production',
    projectId: 'nv5dsyh8',
    useCdn: false
})
// build a function to convert image reference to image url

const builder = imageUrlBuilder(client)

export function urlFor(source:any){
    return builder.image(source)
}
