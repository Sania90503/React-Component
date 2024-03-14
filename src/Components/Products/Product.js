import ListItem from "./ListItem/ListItem"

const items =[
   { id:0,
    discountPrice: 340,
    price: 450,
    title: "Title of the Item1",
    thumbnail: "./dummy-image.jpg"
},
{
    id:1,
    discountPrice: 250,
        price: 420,
        title: "Title of the Item2",
        thumbnail: "./dummy-image.jpg"
},
{
    id:2,
    discountPrice: 360,
    price: 400,
    title: "Title of the Item3",
    thumbnail: "./dummy-image.jpg"
},
{
    id:3,
    discountPrice: 280,
    price: 420,
    title: "Title of the Item4",
    thumbnail: "./dummy-image.jpg"
},
{
    id:4,
    discountPrice: 320,
        price: 410,
        title: "Title of the Item5",
        thumbnail: "./dummy-image.jpg"
}

]

const Product = ()=>{
    return(
        <>
   <ListItem data = {items[0]}/>
   <ListItem data = {items[1]}/>
   <ListItem data = {items[2]}/>
   <ListItem data = {items[3]}/>
   <ListItem data = {items[4]}/>
        </>
    )
}
export default Product