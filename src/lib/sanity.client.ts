import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;
export const googleApi = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

export const client = createClient({ projectId, dataset, apiVersion });
