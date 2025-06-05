import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={localStyles.button} onPress={onPress}>
      <Text style={localStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;