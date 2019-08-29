import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
class BimaHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Header>
                <Left>
                {this.props.back && 
                    <Button hasText transparent>
                        <Text onPress={()=>{this.props.navigation.goBack()}}>Back</Text>
                    </Button>
                }
                </Left>
                <Body>
                    <Title>Bima</Title>
                </Body>
                <Right>
                </Right>
            </Header>
        );
    }
}
export default withNavigation(BimaHeader);
