import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ProgressCard({
  title,
  value,
  goal,
  unit,
  onIncrement,
}: {
  title: string;
  value: number;
  goal: number;
  unit: string;
  onIncrement: () => void;
}) {
  const percent = Math.min((value / goal) * 100, 100);

  return (
    <View
      style={{
        backgroundColor: '#20122b',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
      }}
    >
      <Text style={{ color: '#f8eaf6', fontWeight: '700', fontSize: 16 }}>{title}</Text>
      <Text style={{ color: '#ffd086', marginVertical: 4 }}>
        {value} / {goal} {unit} ({Math.round(percent)}%)
      </Text>
      <TouchableOpacity
        onPress={onIncrement}
        style={{
          backgroundColor: '#ffd086',
          padding: 6,
          borderRadius: 6,
          alignSelf: 'flex-start',
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
