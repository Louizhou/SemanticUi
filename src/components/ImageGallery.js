import React from 'react'
import ImageCard from './ImageCard'
import axios from 'axios'
import { Card,Container } from 'semantic-ui-react';
import lodash from 'lodash'
import Zmage from 'react-zmage'

class ImageGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            images:[]
        }
    }


    componentWillMount(){
        const that = this
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then(function(res){
            var data = res.data
            that.setState({
                images: data
            })
        })

    }

    render(){
        const count = this.props.count 
        const perRow = this.props.count
        const images = lodash.take(this.state.images,count)
        return(
            <Container>
            <Card.Group itemsPerRow={perRow}>
                {/* <ImageCard title='test title' text='test text' image='https://picsum.photos/200'/>
                <ImageCard title='te tle' text='test t' image='https://picsum.photos/200'/> */}
                {images.map(function(item){
                    return (
                        <ImageCard 
                            title={item.title} 
                            image={item.url}
                        />
                    )
                })}
            </Card.Group>
            </Container>
        )


    }


}


export default ImageGallery

