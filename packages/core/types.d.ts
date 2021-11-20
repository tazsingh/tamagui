// Generated by dts-bundle-generator v5.9.0

/// <reference types="node" />
/// <reference types="prop-types" />
/// <reference types="react" />
/// <reference types="react-native" />
/// <reference types="scheduler" />

export declare class Variable {
	name: string;
	val: string | number;
	variable: string | number;
	constructor({ val, name }: VariableIn);
}
export declare type VariableIn = {
	val: string | number;
	name: string;
};
export declare const createVariable: (props: VariableIn) => Variable;
export declare function isVariable(v: Variable | any): v is Variable;
export declare type ThemeProviderProps = {
	themes: any;
	defaultTheme: string;
	disableRootThemeClass?: boolean;
	children?: any;
};
export declare const GET_DEFAULT_THEME = "___TGUI";
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export declare type TamaguiStylesBase = Omit<ViewStyle, "display" | "backfaceVisibility" | "elevation"> & TransformStyleProps & {
	cursor?: string;
	contain?: "none" | "strict" | "content" | "size" | "layout" | "paint" | string;
	display?: "inherit" | "none" | "inline" | "block" | "contents" | "flex" | "inline-flex";
};
export declare type GenericTokens = CreateTokens;
export declare type GenericThemes = {
	[key: string]: {
		bg: string | Variable;
		bg2: string | Variable;
		bg3: string | Variable;
		bg4: string | Variable;
		color: string | Variable;
		color2: string | Variable;
		color3: string | Variable;
		color4: string | Variable;
		borderColor: string | Variable;
		borderColor2: string | Variable;
		shadowColor: string | Variable;
		shadowColor2: string | Variable;
	};
};
export declare type GenericShorthands = {};
export declare type GenericMedia<K extends string = string> = {
	[key in K]: {
		[key: string]: number | string;
	};
};
export interface TamaguiCustomConfig {
}
export interface TamaguiConfig extends Omit<GenericTamaguiConfig, keyof TamaguiCustomConfig>, TamaguiCustomConfig {
}
export declare type CreateTamaguiConfig<A extends GenericTokens, B extends GenericThemes, C extends GenericShorthands, D extends GenericMedia> = Partial<Pick<ThemeProviderProps, "defaultTheme" | "disableRootThemeClass">> & {
	tokens: A;
	themes: B;
	shorthands: C;
	media: D;
};
export declare type GenericTamaguiConfig = CreateTamaguiConfig<GenericTokens, GenericThemes, GenericShorthands, GenericMedia>;
export declare type ThemeObject = TamaguiConfig["themes"][keyof TamaguiConfig["themes"]];
export declare type Tokens = TamaguiConfig["tokens"];
export declare type Shorthands = TamaguiConfig["shorthands"];
export declare type Media = TamaguiConfig["media"];
export declare type Themes = TamaguiConfig["themes"];
export declare type ThemeName = keyof Themes extends `${infer Prefix}-light` ? Prefix | keyof Themes : keyof Themes;
export declare type ThemeKeys = keyof ThemeObject;
export declare type ThemeKeyVariables = `$${ThemeKeys}`;
export declare type TamaguiInternalConfig<A extends GenericTokens = GenericTokens, B extends GenericThemes = GenericThemes, C extends GenericShorthands = GenericShorthands, D extends GenericMedia = GenericMedia> = CreateTamaguiConfig<A, B, C, D> & {
	Provider: (props: TamaguiProviderProps) => any;
	themeParsed: {
		[key: string]: Variable;
	};
	tokensParsed: CreateTokens<Variable>;
	themeConfig: any;
	getCSS: () => string;
};
export declare type UnionableString = string & {};
export declare type UnionableNumber = number & {};
export declare type PropTypes<A extends StaticComponent> = A extends React.FunctionComponent<infer Props> ? Props : unknown;
export interface CreateTokens<Val extends number | string | Variable = number | string | Variable, TextKeys extends string = string> {
	font: {
		[key in TextKeys]: Val;
	};
	fontSize: {
		[key in TextKeys]: Val;
	};
	lineHeight: {
		[key in TextKeys]: Val;
	};
	letterSpace: {
		[key in TextKeys]: Val;
	};
	color: {
		[key: string]: Val;
	};
	space: {
		[key: string]: Val;
	};
	size: {
		[key: string]: Val;
	};
	radius: {
		[key: string]: Val;
	};
	zIndex: {
		[key: string]: Val;
	};
}
export declare type MediaKeys = keyof Media;
export declare type MediaQueryObject = {
	[key: string]: string | number | string;
};
export declare type MediaQueryState = {
	[key in string]: boolean;
};
export declare type MediaQueryKey = keyof Media;
export declare type MediaProps<A> = {
	[key in `$${MediaQueryKey}`]?: A;
};
export declare type MediaQueries = {
	[key in MediaQueryKey]: MediaQueryObject;
};
export declare type ConfigureMediaQueryOptions = {
	queries?: MediaQueries;
	defaultActive?: MediaQueryKey[];
};
export declare type TransformStyleProps = {
	x?: number;
	y?: number;
	perspective?: number;
	scale?: number;
	scaleX?: number;
	scaleY?: number;
	skewX?: string;
	skewY?: string;
	matrix?: number[];
	rotate?: string;
	rotateY?: string;
	rotateX?: string;
	rotateZ?: string;
};
export declare type ShortKeysView = keyof Shorthands;
export declare type ThemeValue<A> = Omit<A, string> | UnionableString | Variable;
export declare type WithThemeValues<T extends object> = {
	[K in keyof T]: ThemeValue<T[K]> | (K extends ColorableKeys ? ThemeKeyVariables : K extends SizeKeys ? `$${keyof Tokens["size"]}` : K extends FontKeys ? `$${keyof Tokens["font"]}` : K extends FontSizeKeys ? `$${keyof Tokens["fontSize"]}` : K extends SpaceKeys ? `$${keyof Tokens["space"]}` : K extends ColorKeys ? `$${keyof Tokens["color"]}` : K extends ZIndexKeys ? `$${keyof Tokens["zIndex"]}` : K extends LineHeightKeys ? `$${keyof Tokens["lineHeight"]}` : {});
};
export declare type TamaguiThemedStackStyleProps = WithThemeValues<TamaguiStylesBase>;
export declare type ShorthandStyleProps = {
	[key in ShortKeysView]?: Shorthands[ShortKeysView] extends keyof TamaguiThemedStackStyleProps ? TamaguiThemedStackStyleProps[Shorthands[ShortKeysView]] | null : {};
};
export declare type StackStylePropsBase = TamaguiThemedStackStyleProps & ShorthandStyleProps;
export declare type StackStyleProps = StackStylePropsBase & {
	hoverStyle?: StackStylePropsBase | null;
	pressStyle?: StackStylePropsBase | null;
};
export declare type StackProps = Omit<RNWInternalProps, "children"> & MediaProps<StackStyleProps> & StackStyleProps & Omit<ViewProps, "display" | "children"> & {
	tag?: string;
	ref?: RefObject<View | HTMLElement> | ((node: View | HTMLElement) => any);
	animated?: boolean;
	fullscreen?: boolean;
	children?: any | any[];
	onHoverIn?: (e: MouseEvent) => any;
	onHoverOut?: (e: MouseEvent) => any;
	onPress?: (e: GestureResponderEvent) => any;
	onPressIn?: (e: GestureResponderEvent) => any;
	onPressOut?: (e: GestureResponderEvent) => any;
	onMouseEnter?: (e: GestureResponderEvent) => any;
	onMouseLeave?: (e: GestureResponderEvent) => any;
	space?: Tokens["space"][keyof Tokens["space"]] | boolean | string | number;
	pointerEvents?: string;
	userSelect?: string;
	className?: string;
	disabled?: boolean;
};
export declare type EnhancedTextStyleProps = WithThemeValues<Omit<TextStyle, "display" | "backfaceVisibility"> & TransformStyleProps>;
export declare type TextStylePropsBase = EnhancedTextStyleProps;
export declare type TextStyleProps<S = TextStylePropsBase> = S & {
	hoverStyle?: S | null;
	pressStyle?: S | null;
};
export declare type TextProps<StyleProps = TextStyleProps> = Omit<ReactTextProps, "style"> & MediaProps<StyleProps> & StyleProps & {
	tag?: string;
	display?: TextStyle["display"] | "inherit";
	ellipse?: boolean;
	selectable?: boolean;
	children?: any;
	className?: string;
	pointerEvents?: string;
	cursor?: string;
	userSelect?: string;
	textDecorationDistance?: number;
};
export declare type TamaguiProviderProps = Partial<Omit<ThemeProviderProps, "children">> & {
	initialWindowMetrics?: any;
	fallback?: any;
	children?: any;
};
export declare type RNWInternalProps = {
	accessibilityState?: {
		busy?: boolean;
		checked?: boolean | "mixed";
		disabled?: boolean;
		expanded?: boolean;
		grabbed?: boolean;
		hidden?: boolean;
		invalid?: boolean;
		modal?: boolean;
		pressed?: boolean;
		readonly?: boolean;
		required?: boolean;
		selected?: boolean;
	};
	accessibilityValue?: {
		max?: number;
		min?: number;
		now?: number;
		text?: string;
	};
	children?: any;
	focusable?: boolean;
	nativeID?: string;
	onBlur?: (e: any) => void;
	onClick?: (e: any) => void;
	onClickCapture?: (e: any) => void;
	onContextMenu?: (e: any) => void;
	onFocus?: (e: any) => void;
	onKeyDown?: (e: any) => void;
	onKeyUp?: (e: any) => void;
	onMoveShouldSetResponder?: (e: any) => boolean;
	onMoveShouldSetResponderCapture?: (e: any) => boolean;
	onResponderEnd?: (e: any) => void;
	onResponderGrant?: (e: any) => void;
	onResponderMove?: (e: any) => void;
	onResponderReject?: (e: any) => void;
	onResponderRelease?: (e: any) => void;
	onResponderStart?: (e: any) => void;
	onResponderTerminate?: (e: any) => void;
	onResponderTerminationRequest?: (e: any) => boolean;
	onScrollShouldSetResponder?: (e: any) => boolean;
	onScrollShouldSetResponderCapture?: (e: any) => boolean;
	onSelectionChangeShouldSetResponder?: (e: any) => boolean;
	onSelectionChangeShouldSetResponderCapture?: (e: any) => boolean;
	onStartShouldSetResponder?: (e: any) => boolean;
	onStartShouldSetResponderCapture?: (e: any) => boolean;
	pointerEvents?: "box-none" | "none" | "box-only" | "auto";
	testID?: string;
	dataSet?: Object;
	onMouseDown?: (e: any) => void;
	onMouseEnter?: (e: any) => void;
	onMouseLeave?: (e: any) => void;
	onMouseMove?: (e: any) => void;
	onMouseOver?: (e: any) => void;
	onMouseOut?: (e: any) => void;
	onMouseUp?: (e: any) => void;
	onScroll?: (e: any) => void;
	onTouchCancel?: (e: any) => void;
	onTouchCancelCapture?: (e: any) => void;
	onTouchEnd?: (e: any) => void;
	onTouchEndCapture?: (e: any) => void;
	onTouchMove?: (e: any) => void;
	onTouchMoveCapture?: (e: any) => void;
	onTouchStart?: (e: any) => void;
	onTouchStartCapture?: (e: any) => void;
	onWheel?: (e: any) => void;
	href?: string;
	hrefAttrs?: {
		download?: boolean;
		rel?: string;
		target?: string;
	};
};
export declare type StaticComponent<Props = any, VariantProps = any, StaticConfParsed = StaticConfigParsed, ParentVariantProps = any> = React.FunctionComponent<Props> & {
	staticConfig: StaticConfParsed;
	variantProps?: VariantProps;
	extractable: <X>(a: X) => X;
};
export declare type StaticConfigParsed = StaticConfig & {
	parsed: true;
	propMapper: (key: string, value: any, theme: ThemeObject, props: any) => undefined | boolean | {
		[key: string]: any;
	};
	variantsParsed?: {
		[key: string]: {
			[key: string]: any;
		};
	};
};
export declare type StaticConfig = {
	Component?: StaticComponent;
	variants?: {
		[key: string]: {
			[key: string]: ((a: any, b: any) => any) | {
				[key: string]: any;
			};
		};
	};
	neverFlatten?: boolean | "jsx";
	isText?: boolean;
	validStyles?: {
		[key: string]: boolean;
	};
	validPropsExtra?: {
		[key: string]: any;
	};
	defaultProps?: any;
	deoptProps?: Set<string>;
	ensureOverriddenProp?: {
		[key: string]: boolean;
	};
};
export declare type ColorableKeys = "color" | "backgroundColor" | "borderColor" | "borderTopColor" | "borderBottomColor" | "borderLeftColor" | "borderRightColor" | "shadowColor";
export declare type SizeKeys = "width" | "height" | "minWidth" | "minHeight" | "maxWidth" | "maxHeight";
export declare type FontKeys = "fontFamily";
export declare type FontSizeKeys = "fontSize";
export declare type LineHeightKeys = "lineHeight";
export declare type ZIndexKeys = "zIndex";
export declare type ColorKeys = "color" | "backgroundColor" | "borderColor" | "borderBottomColor" | "borderTopColor" | "borderLeftColor" | "borderRightColor";
export declare type SpaceKeys = "padding" | "paddingHorizontal" | "paddingVertical" | "paddingLeft" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingEnd" | "paddingStart" | "margin" | "marginHorizontal" | "marginVertical" | "marginLeft" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginEnd" | "marginStart" | "x" | "y" | "scale" | "scaleX" | "scaleY" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStartRadius" | "borderBottomEndRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderLeftWidth" | "borderRadius" | "borderRightWidth" | "borderTopEndRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderEndWidth" | "borderStartWidth" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "left" | "top" | "right" | "bottom" | "shadowOffset";
export declare const mouseUps: Set<Function>;
export declare type DefaultProps = {};
export declare function createComponent<A extends Object = DefaultProps>(configIn: Partial<StaticConfig> | StaticConfigParsed): StaticComponent<A, void, StaticConfigParsed, any>;
export declare const Spacer: StaticComponent<{
	size?: number | undefined;
	flex?: number | boolean | undefined;
}, void, StaticConfigParsed, any>;
export declare function spacedChildren({ children, space, flexDirection, }: {
	children: any;
	space?: any;
	flexDirection?: ViewStyle["flexDirection"];
}): any;
export declare function createShorthands<A extends Record<string, string>>(shorthands: A): A;
export declare const createTheme: <Theme extends {
	[key: string]: string | Variable;
}>(theme: Theme) => {
	[key in keyof Theme]: Variable;
};
export declare type CreateTamaguiProps = TamaguiProviderProps & Omit<GenericTamaguiConfig, "themes"> & {
	themes: {
		[key: string]: {
			[key: string]: string | number | Variable;
		};
	};
	mediaQueryDefaultActive?: MediaQueryKey[];
};
export declare const getHasConfigured: () => boolean;
export declare const getTamaguiConfig: () => TamaguiInternalConfig<CreateTokens, {
	[key: string]: {
		bg: string | Variable;
		bg2: string | Variable;
		bg3: string | Variable;
		bg4: string | Variable;
		color: string | Variable;
		color2: string | Variable;
		color3: string | Variable;
		color4: string | Variable;
		borderColor: string | Variable;
		borderColor2: string | Variable;
		shadowColor: string | Variable;
		shadowColor2: string | Variable;
	};
}, {}, {
	[x: string]: {
		[key: string]: string | number;
	};
}>;
export declare type ConfigListener = (conf: TamaguiInternalConfig) => void;
export declare const onConfiguredOnce: (cb: ConfigListener) => void;
export declare function createTamagui<Conf extends CreateTamaguiProps>(config: Conf): Conf extends CreateTamaguiConfig<infer A, infer B, infer C, infer D> ? TamaguiInternalConfig<A, B, C, D> : unknown;
export declare function getThemeParentClassName(themeName?: string | null): string;
export declare function createTokens<T extends CreateTokens>(tokens: T): MakeTokens<T>;
export declare type MakeTokens<T> = T extends {
	font: infer A;
	fontSize: infer B;
	lineHeight: infer C;
	letterSpace: infer D;
	color: infer E;
	space: infer F;
	size: infer G;
	radius: infer H;
	zIndex: infer J;
} ? {
	font: {
		[key in keyof A]: Variable;
	};
	fontSize: {
		[key in keyof B]: Variable;
	};
	lineHeight: {
		[key in keyof C]: Variable;
	};
	letterSpace: {
		[key in keyof D]: Variable;
	};
	color: {
		[key in keyof E]: Variable;
	};
	space: {
		[key in keyof F]: Variable;
	};
	size: {
		[key in keyof G]: Variable;
	};
	radius: {
		[key in keyof H]: Variable;
	};
	zIndex: {
		[key in keyof J]: Variable;
	};
} : never;
export declare type GetProps<A> = A extends StaticComponent<infer Props> ? Props : A extends React.Component<infer Props> ? Props : {};
export declare function styled<A extends StaticComponent | React.Component<any>, StyledVariants extends void | {
	[key: string]: {
		[key: string]: Partial<GetProps<A>> | ((val: any, config: {
			tokens: TamaguiConfig["tokens"];
			theme: Themes extends {
				[key: string]: infer B;
			} ? B : unknown;
		}) => Partial<GetProps<A>>);
	};
}>(Component: A, options?: GetProps<A> & {
	variants?: StyledVariants;
}): StaticComponent<GetProps<A> & (StyledVariants extends void ? {} : {
	[Key in keyof StyledVariants]?: (keyof StyledVariants[Key] extends `...${infer VariantSpread}` ? VariantSpread extends keyof CreateTokens ? keyof CreateTokens[VariantSpread] extends string | number ? `$${keyof CreateTokens[VariantSpread]}` : unknown : unknown : keyof StyledVariants[Key] extends "true" ? boolean : keyof StyledVariants[Key]) | undefined;
}), any, StaticConfigParsed, any>;
export declare const pseudos: {
	focusStyle: {
		name: string;
		priority: number;
	};
	pressStyle: {
		name: string;
		priority: number;
	};
	hoverStyle: {
		name: string;
		priority: number;
	};
};
export declare const stackDefaultStyles: {
	display?: string | undefined;
	flexBasis?: string | undefined;
	boxSizing?: string | undefined;
	alignItems: string;
	flexShrink: number;
};
export declare const isWeb: boolean;
export declare const isSSR: boolean;
export declare const useIsomorphicLayoutEffect: typeof useEffect;
export declare const isChrome: boolean;
export declare const supportsTouchWeb: boolean;
export declare const isTouchDevice: boolean;
export declare const isWebIOS: boolean;
export declare const rnw: Record<string, any>;
export declare type StyleObject = {
	property: string;
	value: string;
	className: string;
	identifier: string;
	rules: string[];
};
export declare function getStylesAtomic(style: any, avoidCollection?: boolean): StyleObject[];
export declare const matchMedia: any;
export declare type ThemeableProps = {
	theme?: string | null;
	themeInverse?: boolean;
};
export declare const themeable: ThemeableHOC;
export interface ThemeableHOC {
	<R extends ReactElement<any, any> | null, P extends ThemeableProps = {}>(component: (props: P) => R): (props: P) => R;
}
export declare function useConstant<T>(fn: () => T): T;
export declare function useForceUpdate(): Function;
export declare const mediaState: {
	[key in keyof MediaQueryState]: boolean;
};
export declare const addMediaQueryListener: (key: string, cb: any) => void;
export declare const removeMediaQueryListener: (key: string, cb: any) => void;
export declare const mediaQueryConfig: MediaQueries;
export declare const getMedia: () => {
	[x: string]: boolean;
};
export declare const configureMedia: ({ queries, defaultActive, }?: ConfigureMediaQueryOptions) => void;
export declare const useMedia: () => {
	[x: string]: boolean;
};
export declare function mediaObjectToString(query: string | MediaQueryObject): string;
export declare const useThemeName: () => string;
export declare const useDefaultThemeName: () => string | number;
export declare const useTheme: () => {
	bg: string | Variable;
	bg2: string | Variable;
	bg3: string | Variable;
	bg4: string | Variable;
	color: string | Variable;
	color2: string | Variable;
	color3: string | Variable;
	color4: string | Variable;
	borderColor: string | Variable;
	borderColor2: string | Variable;
	shadowColor: string | Variable;
	shadowColor2: string | Variable;
};
export declare type AnimatableProps = Partial<Pick<StackProps, "backgroundColor" | "borderColor" | "opacity"> & PerpectiveTransform & RotateTransform & RotateXTransform & RotateYTransform & RotateZTransform & ScaleTransform & ScaleXTransform & ScaleYTransform & TranslateXTransform & TranslateYTransform & SkewXTransform & SkewYTransform>;
export declare type AnimatedStackProps = StackProps & {
	animateState?: "in" | "out";
	velocity?: number;
	animation?: {
		from: AnimatableProps;
		to: AnimatableProps;
	};
};
export declare const AnimatedStack: ({ animateState, animation, velocity, children, animated, ...props }: AnimatedStackProps) => JSX.Element;
export declare const Stack: StaticComponent;
export declare const Text: StaticComponent;
export declare type ThemeProps = {
	disableThemeClass?: boolean;
	name: ThemeName | null;
	children?: any;
};
export declare const Theme: (props: ThemeProps) => any;
export declare type StringRecord = {
	[key: string]: string;
};
export declare function setThemeInversions(next: StringRecord): void;
export declare const ThemeInverse: (props: {
	children: any;
}) => JSX.Element;
export declare const TextAncestorContext: any;
export declare const TextAncestorProvider: (props: any) => any;

export {};
