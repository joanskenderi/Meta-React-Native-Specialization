### 1. Which of the following are core components in React Native?

- [x] Text.
- [x] View.
- [x] TextInput.
- [ ] Maps.

### 2. React Native uses component-based architecture, and code is reused between components.

- [x] True.
- [ ] False.

### 3. Which of the following make up React Native components?

- [x] Core Components.
- [x] Community Components.
- [ ] Utility Components.
- [x] Your Custom Native Components.

### 4. Custom Native components are written in the following languages.

- [ ] React.
- [x] Swift.
- [x] Kotlin.
- [ ] JavaScript.

### 5. Study the code below and choose the correct output that you will expect to see on the emulator.

```
import React from 'react';
import { Text, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  );
}

export default Cafe;
```

- [ ] Welcome!
- [ ] Welcome!
      I am also a cat!
- [ ] `Error: cannot render the same component three times.`.
- [x] Welcome!
      I am also a cat!
      I am also a cat!
      I am also a cat!
