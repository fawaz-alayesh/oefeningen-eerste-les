import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht2() {
    // Hier heb je ruimte voor JavaScript code
    // Je kunt variabelen printen in de view door in een <Text> component {'naam-variabele'} te plaatsen
    // zie hieronder een voorbeeld
    // OPDRACHT: Maak een object (persoon) met informatie over jezelf zoals:
    // naam, leeftijd, opleiding, favoriete game en serie.
    // Zie deze EagleDev voor meer info over objecten: https://eagledev.nl/tasks/705 
    // OPDRACHT: print met <Text> componenten de waardes van je object op je scherm
    // OPDRACHT: geef de <Text> componenten een mooie styling
    let persoon = 'Fawaz, 23, Software developer, call of duty'
    return (
      <View style={styles.mainContainer}>
        <Text>{persoon}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#1233',
      justifyContent: 'center',
    },
  });