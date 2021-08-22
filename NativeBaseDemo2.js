import { Body, Button, Card, CardItem, Icon, Left, Text, Thumbnail } from 'native-base';
import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
export default class NativeBaseDemo2 extends Component {
  render() {
    return <SafeAreaView>
      <StatusBar barStyle='dark-content' />
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }} />
              <Body>
                <Text>This is my profile</Text>
                <Text note>23 February, 2018</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{
              uri: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
            }}
              style={{ height: 200, width: null, flex: 1 }}
            />

          </CardItem>
          <CardItem style={{ height: 45 }}>
            <Left>
              <Button transparent>
                <Icon name="ios-heart-outline"
                  style={{ color: 'black' }} />
              </Button>
              <Button transparent>
                <Icon name="ios-chatbubbles-outline"
                  style={{ color: 'black' }} />
              </Button>
              <Button transparent>
                <Icon name="ios-send-outline"
                  style={{ color: 'black' }} />
              </Button>
            </Left>
          </CardItem>
          <CardItem style={{ height: 60 }}>
            <Text>1000 likes</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                I am <Text style={{ fontWeight: 'bold' }}>Nguyen Duc Hoang</Text>, I live in Hanoi, Vietnam.
                I create this channel which contains videos in Swift programming language, python, NodeJS, Angular, Typescript,  ReactJS, React Native, ios and android programming, Kotlin programming, new technologies' overviews. These videos will help people learn latest programming language and software framework. They will be also very useful for their work or business.
                My channel's languages are English and Vietnamese. Contents are updated continuously.
                Thank you very much and hope to receive many advices for better next videos
                I am <Text style={{ fontWeight: 'bold' }}>Nguyen Duc Hoang</Text>, I live in Hanoi, Vietnam.
                I create this channel which contains videos in Swift programming language, python, NodeJS, Angular, Typescript,  ReactJS, React Native, ios and android programming, Kotlin programming, new technologies' overviews. These videos will help people learn latest programming language and software framework. They will be also very useful for their work or business.
                My channel's languages are English and Vietnamese. Contents are updated continuously.
                Thank you very much and hope to receive many advices for better next videos
                I am <Text style={{ fontWeight: 'bold' }}>Nguyen Duc Hoang</Text>, I live in Hanoi, Vietnam.
                I create this channel which contains videos in Swift programming language, python, NodeJS, Angular, Typescript,  ReactJS, React Native, ios and android programming, Kotlin programming, new technologies' overviews. These videos will help people learn latest programming language and software framework. They will be also very useful for their work or business.
                My channel's languages are English and Vietnamese. Contents are updated continuously.
                Thank you very much and hope to receive many advices for better next videos
              </Text>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </SafeAreaView>
  }
}