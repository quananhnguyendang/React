import React, { Component } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Card, Image } from 'react-native-elements';

export default () => {
  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <Card>
        <View style={{borderBottomWidth: 0.5, borderBottomColor: 'gray'}}>
        <Card.Title>{'Contact Information'}</Card.Title>
        </View>
          <Text style={{marginTop: 10}}>{
          "121, Clear Water Bay Road \nClear Water Bay, Kowloon \nHONG KONG \nTel: +852 1234 5678 \nFax: +852 8765 4321 \nEmail:confusion@food.net"
        }</Text>
        </Card>
    </SafeAreaView>

  );
};