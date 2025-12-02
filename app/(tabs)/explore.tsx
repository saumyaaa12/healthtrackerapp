import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const games = [
  "EMOJI",
  "SCRAMBLE",
  "QUIZ",
  "TRUEFALSE",
  "MEMORY",
  "FUN"
];

export default function Explore() {
  const [currentGame, setCurrentGame] = useState("");
  const [answer, setAnswer] = useState("");
  const [msg, setMsg] = useState("");

  // Reward System
  const [points, setPoints] = useState(0);
  const [badge, setBadge] = useState("Beginner 🌱");

  useEffect(() => {
    const today = new Date().getDate();
    const todayGame = games[today % games.length];
    setCurrentGame(todayGame);
  }, []);

  useEffect(() => {
    if (points >= 50) setBadge("Champion 🏆");
    else if (points >= 30) setBadge("Pro Player 🔥");
    else if (points >= 15) setBadge("Explorer 🚀");
    else setBadge("Beginner 🌱");
  }, [points]);

  const nextGame = () => {
    const random = games[Math.floor(Math.random() * games.length)];
    setCurrentGame(random);
    setAnswer("");
    setMsg("");
  };

  const rewardUser = () => {
    setPoints(points + 5);
  };

  return (
    <ScrollView style={styles.container}>

      {/* REWARDS PANEL */}
      <View style={styles.rewardBox}>
        <Text style={styles.title}>🎁 Your Rewards</Text>
        <Text style={styles.rewardText}>Points: {points}</Text>
        <Text style={styles.rewardText}>Badge: {badge}</Text>
      </View>

      {/* GAMES PANEL */}
      <View style={styles.gameBox}>
        <Text style={styles.title}>🎮 Daily Mini Games</Text>

        {/* EMOJI GAME */}
        {currentGame === "EMOJI" && (
          <>
            <Text style={styles.gameQ}>Guess the food emoji:</Text>
            <Text style={styles.emoji}>🍎🍌🍓</Text>

            <TextInput
              value={answer}
              onChangeText={setAnswer}
              placeholder="Type: fruits"
              style={styles.input}
            />

            <Button
              title="Submit"
              onPress={() => {
                if (answer.toLowerCase().includes("fruit")) {
                  setMsg("✅ Correct! +5 points awarded!");
                  rewardUser();
                } else {
                  setMsg("❌ Try again!");
                }
              }}
            />
          </>
        )}

        {/* SCRAMBLE GAME */}
        {currentGame === "SCRAMBLE" && (
          <>
            <Text style={styles.gameQ}>Unscramble this:</Text>
            <Text style={styles.big}>L E P P A</Text>

            <TextInput
              value={answer}
              onChangeText={setAnswer}
              placeholder="Your answer..."
              style={styles.input}
            />

            <Button
              title="Check"
              onPress={() => {
                if (answer.toLowerCase() === "apple") {
                  setMsg("🍏 Correct! +5 points");
                  rewardUser();
                } else {
                  setMsg("❌ Wrong!");
                }
              }}
            />
          </>
        )}

        {/* QUIZ */}
        {currentGame === "QUIZ" && (
          <>
            <Text style={styles.gameQ}>
              Which vitamin do we get from the Sun?
            </Text>

            <TouchableOpacity
              style={styles.option}
              onPress={() => setMsg("❌ Wrong")}
            >
              <Text>A) Vitamin A</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                setMsg("✅ Correct +5 points");
                rewardUser();
              }}
            >
              <Text>B) Vitamin D</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => setMsg("❌ Wrong")}
            >
              <Text>C) Vitamin C</Text>
            </TouchableOpacity>
          </>
        )}

        {/* TRUE / FALSE */}
        {currentGame === "TRUEFALSE" && (
          <>
            <Text style={styles.gameQ}>
              Eating fruits daily is good for health?
            </Text>

            <Button
              title="True"
              onPress={() => {
                setMsg("✅ Correct +5 points");
                rewardUser();
              }}
            />
            <Button
              title="False"
              onPress={() => setMsg("❌ Wrong")}
            />
          </>
        )}

        {/* MEMORY GAME */}
        {currentGame === "MEMORY" && (
          <>
            <Text style={styles.gameQ}>🧠 Memory Challenge</Text>
            <Text>Remember these:</Text>
            <Text style={styles.big}>🌞 🌻 🍉</Text>

            <TextInput
              value={answer}
              onChangeText={setAnswer}
              placeholder="Type emojis in order..."
              style={styles.input}
            />

            <Button
              title="Check Memory"
              onPress={() => {
                if (answer.includes("🌞") && answer.includes("🌻")) {
                  setMsg("Amazing memory! +5");
                  rewardUser();
                } else {
                  setMsg("Oops, try again!");
                }
              }}
            />
          </>
        )}

        {/* FUN TASK */}
        {currentGame === "FUN" && (
          <>
            <Text style={styles.gameQ}>🎯 Fun Activity</Text>
            <Text>
              Do 10 jumping jacks OR compliment yourself in mirror 😄
            </Text>
            <Button
              title="Done!"
              onPress={() => {
                setMsg("🔥 You earned +5 points!");
                rewardUser();
              }}
            />
          </>
        )}

        <Text style={styles.msg}>{msg}</Text>

        <Button title="🎲 Play Another Game" onPress={nextGame} />
      </View>

      {/* MANUAL GAME PICK */}
      <View style={styles.choiceBox}>
        <Text style={styles.title}>🎯 Choose Your Game</Text>
        {games.map((g) => (
          <TouchableOpacity
            key={g}
            style={styles.gameBtn}
            onPress={() => {
              setCurrentGame(g);
              setMsg("");
              setAnswer("");
            }}
          >
            <Text style={styles.btnTxt}>{g}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeaf3"
  },

  rewardBox: {
    backgroundColor: "#fff7cc",
    margin: 15,
    padding: 15,
    borderRadius: 20
  },

  rewardText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 3
  },

  gameBox: {
    backgroundColor: "#fff0f6",
    margin: 15,
    padding: 20,
    borderRadius: 20
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#ff4f81"
  },

  gameQ: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10
  },

  emoji: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 10
  },

  big: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 10
  },

  input: {
    borderWidth: 1,
    borderColor: "#ff85a1",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    textAlign: "center",
    marginVertical: 8
  },

  msg: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10
  },

  option: {
    backgroundColor: "#ffdce5",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center"
  },

  choiceBox: {
    backgroundColor: "#e6f7ff",
    margin: 15,
    padding: 15,
    borderRadius: 20
  },

  gameBtn: {
    backgroundColor: "#b3e5ff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    alignItems: "center"
  },

  btnTxt: {
    fontWeight: "bold",
    fontSize: 16
  }
});
