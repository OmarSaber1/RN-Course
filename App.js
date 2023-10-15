import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import CourseItem from "./components/courseItem/courseItem";
import CourseInput from "./components/courseInput/courseInput";
import { CoursesModal } from "./components/modal/modal";
import { StatusBar } from "expo-status-bar";

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
    <>
      <StatusBar style='light' />
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
          <Image
            width={100}
            height={100}
            source={{
              uri: "https://st.depositphotos.com/2419757/55802/v/450/depositphotos_558022218-stock-illustration-arrow-dart-hitting-target-aim.jpg",
            }}
          />
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "grey",
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
    alignItems: "center",
  },
  courseHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
