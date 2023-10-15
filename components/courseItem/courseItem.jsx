import { Text, View, StyleSheet, Pressable, Image } from "react-native";

const CourseItem = ({ course, handleDeleteItem }) => {
  return (
    <View style={styles.courseContainer}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={() => handleDeleteItem(course.id)}
      >
        <Text style={styles.course}>{course.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: "purple",
    padding: 10,
  },
  course: {
    borderRadius: 10,
    margin: 5,
    color: "white",
  },
});

export default CourseItem;
