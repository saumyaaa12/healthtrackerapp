// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#ffd086', tabBarInactiveTintColor: '#8b7e91', tabBarStyle: { backgroundColor: '#120917', borderTopColor: 'rgba(255,255,255,0.03)' } }}>
      <Tabs.Screen name="dashboard" options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} /> }} />
      <Tabs.Screen name="track" options={{ title: 'Track', tabBarIcon: ({ color }) => <FontAwesome name="heartbeat" size={20} color={color} /> }} />
      <Tabs.Screen name="history" options={{ title: 'History', tabBarIcon: ({ color }) => <FontAwesome name="history" size={20} color={color} /> }} />
    </Tabs>
  );
}
