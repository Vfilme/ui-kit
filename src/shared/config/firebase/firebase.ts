import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAAMPlOoFQy1gRHwHkyCT-M1RV7PNokxuc',
  authDomain: 'file-storage-2e784.firebaseapp.com',
  projectId: 'file-storage-2e784',
  storageBucket: 'file-storage-2e784.firebasestorage.app',
  messagingSenderId: '150079679733',
  appId: '1:150079679733:web:6a1e8eb4070c88e20de9bc',
  measurementId: 'G-WJ98XRL677',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
