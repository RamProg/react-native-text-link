import React, { useState } from 'react';
import { StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';
import ParsedText, { ParseShape } from 'react-native-parsed-text';

type LinkType = {
  text: string;
  onPress: () => void;
};

type TextLinkPropsType = TextProps & {
  links: LinkType[];
  children: string;
  textStyle?: StyleProp<TextStyle>;
  textLinkStyle?: StyleProp<TextStyle>;
  pressingLinkStyle?: StyleProp<TextStyle>;
};

const TextLink = ({
  links,
  children,
  textStyle = style.defaultTextStyle,
  textLinkStyle = style.defaultLinkTextStyle,
  pressingLinkStyle = style.defaultPressingLinkStyle,
  ...props
}: TextLinkPropsType) => {
  const [isPressing, setIsPressing] = useState<LinkType>();

  const parseOptions: ParseShape[] = links.map(link => {
    return {
      pattern: new RegExp(link.text),
      style: [
        textLinkStyle,
        isPressing?.text === link.text && pressingLinkStyle,
      ],
      onPress: () => link.onPress?.(),
      onPressIn: () => setIsPressing(link),
      onPressOut: () => setIsPressing(undefined),
    };
  });

  return (
    <ParsedText
      parse={parseOptions}
      style={textStyle}
      {...props}
    >
      {children}
    </ParsedText>
  );
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
