import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
});
