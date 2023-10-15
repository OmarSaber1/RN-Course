import { Text, View, StyleSheet } from "react-native";

const CourseItem = ({ course }) => (
  <View style={styles.courseContainer}>
    <Text style={styles.course}>{course.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  course: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    color: "white",
  },
});

export default CourseItem;
