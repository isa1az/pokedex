import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonResponse';
import StatisticSlider from './StatisticSlider';
import {getMaxStat} from '../utils/utils';

interface Props {
  pokemon: PokemonFull;
  isLoading: boolean;
}

const PokemonStatistics = ({pokemon: {stats}}: Props) => {
  const maxStat = getMaxStat(stats);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBorder} />
        <Text style={styles.title}>Statistics</Text>
        <View style={styles.titleBorder} />
      </View>

      {stats?.map(stat => (
        <StatisticSlider
          key={`stat-${stat.stat.name}`}
          stat={stat}
          maxStat={maxStat}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleBorder: {
    height: 1,
    width: 20,
    backgroundColor: 'black',
    flex: 2,
  },
  title: {
    textTransform: 'uppercase',
    marginHorizontal: 10,
    fontWeight: '600',
  },
});

export default PokemonStatistics;
