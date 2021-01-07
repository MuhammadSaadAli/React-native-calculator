import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [resultText, setResultText] = useState('');
  const [calculatedText, setCalculatedText] = useState('');
  //  for all the number
  function buttonPressed(text) {
    console.log(text);
    setResultText(resultText + text);
    if (text === '=') {
      setResultText('');
      calculationText();
    }
  }

  function calculationText() {
    // eslint-disable-next-line no-eval
    setCalculatedText(eval(resultText));
    console.log(resultText);
  }
  function operation(opt) {
    switch (opt) {
      case 'D':
        console.log(resultText);
        let text = resultText.split('');
        text.pop();
        setResultText(text.join(''));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        let lastChar = resultText.split('').pop();
        // for not returning the operation if we are returning it for more then 1 time.
        if (resultText === '' || operations.indexOf(lastChar) > 0) {
          return;
        }
        setResultText(resultText + opt);
    }
  }

  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['.', 0, '='],
  ];

  let operations = ['D', '+', '-', '*', '/'];
  let ops = [];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          onPress={() => buttonPressed(nums[i][j])}
          key={nums[i][j]}
          style={styles.btn}>
          <Text style={styles.btnText}> {nums[i][j]} </Text>
        </TouchableOpacity>,
      );
    }

    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }

  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        onPress={() => operation(operations[i])}
        key={i}
        style={styles.btn}>
        <Text style={styles.btnText}> {operations[i]} </Text>
      </TouchableOpacity>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}> {calculatedText} </Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}> {resultText} </Text>
      </View>
      <View style={styles.button}>
        <View style={styles.number}>{rows}</View>
        <View style={styles.operation}>{ops}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 15,
    color: 'white',
  },
  result: {
    flex: 1,
    backgroundColor: 'darkcyan',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btn: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    color: 'white',
    padding: 7,
    margin: 19,
    fontSize: 35,
  },
  // opt: {justifyContent: 'space-between'},
  calculation: {
    flex: 2,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  row: {
    flex: 1,
    backgroundColor: 'aquamarine',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 7,
    backgroundColor: 'beige',
    flexDirection: 'row',
  },
  number: {
    flex: 3,
  },
  operation: {
    flex: 1,
    backgroundColor: 'darkturquoise',
    justifyContent: 'space-around',
  },
  calculationText: {
    fontSize: 32,
    color: 'white',
  },
  resultText: {
    fontSize: 25,
    color: 'white',
  },
  btnText: {
    fontSize: 30,
  },
});

export default App;
