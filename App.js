import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CourseItem from "./components/courseItem/courseItem";
import CourseInput from "./components/courseInput/courseInput";

export default function App() {
  const [courses, setCourses] = useState([]);

  function handleButtonPress(currentText) {
    console.log(currentText);
    setCourses((prevState) => [
      ...prevState,
      { text: currentText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <CourseInput onAddItem={handleButtonPress} />
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.courseHeader}>List Of Todo</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CourseItem course={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "skyblue",
    borderBottomWidth: 2,
  },

  listWrapper: {
    flex: 3,
    marginTop: 5,
  },
  courseHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
