import { Text, View, StyleSheet, Pressable } from "react-native";

const CourseItem = ({ course, handleDeleteItem }) => {
  console.log({ course });
  return (
    <Pressable onPress={() => handleDeleteItem(course.id)}>
      <View style={styles.courseContainer}>
        <Text style={styles.course}>{course.text}</Text>
      </View>
    </Pressable>
  );
};

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
