import React, { Component } from 'react';
import { Container, Card, CardTitle, CardBody, CardHeader, Row, Col } from 'reactstrap';
const APP_ID = '4fd7f07d';
const APP_KEY = '6366fb53422c0710914acf9000b5c1d6';

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {

        const title = this.props.location.state.recipe;



        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`)

        // and since e is an object means  we can access the 'properties' of the 'object'.
        const data = await req.json();
        // Set the state 'recipes' to the api call
        this.setState({ activeRecipe: data.recipe.label })
        // console.log(this.state.recipes)

    }
    render(props) {
        // console.log(this.props)
        return (
            <>
                <Container>
                    <Card>
                        <CardBody>

                        </CardBody>

                    </Card>

                </Container>
            </>
        )
    }
}
export default Recipe;