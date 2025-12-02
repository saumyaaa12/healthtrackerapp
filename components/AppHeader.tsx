import React from 'react';
import { Text, View } from 'react-native';

interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <View style={{ padding: 16, backgroundColor: '#20122b' }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}
