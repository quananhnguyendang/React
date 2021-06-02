import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import Loading from './LoadingComponent';
import { baseUrl } from '../Shared/baseUrl';
// redux
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    favorites: state.favorites
  }
};

class Favorites extends Component {
  render() {
    if (this.props.dishes.isLoading) {
      return (<Loading />);
    } else if (this.props.dishes.errMess) {
      return (<Text>{this.props.dishes.errMess}</Text>);
    } else {
      const dishes = this.props.dishes.dishes.filter((dish) => this.props.favorites.some((el) => el === dish.id));
      return (
        <FlatList data={dishes}
          renderItem={({ item, index }) => this.renderMenuItem(item, index)}
          keyExtractor={item => item.id.toString()} />
      );
    }
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
        <Avatar source={{ uri: baseUrl + item.image }} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
}
export default connect(mapStateToProps)(Favorites);