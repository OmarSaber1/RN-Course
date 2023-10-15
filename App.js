import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CourseItem from "./components/courseItem/courseItem";
import CourseInput from "./components/courseInput/courseInput";
import { CoursesModal } from "./components/modal/modal";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState([]);

  function handleButtonPress(currentText) {
    setCourses((prevState) => [
      ...prevState,
      { text: currentText, id: Math.random().toString() },
    ]);
  }

  function handleDeleteItem(id) {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  }

  function handleModalState() {
    setIsModalVisible((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <CoursesModal
        isModalVisible={isModalVisible}
        handleModalOpen={handleModalState}
      />
      <Button
        title='Open Modal'
        onPress={() => setIsModalVisible((prevState) => !prevState)}
      />
      <View style={styles.inputWrapper}>
        <CourseInput onAddItem={handleButtonPress} />
      </View>
      <View style={styles.listWrapper}>
        <Text style={styles.courseHeader}>List Of Todo</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseItem course={item} handleDeleteItem={handleDeleteItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
