import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';
const TextLink = ({ links, children, textStyle = style.defaultTextStyle, textLinkStyle = style.defaultLinkTextStyle, pressingLinkStyle = style.defaultPressingLinkStyle, }) => {
    const [isPressing, setIsPressing] = useState();
    const parseOptions = links.map(link => {
        return {
            pattern: new RegExp(link.text),
            style: [
                textLinkStyle,
                (isPressing === null || isPressing === void 0 ? void 0 : isPressing.text) === link.text && pressingLinkStyle,
            ],
            onPress: () => { var _a; return (_a = link.onPress) === null || _a === void 0 ? void 0 : _a.call(link); },
            onPressIn: () => setIsPressing(link),
            onPressOut: () => setIsPressing(undefined),
        };
    });
    return (<ParsedText parse={parseOptions} style={textStyle}>
      {children}
    </ParsedText>);
};
const style = StyleSheet.create({
    defaultTextStyle: {
        color: 'black',
    },
    defaultLinkTextStyle: {
        color: 'blue',
    },
    defaultPressingLinkStyle: {
        color: 'red',
    },
});
export default TextLink;
