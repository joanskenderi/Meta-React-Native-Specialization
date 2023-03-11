### 1. In this exercise, which one of the following should you have provided as a key to the `FlatList` component?

- [ ] `item.key`.
- [ ] `index`.
- [x] `item.id`.

### 2. Which styling properties should you have used to style the view containing each menu item and its corresponding price to display on each row?

- [x] `justifyContent: 'space-between'`.
- [ ] `flexDirection: 'column'`.
- [x] `flexDirection: 'row'`.
- [ ] `justifyContent: 'center'`.

### 3. Which of these code snippets represents the final code for the Item component that renders each item on the menu with its price?

- [ ]

```
const Item = ({ name, price }) => (
  <Text style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </Text>
);
```

- [x]

```
const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);
```
