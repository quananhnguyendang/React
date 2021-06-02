import React, { Component } from "react";
import { SafeAreaView, FlatList, ScrollView } from "react-native";
import { Avatar, ListItem, Card } from "react-native-elements";

export default class LeadersComponent extends Component {
  constructor(props) {
    super(props);

  }
  renderMenuItem(item, index) {
    return (
      <ListItem key={index}>
        <Avatar source={require('./images/uthappizza.png')} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  render() {
    // renderMenuItem = (item, index) => (
    //   // <ListItem key={index}>
    //   //   <Avatar source={item.image} />
    //   //   <ListItem.Content>
    //   //     <ListItem.Title>{item.name}</ListItem.Title>
    //   //     <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
    //   //   </ListItem.Content>
    //   // </ListItem>
    // );
    
    return (
      <SafeAreaView style={{ marginTop: 20 }}>
        <Card>
          <Card.Title>Corporate LeaderShip</Card.Title>
          <Card.Divider />
          <FlatList
            data={this.props.data}
            renderItem={({ item, index }) => this.renderMenuItem(item, index)}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </SafeAreaView>
    );
  }
 
};