/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

export default class SecondScreen extends Component<NavigationScreenProps> {
  render() {
    const data = this.props.navigation.getParam('data', undefined);
    console.log(data);
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: '4%',
          }}>
          <View style={{...style.labelContainer}}>
            <Text style={{...style.label}}>ASTEROID ID :</Text>
            <Text style={{...style.labelAns}}>{data.id}</Text>
          </View>
          <View style={{...style.labelContainer}}>
            <Text style={{...style.label}}>Name :</Text>
            <Text style={{...style.labelAns}}>{data.name}</Text>
          </View>
          <View style={{...style.labelContainer}}>
            <Text style={{...style.label}}>nasa_jpl_url :</Text>
            <Text style={{...style.labelAns}}>{data.nasa_jpl_url}</Text>
          </View>
          <View style={{...style.labelContainer}}>
            <Text style={{...style.label}}>
              is_potentially_hazardous_asteroid :
            </Text>
            <Text style={{...style.labelAns}}>
              {data.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  label: {
    fontSize: 16,
  },
  labelAns: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    minHeight: 10,
    maxWidth: '100%',
    textAlign: 'left',
  },
  labelContainer: {
    minHeight: 50,
    maxHeight: 700,
    paddingHorizontal: '5%',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
});
