import React from 'react'
import PostCard from'./postCard'
import axios from 'axios'
import {Card,Container, CardGroup} from 'semantic-ui-react'

class Posts extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }
    }

    componentWillMount(){
        var thisComponent = this
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(function(res){
                 var data =res.data
                 thisComponent.setState({
                     posts: data
                 })
            })

    }
     

    render(){
        console.log(this.state)
        var posts = this.state.posts
        return <Container>
            <CardGroup></CardGroup>
            {posts.map(function(currentPost){
                return <PostCard title={currentPost.title} text={currentPost.text}/>
            })}

        </Container>
    }

}

export default Posts

