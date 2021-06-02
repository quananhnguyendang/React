import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { View } from 'react-native';
import { DISHES } from '../Shared/dishes';
import { LEADERS } from '../Shared/leaders';

import Loading from './LoadingComponent';

import { baseUrl } from '../Shared/baseUrl';
// redux
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
};
// import Dishdetail from './DishdetailComponent';


// class Menu extends Component {
//   render() {
//     return (
//       <FlatList data={this.props.dishes}
//         renderItem={({ item, index }) => this.renderMenuItem(item, index)}
//         keyExtractor={item => item.id.toString()} />
//     );
//   }
//   renderMenuItem(item, index) {
//     return (
//       <ListItem key={index}>
//         <Avatar source={require('./images/uthappizza.png')} />
//         <ListItem.Content>
//           <ListItem.Title>{item.name}</ListItem.Title>
//           <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
//         </ListItem.Content>
//       </ListItem>
//     );
//   };
// }
// export default Menu;
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedDish: null
      dishes: DISHES,
      leader: LEADERS
    };
  }
  render() {
    if (this.props.dishes.isLoading) {
      return (<Loading />);
    } else if (this.props.dishes.errMess) {
      return (<Text>{this.props.errMess}</Text>);
    } else {
    return (
      // <View style={{ flex: 1 }}>
      //   <FlatList data={this.props.dishes}
      //   renderItem={({ item, index }) => this.renderMenuItem(item, index)}
      //   keyExtractor={item => item.id.toString()} />
      //   {/* <Dishdetail dish={this.state.selectedDish} /> */}
        
      // </View>

        <FlatList data={this.props.dishes.dishes}
        
        renderItem={({ item, index }) => this.renderMenuItem(item, index)}
        keyExtractor={item => item.id.toString()} />
    );
    }
  }
  renderMenuItem(item, index) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
        {/* <Avatar source={require('./images/uthappizza.png')} /> */}
        <Avatar source={{uri: baseUrl + item.image}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  onDishSelect(item) {
    //alert(item.id);
    this.setState({ selectedDish: item });
  }
}
// export default Menu;
export default connect(mapStateToProps)(Menu);
