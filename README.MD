# TextLink

When you need to insert a link inside a text in React Native, you might notice that the links have a different positioning, they are usually around 5 pixels under the line. This happens because the link is actually inside a View (wrapped in a Pressable/TouchableOpacity), so the positioning of the elements is different between a Text and a View.

This package aims to easily solve this while still looking clean. Using this package you will be able to provide a different Style while the link is being pressed.

# Usage

First install:

    npm i react-native-text-link
Then import: 

    import  TextLink  from  'react-native-text-link';
Then use:
```js
<TextLink links={[
	{
		text: 'Terms & Conditions',
		onPress: () =>  console.log('link to terms'),
	},
	{
		text: 'Privacy Policy',
		onPress: () =>  console.log('link to privacy'),
	},
]}>
Please read our Terms & Conditions and our Privacy Policy.
</TextLink>
```

## Features

|props|type|use|
|--|--| --|
| textStyle | StyleProp<TextStyle> |default style for text
| textLinkStyle| StyleProp<TextStyle> |	style for the links
| pressingLinkStyle|StyleProp<TextStyle> |style for the links while they are being pressed
| links | [{ text: string, onPress: () => void }]	| strings that will act as links and the action they will trigger
|children| string |the whole text in which the links will be found


## License and Constributions

MIT License and thanks to react-native-parsed-text
