import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

interface HeaderProps {
  title: string;
  showBackButton?: boolean; 
  onBackPress?: () => void; 
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={localStyles.headerContainer}>
      <StatusBar
        animated={true}
        backgroundColor="#4444ff"
        barStyle="light-content"
        hidden={false}
      />
      {showBackButton && (
        <TouchableOpacity style={localStyles.backButton} onPress={onBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={localStyles.headerTitle}>{title}</Text>
      {showBackButton && <View style={localStyles.backButtonPlaceholder} />}
    </View>
  );
};

const localStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#023047",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between", 
    flexDirection: "row", 
    paddingTop: StatusBar.currentHeight || 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, 
    textAlign: "center", 
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  backButtonPlaceholder: {
    width: 34,
  },
});

export default Header;
