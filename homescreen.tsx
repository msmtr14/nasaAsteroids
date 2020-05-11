/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import Button from './hoc/button';
import Axios from 'axios';
const API = 'rH7BNLm3h2zPdlbfc6rUBOFF4LSPoZ0qvVm2bS1m';

export default class HomeScreen extends Component<NavigationScreenProps> {
  state: any = {
    input: '',
    data: null,
    random: [],
  };

  _getRandomAsteroids = async () => {
    await Axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API}`,
    )
      .then((res) => {
        this.setState({random: res.data.near_earth_objects});
      })
      .catch((err) => console.error(err.response));
  };

  _performSubmit = async () => {
    const req = await Axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${this.state.input}?api_key=${API}`,
    )
      .then((res) => res.data)
      .catch((err) => err.response);

    if (req.status === 404) {
      Alert.alert('Wront Asteroid ID');
      return false;
    } else {
      return this.setState({data: req}, () => {
        this.props.navigation.navigate('Second', {data: req});
      });
    }
  };

  render() {
    const {input, random} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'left', width: '90%', marginBottom: 5}}>
              Enter Asteroid ID
            </Text>
            <TextInput
              style={{
                width: '90%',
                height: 30,
                backgroundColor: '#efefef',
                borderWidth: 0.3,
                borderColor: '#000',
                borderRadius: 10,
                paddingHorizontal: '2%',
                paddingVertical: 0,
                marginBottom: 20,
              }}
              value={input}
              autoCapitalize={'none'}
              placeholder={'Enter Asteroid ID'}
              onChangeText={(text: string) => this.setState({input: text})}
            />
            <Button
              title={'Submit'}
              disabled={input === ''}
              onPress={() => this._performSubmit()}
            />
            <Button
              title={'Random Asteroid'}
              onPress={() => this._getRandomAsteroids()}
              style={{marginTop: 10}}
            />
          </View>
          <View style={{marginTop: 20}}>
            {random.length > 0 &&
              random.map((item: any) => (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({input: item.id}, () => {
                      this._performSubmit();
                    });
                  }}
                  key={item.id}
                  style={{
                    backgroundColor: '#eee',
                    marginBottom: 10,
                    borderRadius: 10,
                    paddingHorizontal: '2%',
                    height: 40,
                    justifyContent: 'center',
                  }}>
                  <Text numberOfLines={1}>
                    {item.id} - {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
