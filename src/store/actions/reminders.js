import useAsyncStorage from "../../hooks/useAsyncStorage";

const { get, store } = useAsyncStorage("reminders");

export const addNewReminder = (reminder) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_NEW_REMINDER",
      reminder,
    });
    const stored = await get();
    if (!stored) {
      await store([reminder]);
    } else {
      await store([...stored, reminder]);
    }
  };
};

export const initReminders = () => {
  return async (dispatch) => {
    const reminders = await get();
    dispatch({ type: "INIT_REMINDERS", reminders });
  };
};

export const deleteReminder = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_REMINDER",
      id,
    });
    const stored = await get();
    await store(stored.filter((reminder) => reminder.id !== id));
  };
};
