import { defineField, defineType } from "sanity";

export default defineType({
  name: "bio",
  type: "document",
  title: "bio",
  fields: [
    {
      name: "phone",
      title: "phone",
      type: "string",
    },
    {
      name: "phone2",
      title: "phone2",
      type: "string",
    },
    {
      name: "phone3",
      title: "phone3",
      type: "string",
    },

    {
      name: "email",
      title: "email",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
});
