import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Stat} from '../interfaces/pokemonResponse';
import {parseStatName} from '../utils/utils';

interface Props {
  stat: Stat;
  maxStat: number;
}

const StatisticSlider = ({stat, maxStat}: Props) => {
  const statName = parseStatName(stat.stat.name);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{statName}</Text>

      <View style={styles.barContainer}>
        <View
          style={{
            ...styles.statContainer,
            width: `${(stat.base_stat * 100) / maxStat}%`,
          }}
        />
        <View style={styles.thumbContainer}>
          <Text style={styles.thumb}>{stat.base_stat}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  name: {
    color: 'black',
    textTransform: 'capitalize',
    width: 70,
    marginRight: 5,
  },
  barContainer: {
    backgroundColor: 'lightgrey',
    height: 10,
    flex: 1,
    borderRadius: 3,
    flexDirection: 'row',
  },
  statContainer: {
    height: 10,
    backgroundColor: '#3d7dca',
    borderRadius: 3,
  },
  thumbContainer: {
    height: 10,
    flex: 1,
    justifyContent: 'center',
  },
  thumb: {
    backgroundColor: 'white',
    position: 'absolute',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 3,
    left: -30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default StatisticSlider;
