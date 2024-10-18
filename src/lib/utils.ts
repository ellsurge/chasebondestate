import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { client } from './sanity.client'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source:any) {
  return builder.image(source)
}