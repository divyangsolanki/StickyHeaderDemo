import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import StickyHeaderFlatlist from 'react-native-sticky-header-flatlist';

const DATA = [
  {
    title: 'AGUA',
    albrookList: [
      {title: 'Agua Pequena'},
      {title: 'Agua Grande'},
      {title: 'Agua Con Gas'},
    ],
  },
  {
    title: 'AL DIA',
    albrookList: [
      {title: 'Lunes Greek Pita'},
      {title: 'Martes Domingo Pollo Pita'},
      {title: 'Miercoles Paras Fries'},
      {title: 'Jueves Pollo Burger'},
      {title: 'Viernes Pollo Flater'},
      {title: 'Sabado Pork Pita'},
      {title: ''},
    ],
  },
  {
    title: 'ARROCES',
    albrookList: [
      {title: 'Arroz Con Pollo'},
      {title: 'Arroz Con Pollo + E'},
      {title: 'Arroz Griego'},
      {title: 'Arroz Griego + E'},
    ],
  },
  {
    title: 'BOLSAS',
    albrookList: [
      {title: 'Llevar Pequena'},
      {title: 'Llevar Grande'},
      {title: 'Llevar Marron'},
      {title: 'Llevar Bebidas'},
    ],
  },
  {
    title: 'CARNE',
    albrookList: [
      {title: 'Pita Carne'},
      {title: 'Arabic Carne'},
      {title: '15CM Pita Carne'},
      {title: 'Burger Carne'},
      {title: 'Plater Carne'},
    ],
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.titleStyle}>Albrook</Text>
      <StickyHeaderFlatlist
        keyExtractor={(_, i) => i + ''}
        childrenKey={'albrookList'}
        renderHeader={({item}) => {
          return <Text style={styles.titleStyle}>{item.title}</Text>;
        }}
        renderItem={({item}) => {
          return <Text style={styles.itemStyle}>{item.title}</Text>;
        }}
        data={DATA}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    padding: 30,
    borderWidth: 1,
    borderColor: '#E9E7E6',
    fontSize: 14,
    backgroundColor: '#fff',
  },
  headerStyle: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#0096FF',
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleStyle: {
    padding: 20,
    borderWidth: 1,
    fontSize: 16,
    borderColor: '#000',
    backgroundColor: '#0096FF',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default App;
