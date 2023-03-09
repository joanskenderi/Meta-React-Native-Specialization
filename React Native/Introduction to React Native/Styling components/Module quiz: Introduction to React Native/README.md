### 1. Of the following, what are some benefits of React Native?

- [x] Cost-effective.
- [x] Superior developer experience.
- [ ] Uses Swift and Kotlin.
- [x] Builds cross-platform native apps.

### 2. React Native components can be categorized into the following groups.

- [x] Your native custom components.
- [x] Core Components.
- [x] Community Components.
- [ ] None of the abovssse.

### 3. Which of the following statements are true about React Native?

- [x] React Native is cost-effective since there is no need for multiple teams. A single code base is shared between iOS and Android, and all code changes reflect upon both platforms.
- [ ] React Native has separate code bases for both iOS and Android. These have to be maintained by two different teams of developers. Because of this, React Native could be quite expensive.

### 4. If you are new to mobile development, what is the recommended way to set up React Native?

- [ ] Using React Native CLI.
- [x] Using Expo CLI.

### 5. With Expo, you can push the Over The Air (OTA) updates. This is because:

- [ ] Expo CLI is a paid service, and you can override app store requirements to push updates.
- [x] All of the code is written in JavaScript, without native code. This enables Expo to push updates OTA.

### 6. Which of the following is true about the `View` component? 

- [ ] A `View` component is a parent element that cannot have other `Views` inside it.
- [x] A `View` component can be nested inside other `Views` and can have as many children of any type.

### 7. Styles should not be abstracted away from the render function of a component, as this would make the code harder to read and understand.

- [ ] True.
- [x] False.

### 8. Which job title would be most applicable if you learned React Native and used it to develop applications?

- [ ] Android Developer.
- [ ] iOS Developer.
- [x] Cross-Platform Developer.

### 9. You are asked to write a readable and clean component. Which of the following code snippets better matches this description?

- [ ]

```
import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1, backgroundColor: '#f4ce14' }}>
      <Text style={{ padding: 40, fontSize: 30, color: 'black', textAlign: "center" }}>
        Little Lemon
        <Text style={{ fontWeight: 'bold' }}> Cafe</Text>
      </Text>
    </View>
  );
}
```

- [x]

```
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerText}>
        Little Lemon
        <Text style={headerStyles.innerText}> Cafe</Text>
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#f4ce14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  innerText: {
    fontWeight: 'bold',
  },
});
```

### 10. Which of the following code snippets are correct and will not throw any errors?

- [ ]

```
<ScrollView>
  Some text
</ScrollView>
```

- [x]

```
<ScrollView>
  <Text>Some text
    <Text> Some more text</Text>
  </Text>
</ScrollView>
```

- [x]

```
<ScrollView>
  <Text>
    Some text
  </Text>
</ScrollView>
```

- [ ]

```
<ScrollView>
  <Text>
    Some text
  </ScrollView>
</Text>
```
