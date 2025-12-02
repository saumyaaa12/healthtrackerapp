// components/MoodPicker.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MoodPicker({ mood, setMood }: any) {
  const moods = [
    { id: '5', emoji: '🤩' },
    { id: '4', emoji: '😊' },
    { id: '3', emoji: '😐' },
    { id: '2', emoji: '😔' },
    { id: '1', emoji: '😢' },
  ];

  return (
    <View style={{ marginTop: 12 }}>
      <Text style={{ color: '#e9dff0', fontWeight: '600', marginBottom: 8 }}>How are you feeling?</Text>
      <View style={styles.row}>
        {moods.map(m => (
          <TouchableOpacity key={m.id} onPress={() => setMood(m.emoji)} style={[styles.mood, mood === m.emoji && styles.selected]}>
            <Text style={{ fontSize: 22 }}>{m.emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  mood: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.03)',
    width: 56,
    alignItems: 'center'
  },
  selected: { backgroundColor: 'rgba(255,93,162,0.15)', borderWidth: 1, borderColor: '#ff5da2' }
});
