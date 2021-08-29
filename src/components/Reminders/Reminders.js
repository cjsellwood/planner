import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar, Modal, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../store/actions/global";
import { initReminders } from "../../store/actions/reminders";
import theme from "../../theme";
import AddReminderButton from "./AddReminderButton";
import EditReminder from "./EditReminder";
import RemindersList from "./RemindersList";

const Reminders = () => {
  const dispatch = useDispatch();
  const { storageUsed } = useSelector((state) => state.reminders);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Reminders"));
  }, []);

  useEffect(() => {
    if (!storageUsed) {
      dispatch(initReminders());
    }
  }, [storageUsed]);

  const [newReminderModal, setNewReminderModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.colors.mainBackground}
        style={styles.statusBar}
        hidden={false}
      />
      <AddReminderButton setNewReminderModal={setNewReminderModal} />
      <RemindersList />
      <Modal
        animationType="fade"
        transparent={true}
        visible={newReminderModal}
        onRequestClose={() => setNewReminderModal(false)}
        statusBarTranslucent={true}
      >
        <Pressable
          onPress={() => {
            setNewReminderModal(false);
          }}
          style={styles.modal}
        >
          <EditReminder setNewReminderModal={setNewReminderModal} />
        </Pressable>
      </Modal>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginBottom: theme.navBarHeight + 10,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(1, 1, 1, 0.7)",
  },
});
