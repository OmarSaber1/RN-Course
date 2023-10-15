import { Button, Modal, Text } from "react-native";

export const CoursesModal = ({ handleModalOpen, isModalVisible }) => (
  <Modal visible={isModalVisible} animationType='slide'>
    <Text>Hello from modal</Text>
    <Button title='Close Modal' onPress={handleModalOpen} />
  </Modal>
);
