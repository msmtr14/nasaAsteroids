/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

interface Props {
  title?: string;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  onPress?: any;
}

const Button: FunctionComponent<Props> = ({
  title,
  disabled,
  style,
  titleStyle,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      {...rest}
      style={{
        backgroundColor: '#117BFF',
        opacity: disabled ? 0.7 : 1,
        minWidth: '50%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        ...style,
      }}>
      <Text
        style={{color: '#fff', fontWeight: '400', fontSize: 16, ...titleStyle}}>
        {title || ''}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
