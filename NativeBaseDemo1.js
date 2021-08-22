// import { Body, Button, Container, Footer, FooterTab, Form, Header, Input, Item, Label, Left, Right, Title } from 'native-base';
// import React, { Component } from 'react';
// import { Text } from 'react-native';
// export default class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Left>
//             <Button transparent>
//               <Text>abcd</Text>
//             </Button>
//           </Left>
//           <Body>
//             <Title>Header</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Container>
//           <Form>
//             <Item>
//               <Label>Username</Label>
//               <Input />
//             </Item>
//           </Form>
//         </Container>

//         <Footer>
//           <FooterTab>
//             <Button full>
//               <Text style={{ color: 'black' }}>Footer</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

import {
  Body, Button, Container, Form, Header, Icon, Left,
  Picker, Right, Title
} from 'native-base';
import React, { Component } from 'react';

export default class NativeBaseDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staBranches: [
        { province: 'province 1', id: 1 },
        { province: 'province 2', id: 2 },
        { province: 'province 3', id: 3 },
        { province: 'province 4', id: 4 },
        { province: 'province 5', id: 5 },
      ],
      staSelectedBranch: 0,
    };
  }

  _branchSelected(arg_value) {
    this.setState({
      staSelectedBranch: arg_value,
    });
  }

  render() {
    const { staBranches, staSelectedBranch } = this.state
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => { alert('BACK!') }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>
        <Container>
          <Form>
            <Picker
              style={{ width: 300, height: 40 }}
              iosHeader="Branch"
              Header="Branch"
              mode="dropdown"
              textStyle={{ color: 'grey' }}
              placeholder="Click here to select branch"
              headerBackButtonText="Back"
              selectedValue={staSelectedBranch}
              onValueChange={value => this._branchSelected(value)}>
              {staBranches.map((item_branches, i) => {
                return (
                  <Picker.Item
                    label={`You chose: ${item_branches.province}`}
                    value={item_branches.id}
                    key={i}
                  />
                );
              })}
            </Picker>
          </Form>
        </Container>
      </Container>
    );
  }
}