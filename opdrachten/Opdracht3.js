import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function Opdracht3() {
  // OPDRACHT: Kopieer het object wat je in de vorige opdracht hebt gemaakt.
  // OPDRACHT: Maak een aantal if/else statements die de onderstaande variabelen bepalen:
  let ikBenStemGerechtig
  let IkBenOuderDan65
  let ikMagBrommerRijden
  // Je gebruikt de leeftijd uit het object van de vorige opdracht in je if/else statement
  // OPDRACHT: Print elk statement op het scherm. Hieronder een voorbeeld:
  let ajaxIsDeBesteClubVanNL = true
  // OPDRACHT: Stop elke regel text in een aparte Container (View)
  // OPDRACHT: Geef elke Container een andere kleur
  return (
      <View style={styles.mainContainer}>
        <View style={styles.boven}></View>
        <View style={styles.onder}></View>
        {/* Hieronder zie je een manier om text te printen op basis van een waarde uit een variabele */}
        <Text>Ajax is de {ajaxIsDeBesteClubVanNL ? 'beste' : 'slechste'} club van NL</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'yellow',
      
    },
    boven:{
      flex:1,
      backgroundColor:'red',
    },
    onder:{
      flex:1,
      backgroundColor:'grey',

    }
  });