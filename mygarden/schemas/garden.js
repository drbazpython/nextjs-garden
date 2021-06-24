/** references plant schema */
export default {

    name: "garden",
    title: "My Garden",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Plant Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 50,
            }
        },
        {
            name: "typeofplant",
            title: "Type of Plant",
            type: "string",
            options: {
                list: [
                    {title: "Flower", value: "flower"},
                    {title: "Weed", value: "weed"},
                    {title: "Vegetable", value: "vegetable"},
                    {title: "Tree", value: "tree"},
                    {title: "Bush", value: "bush"},
                ]
            }
        },
        {
            name: "variety",
            title: "Variety",
            type: "string",
        },
        {
            name: "plantImage",
            title: "Image",
            type: "image",
            options:
            {
                hotspot: true,
            }
        },
        {
            name: "botanicalname",
            title: "Botanical Name",
            type: "string"
        },
        {
            name: "whentoplant",
            title: "Best Time to Plant",
            type: "string",
            options: {
                list: [
                    {title: "January", value: "jan"},
                    {title: "February", value: "feb"},
                    {title: "March", value: "mar"},
                    {title: "April", value: "apr"},
                ]
            }
        },
        {
            name: "maturesize",
            titie: "Size When Mature",
            type: "string",
        },
        {
            name: "sunexposure",
            title: "Sun Exposure",
            type: "string",
        },
        {
            name: "bloomtime",
            title: "Bloom Time",
            type: "string",
        },
        {
            name: "flowercolour",
            title: "Flower Colour",
            type: "string",
        },
        {
            name: "notes",
            title: "Notes",
            type: "array",
            of: [
                {
                    title: "Notes",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal"}],
                    lists: [],
                }
            ]
        },


    ]
}