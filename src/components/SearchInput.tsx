import React, {useMemo, useState} from 'react';
import {Platform, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import {debounce} from 'lodash';

interface Props {
  onSearch: (value: string) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const SearchInput = ({style, onSearch, disabled = false}: Props) => {
  const [textValue, setTextValue] = useState('');

  const handleChangeWithDebounce = useMemo(
    () => debounce((text: string) => onSearch(text), 350),
    [onSearch],
  );

  return (
    <View
      style={{
        ...styles.container,
        ...(style as any),
      }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokémon"
          style={{
            ...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={value => {
            setTextValue(value);
            handleChangeWithDebounce(value);
          }}
          editable={!disabled}
          selectTextOnFocus={!disabled}
        />

        <Ionicons name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
