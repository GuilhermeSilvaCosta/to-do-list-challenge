import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers: any) => {
    const persistedReducer = persistReducer({
        key: 'tasks',
        storage: AsyncStorage,
        whitelist: ['tasks'],
    }, reducers);

    return persistedReducer;
};
