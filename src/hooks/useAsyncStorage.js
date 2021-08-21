import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = (name) => {
  const store = async (data) => {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  };

  const get = async () => {
    const data = await AsyncStorage.getItem(name);
    return JSON.parse(data);
  };

  const remove = async () => {
    await AsyncStorage.removeItem(name);
  };
  const clear = async () => {
    await AsyncStorage.clear();
  };
  return { store, get, remove, clear };
};

export default useAsyncStorage;
