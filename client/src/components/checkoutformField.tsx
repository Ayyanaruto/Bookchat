interface field{
    name: string;
    label: string;
    type?: string;
}
export let fields:field[]=[
    {
        name:"name",
        label:"Name",
        type:"text",
    },
    {
        name:"email",
        label:"Email",
        type:"email"
    },
    {
        name:"address",
        label:"Address",
        type:"text"
    },
    {
        name:"city",
        label:"City",
        type:"text"
    },
    {
        name:"zip",
        label:"Postal Code",
        type:"text"
    },
    {
        name:"state",
        label:"State",
        type:"text"
    },
    { 
        name:"phone"
        ,label:"Phone",
        type:"text"
    }]
    
export default fields;