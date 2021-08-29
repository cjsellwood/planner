import duplicateReminders from "../../functions/duplicateReminders";

const initialState = {
  reminders: [],
  storageUsed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_REMINDER": {
      const remindersCopy = duplicateReminders(state.reminders);
      remindersCopy.push(action.reminder);
      return {
        ...state,
        reminders: remindersCopy,
      };
    }
    case "INIT_REMINDERS": {
      return {
        ...state,
        storageUsed: true,
        reminders: action.reminders,
      };
    }
    case "DELETE_REMINDER": {
      const remindersCopy = duplicateReminders(state.reminders);

      return {
        ...state,
        reminders: remindersCopy.filter(
          (reminder) => reminder.id !== action.id
        ),
      };
    }
    default:
      return state;
  }
};

export default reducer;
