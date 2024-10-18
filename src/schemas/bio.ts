import { defineField, defineType } from "sanity";


export default defineType({
    name: 'bio',
    type: 'document',
    title: 'bio',
    fields: [
        {
            name: 'phone',
            title: 'phone',
            type: 'string',
        },
                {
            name: 'email',
            title: 'email',
            type: 'string',
        },
                    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    ]
})