import React from 'react';
import { Switch, Platform } from 'react-native';

class MkSwitch extends React.Component {
  render() {
    const { value, ...props } = this.props;
    const thumbColor = Platform.OS === 'ios' ? null :
      Platform.OS === 'android' && value ? '#0B5713' : '#D4D9DD';

    return (
      <Switch
        value={value}
        thumbColor={thumbColor}
        ios_backgroundColor={'#D4D9DD'}
        trackColor={{ false: '#0B5713', true: '#0B5713' }}
        {...props}
      />
    );
  }
}

export default MkSwitch;