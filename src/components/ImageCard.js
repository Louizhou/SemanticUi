import React from 'react'
import { Card } from 'semantic-ui-react'
import Zmage from 'react-zmage'
//title
//text
//image


const ImageCard = function(props){
    const title = props.title
    const text = props.text
    const image = props.image
// console.log(images)

    return (
        <Card header={title} description={text}  image={image}/>
    )
}




export default ImageCard