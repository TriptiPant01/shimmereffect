/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const App = () => {
  const [loading, setLoading] = useState(true);

  const {width} = Dimensions.get('window');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true} />
      {loading ? (
        <SkeletonPlaceholder>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                width: width - 30,
                height: 30,
                borderRadius: 4,
                marginTop: 20,
                marginBottom: 10,
              }}
            />
            <View
              style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
            />
          </View>
        </SkeletonPlaceholder>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 20}}>
            This is a long text which is for description
          </Text>
          <Text style={{fontSize: 18}}>This is a short text</Text>
        </View>
      )}
    </View>
  );
};
export default App;
