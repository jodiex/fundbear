import React from 'react';
import '../css/CardPrimary.css'
import { Card, Image } from 'semantic-ui-react';

class CardPrimary extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.callBack(this.props.header);
    }
    render(){
        return (
            <div className="cardContainer" onClick={this.handleClick.bind(this)}>
                <Card style={{height: '270px'}}>
                    <Image src={this.props.img}></Image>
                    <Card.Content>
                        <Card.Header>{this.props.header}</Card.Header>
                        <Card.Description>
                            {this.props.description}
                        </Card.Description>
                    </Card.Content>          
                </Card>
            </div>
        );
    }
}

export default CardPrimary;