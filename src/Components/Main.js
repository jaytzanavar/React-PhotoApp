import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';





class Main extends Component {

    // first lifecycle method
    constructor() {
        super() //use super in order to create this and get components stuff
        this.state = {
            posts: [{
                id: "0",
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                    "3919321_1443393332_n.jpg"
            }, {
                id: "1",
                description: "Aliens???",
                imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                    "08323785_735653395_n.jpg"
            }, {
                id: "2",
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }]
        }
        this.removePhoto = this.removePhoto.bind(this); // pass inorder to have set state
    }

    //invoked imideately after const is invoked fetching getting data here!
    /**
     * Perfect place to fetch data. It gets called after render. 
     * This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render.
     *  This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
     */
    componentDidMount() {

        const data = this.SimulateFetchDB()
        this.setState({
            posts: data
        })
    }
    // Before component is renders
    componentWillMount(){
        console.log('Comp Will Mount');
    }

    /// Whenever a component is updated , state is updated, rerender
    // called when the state of a component changes. Perfect place to update UI or make network 
    //calls based on previous state before update, and current state
    componentDidUpdate(){
        console.log('Did Update: RE Rendering');
    }

    removePhoto(postRemoved) {
        console.log(postRemoved);

        this.setState((state) => ({

            posts: state.posts.filter(post => {
                console.log(post);
                return post.description !== postRemoved
            })
        }))
    }




    render() {
        return <div>
            <Title title='PhotoooBooth' />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
        </div>
    }

    SimulateFetchDB() {
        return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
                "08323785_735653395_n.jpg"
        }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }


}


export default Main;