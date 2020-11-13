import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht1() {
  // Een <View> kan je hier zien als een <div> in html.
  // Op het moment dat je een pagina in VSCode opslaat refresht de app automatisch,
  // vraag de docent om je te helpen als dit niet gebeurt. (Device schudden -> enable Fast refresh)
  // OPDRACHT: Verwijder justifyContent: 'center' en alignItems: 'center' (regel 39, 40).
  // OPDRACHT: Verwijder <Text>Lees de opdrachten onder de function Opdracht1!</Text> (regel 22).
  // OPDRACHT: Maak een column van 5 boxen met verschillende kleuren.
  // OPDRACHT: Plaats in elke <View> een stukje <Text>.
  // EXTRA OPDRACHT: Geef de <Text> een styling (verander bijvoorbeeld de kleur).
  // EXTRA OPDRACHT: Maak elke container steeds een stukje groter

    // Hieronder zie je wat zal worden weergegeven onder het kopje Opdracht1
    return (
      // Elk return statement bevat precies 1 component, deze view wordt ook wel de MainContainer genoemd.
      // In deze MainContainer kun je vervolgens andere componenten plaatsen.
      // Zie hieronder het voorbeeld met de View en Text componenten
      <View style={styles.mainContainer}>
        <View style={styles.redContainer}></View>
        <View style={styles.blueContainer}></View>
        <Text>Lees de opdrachten onder de function Opdracht1!</Text>
      </View>
      
    );
  }

  // Hieronder zie je de styling voor deze pagina.
  // Zoals je misschien al ziet lijkt het een beetje op css.
  // Het verschil is dat we hier met FlexBox werken.
  // Meer over FlexBox lees je op https://eagledev.nl/tasks/698.
  // Verder noemen we properties niet met een streepje '-'
  // maar met hoofdletters tussen verschillende woorden.
  // Voorbeeld: background-color wordt backgroundColor.
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'green',

    },
    redContainer: {
      flex: 1,
      backgroundColor: 'red',
    },
    blueContainer: {
      flex: 1,
      backgroundColor: 'blue',
    }
    // de overige containers moet je zelf maken!
  });