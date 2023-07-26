

interface field{
    name: string;
    label: string;
    type?: string;
}
export let fields:field[]=[
    {
        name:"name",
        label:" Product Name",
        type:"text",
    },
    {
        name:"price",
        label:"Price",
        type:"number"
    },
    {
        name:"discount",
        label:"Discount",
        type:"number"
    },
    {
        name:"description",
        label:"Description",
        type:"text"
    },
    {
        name:"countInStock",
        label:"Count In Stock",
        type:"number"
    },


]