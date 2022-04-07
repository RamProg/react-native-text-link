/// <reference types="react" />
import { StyleProp, TextStyle } from 'react-native';
declare type LinkType = {
    text: string;
    onPress: () => void;
};
declare type TextLinkPropsType = {
    links: LinkType[];
    children: string;
    textStyle?: StyleProp<TextStyle>;
    textLinkStyle?: StyleProp<TextStyle>;
    pressingLinkStyle?: StyleProp<TextStyle>;
};
declare const TextLink: ({ links, children, textStyle, textLinkStyle, pressingLinkStyle, }: TextLinkPropsType) => JSX.Element;
export default TextLink;
