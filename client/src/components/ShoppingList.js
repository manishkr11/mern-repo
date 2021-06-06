import React, {Component} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { v4 as uuid } from 'uuid'

class ShoppingList extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Water'},
            {id: uuid(), name: 'Orange'},
        ]
    }

    render(){
        const {items} = this.state
        console.log(items[0].name)
        return(
            <Container>
                <Button
                color="dark"
                style={{marginBotton: '2rem'}}
                onClick={()=>{
                    const name = prompt('Enter Item')
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id:uuid, name}]
                        }))
                    }
                }}
                
                >Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {
                            items.map(({name,id}) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }))
                                        }}
                                        >
                                            &times;
                                        </Button>
                                        {name}
                                    </ListGroupItem>

                                </CSSTransition>
                            ))
                        }

                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList