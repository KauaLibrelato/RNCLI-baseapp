import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ToastManager from 'toastify-react-native';
import {ThemeProvider} from './context/Theme/ThemeProvider';
import Routes from './routes';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ThemeProvider>
            <ToastManager />
            <Routes />
          </ThemeProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
