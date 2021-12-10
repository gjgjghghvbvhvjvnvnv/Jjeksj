import { KeyboardReactInterface } from "../interfaces";
export declare const parseProps: (props: KeyboardReactInterface["options"]) => {
    theme: string;
    layout?: import("../interfaces").KeyboardLayoutObject | undefined;
    layoutName?: string | undefined;
    display?: {
        [button: string]: string;
    } | undefined;
    mergeDisplay?: boolean | undefined;
    buttonTheme?: import("../interfaces").KeyboardButtonTheme[] | undefined;
    buttonAttributes?: import("../interfaces").KeyboardButtonAttributes[] | undefined;
    debug?: boolean | undefined;
    newLineOnEnter?: boolean | undefined;
    tabCharOnTab?: boolean | undefined;
    inputName?: string | undefined;
    maxLength?: any;
    syncInstanceInputs?: boolean | undefined;
    physicalKeyboardHighlight?: boolean | undefined;
    physicalKeyboardHighlightPress?: boolean | undefined;
    physicalKeyboardHighlightPressUseClick?: boolean | undefined;
    physicalKeyboardHighlightTextColor?: string | undefined;
    physicalKeyboardHighlightBgColor?: string | undefined;
    preventMouseDownDefault?: boolean | undefined;
    preventMouseUpDefault?: boolean | undefined;
    stopMouseDownPropagation?: boolean | undefined;
    stopMouseUpPropagation?: boolean | undefined;
    useButtonTag?: boolean | undefined;
    disableCaretPositioning?: boolean | undefined;
    inputPattern?: any;
    useTouchEvents?: boolean | undefined;
    autoUseTouchEvents?: boolean | undefined;
    useMouseEvents?: boolean | undefined;
    disableButtonHold?: boolean | undefined;
    rtl?: boolean | undefined;
    enableLayoutCandidates?: boolean | undefined;
    layoutCandidates?: {
        [key: string]: string;
    } | undefined;
    excludeFromLayout?: {
        [key: string]: string[];
    } | undefined;
    layoutCandidatesPageSize?: number | undefined;
    onRender?: ((instance?: import("../interfaces").SimpleKeyboard | undefined) => void) | undefined;
    onInit?: ((instance?: import("../interfaces").SimpleKeyboard | undefined) => void) | undefined;
    onChange?: ((input: string, e?: MouseEvent | undefined) => any) | undefined;
    onChangeAll?: ((inputObj: import("../interfaces").KeyboardInput, e?: MouseEvent | undefined) => any) | undefined;
    keyboardRef?: ((r: any) => void) | undefined;
};
export declare const changedProps: (prevProps: KeyboardReactInterface["options"], props: KeyboardReactInterface["options"]) => string[];