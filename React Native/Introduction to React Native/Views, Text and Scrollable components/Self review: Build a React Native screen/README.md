### 1. Which one of the following code snippets represents the correct parent view component for wrapping the Welcome screen?

- [ ] `<View style={{ height: 500 }}>`.
- [x] `<View style={{ flex: 1 }}>`.
- [ ] `<View>`.

### 2. Which of the following core components should you have used to create the Welcome screen for Little Lemon?

- [x] `Text`.
- [ ] `Image`.
- [x] `View`.

### 3. Which one of the following code snippets correctly represents the Little Lemon app’s Welcome screen, as created in the previous exercise?

- [x]

```
export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would   love
        to hear your experience with us!
      </Text>
    </View>
  );
}
}
```

- [ ]

```
export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
        }}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would   love
        to hear your experience with us!
      </Text>
    </View>
  );
}
```
