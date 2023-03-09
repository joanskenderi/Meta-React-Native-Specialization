### 1. When you created a footer component for the Little Lemon app, which one of these statements should you have used to import the footer component into the App component.

- [ ] `import LittleLemonFooter from './App;`.
- [ ] `import { LittleLemonFooter } from './components/LittleLemonFooter';`.
- [x] `import LittleLemonFooter from './components/LittleLemonFooter';`.

### 2. Which of the following core components should you have used to create the footer component for Little Lemon?

- [x] `Text`.
- [ ] `Image`.
- [x] `View`.

### 3. Which one of the following code snippets contains the correct code for representing the Little Lemon footer component?

- [ ]

```
export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#f4ce14',
        marginBottom: 10,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
      }}>
        All rights reserved by Little Lemon, 2022{' '}
    </View>
  );
}
```

- [x]

```
export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#f4ce14',
        marginBottom: 10,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
```
