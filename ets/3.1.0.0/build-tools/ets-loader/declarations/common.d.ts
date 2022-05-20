/*
  * Copyright (c) 2021 Huawei Device Co., Ltd.
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

declare const Component: ClassDecorator;
declare const Entry: ClassDecorator;
declare const Observed: ClassDecorator;
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);
declare const State: PropertyDecorator;
declare const Prop: PropertyDecorator;
declare const Link: PropertyDecorator;
declare const ObjectLink: PropertyDecorator;
declare const Provide: PropertyDecorator & ((value: string) => PropertyDecorator);
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);
declare const StorageProp: (value: string) => PropertyDecorator;
declare const StorageLink: (value: string) => PropertyDecorator;
declare const Watch: (value: string) => PropertyDecorator;
declare const Builder: MethodDecorator;
declare const CustomDialog: ClassDecorator;
declare interface Configuration {
    readonly colorMode: string;
    readonly fontScale: number;
}
declare interface Rectangle {
    x?: Length;
    y?: Length;
    width?: Length;
    height?: Length;
}
declare const isSystemplugin: (...args: string[]) => any;
declare function $r(value: string, ...params: any[]): Resource;
declare function $rawfile(value: string): Resource;
interface AnimateToParam {
    duration?: number;
    tempo?: number;
    curve?: Curve | string;
    delay?: number;
    iterations?: number;
    playMode?: PlayMode;
    onFinish?: () => void;
}
interface PreviewParams {
    title?: string;
    width?: number;
    height?: number;
    language?: string;
    colorMode?: string;
    deviceType?: string;
    dpi?: number;
}
declare function animateTo(value: AnimateToParam, event: () => void): void;
declare function vp2px(value: number): number;
declare function px2vp(value: number): number;
declare function fp2px(value: number): number;
declare function px2fp(value: number): number;
declare function lpx2px(value: number): number;
declare function px2lpx(value: number): number;
interface EventTarget {
    area: Area;
}
interface BaseEvent {
    target: EventTarget;
    timestamp: number;
}
interface ClickEvent extends BaseEvent {
    screenX: number;
    screenY: number;
    x: number;
    y: number;
}
interface TouchObject {
    type: TouchType;
    id: number;
    screenX: number;
    screenY: number;
    x: number;
    y: number;
}
interface TouchEvent extends BaseEvent {
    type: TouchType;
    touches: TouchObject[];
    changedTouches: TouchObject[];
    stopPropagation?: () => void;
}
declare class PixelMap {
    release(): void;
}
interface DragEvent {
    getX(): number;
    getY(): number;
}
interface KeyEvent {
    type: KeyType;
    keyCode: number;
    keyText: string;
    keySource: KeySource;
    deviceId: number;
    metaKey: number;
    timestamp: number;
    stopPropagation?: () => void;
}
interface StateStyels {
    normal?: any;
    pressed?: any;
    disabled?: any;
    focused?: any;
    clicked?: any;
}
interface PopupOption {
    message: string;
    placementOnTop?: boolean;
    primaryButton?: {
        value: string;
        action: () => void;
    };
    secondaryButton?: {
        value: string;
        action: () => void;
    };
    onStateChange?: (event: {
        isVisible: boolean;
    }) => void;
}
interface CustomPopupOption {
    builder: CustomBuilder;
    placement?: Placement;
    maskColor?: Color | string | Resource | number;
    popupColor?: Color | string | Resource | number;
    enableArrow?: boolean;
    autoCancel?: boolean;
    onStateChange?: (event: {
        isVisible: boolean;
    }) => void;
}
declare class CommonMethod<T> {
    constructor();
    width(value: Length): T;
    height(value: Length): T;
    responseRegion(value: Array<Rectangle> | Rectangle): T;
    size(value: {
        width?: Length;
        height?: Length;
    }): T;
    constraintSize(value: {
        minWidth?: number | string | Resource;
        maxWidth?: number | string | Resource;
        minHeight?: number | string | Resource;
        maxHeight?: number | string | Resource;
    }): T;
    touchable(value: boolean): T;
    layoutWeight(value: number | string): T;
    padding(value: Padding | Length): T;
    margin(value: Margin | Length): T;
    backgroundColor(value: Color | number | string | Resource): T;
    backgroundImage(src: string, repeat?: ImageRepeat): T;
    backgroundImageSize(value: {
        width?: number | string;
        height?: number | string;
    } | ImageSize): T;
    backgroundImagePosition(value: {
        x?: number | string;
        y?: number | string;
    } | Alignment): T;
    opacity(value: number | Resource): T;
    border(value: {
        width?: number | string | Resource;
        color?: Color | number | string | Resource;
        radius?: number | string | Resource;
        style?: BorderStyle;
    }): T;
    borderStyle(value: BorderStyle): T;
    borderWidth(value: number | string | Resource): T;
    borderColor(value: Color | number | string | Resource): T;
    borderRadius(value: number | string | Resource): T;
    onClick(event: (event?: ClickEvent) => void): T;
    onTouch(event: (event?: TouchEvent) => void): T;
    onKeyEvent(event: (event?: KeyEvent) => void): T;
    animation(value: {
        duration?: number;
        tempo?: number;
        curve?: Curve | string;
        delay?: number;
        iterations?: number;
        playMode?: PlayMode;
        onFinish?: () => void;
    }): T;
    transition(value: {
        type?: TransitionType;
        opacity?: number;
        translate?: {
            x?: number | string;
            y?: number | string;
            z?: number | string;
        };
        scale?: {
            x?: number;
            y?: number;
            z?: number;
            centerX?: number | string;
            centerY?: number | string;
        };
        rotate?: {
            x?: number;
            y?: number;
            z?: number;
            centerX?: number | string;
            centerY?: number | string;
            angle: number | string;
        };
    }): T;
    gesture(gesture: GestureType, mask?: GestureMask): T;
    priorityGesture(gesture: GestureType, mask?: GestureMask): T;
    parallelGesture(gesture: GestureType, mask?: GestureMask): T;
    blur(value: number): T;
    brightness(value: number): T;
    contrast(value: number): T;
    grayscale(value: number): T;
    colorBlend(value: Color | string | Resource): T;
    saturate(value: number): T;
    sepia(value: number): T;
    invert(value: number): T;
    hueRotate(value: number | string): T;
    backdropBlur(value: number): T;
    translate(value: {
        x?: number | string;
        y?: number | string;
        z?: number | string;
    }): T;
    scale(value: {
        x?: number;
        y?: number;
        z?: number;
        centerX?: number | string;
        centerY?: number | string;
    }): T;
    gridSpan(value: number): T;
    gridOffset(value: number): T;
    rotate(value: {
        x?: number;
        y?: number;
        z?: number;
        centerX?: number | string;
        centerY?: number | string;
        angle: number | string;
    }): T;
    transform(value: object): T;
    onAppear(event: () => void): T;
    onDisAppear(event: () => void): T;
    onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;
    visibility(value: Visibility): T;
    flexGrow(value: number): T;
    flexShrink(value: number): T;
    flexBasis(value: number | string): T;
    alignSelf(value: ItemAlign): T;
    displayPriority(value: number): T;
    zIndex(value: number): T;
    sharedTransition(id: string, options?: {
        duration?: number;
        curve?: Curve | string;
        delay?: number;
        motionPath?: {
            path: string;
            from?: number;
            to?: number;
            rotatable?: boolean;
        };
        zIndex?: number;
        type?: SharedTransitionEffectType;
    }): T;
    direction(value: Direction): T;
    align(value: Alignment): T;
    position(value: {
        x?: number | string | Resource;
        y?: number | string | Resource;
    }): T;
    markAnchor(value: {
        x?: number | string | Resource;
        y?: number | string | Resource;
    }): T;
    offset(value: {
        x?: number | string | Resource;
        y?: number | string | Resource;
    }): T;
    enabled(value: boolean): T;
    useSizeType(value: {
        xs?: number | {
            span: number;
            offset: number;
        };
        sm?: number | {
            span: number;
            offset: number;
        };
        md?: number | {
            span: number;
            offset: number;
        };
        lg?: number | {
            span: number;
            offset: number;
        };
    }): T;
    aspectRatio(value: number): T;
    onDrag(event: (event?: DragEvent) => void): T;
    onDragEnter(event: (event?: DragEvent) => void): T;
    onDragMove(event: (event?: DragEvent) => void): T;
    onDragLeave(event: (event?: DragEvent) => void): T;
    onDrop(event: (event?: DragEvent) => void): T;
    overlay(value: string, options?: {
        align?: Alignment;
        offset?: {
            x?: number;
            y?: number;
        };
    }): T;
    linearGradient(value: {
        angle?: number | string;
        direction?: GradientDirection;
        colors: Array<any>;
        repeating?: boolean;
    }): T;
    sweepGradient(value: {
        center: Array<any>;
        start?: number | string;
        end?: number | string;
        rotation?: number | string;
        colors: Array<any>;
        repeating?: boolean;
    }): T;
    radialGradient(value: {
        center: Array<any>;
        radius: number | string;
        colors: Array<any>;
        repeating?: boolean;
    }): T;
    motionPath(value: {
        path: string;
        from?: number;
        to?: number;
        rotatable?: boolean;
    }): T;
    shadow(value: {
        radius: number | Resource;
        color?: Color | string | Resource;
        offsetX?: number | Resource;
        offsetY?: number | Resource;
    }): T;
    clip(value: boolean | Circle | Ellipse | Path | Rect): T;
    mask(value: Circle | Ellipse | Path | Rect): T;
    key(value: string): T;
    geometryTransition(id: string): T;
    bindPopup(show: boolean, popup: PopupOption | CustomPopupOption): T;
    bindMenu(content: {
        value: string;
        action: () => void;
    }[] | CustomBuilder): T;
    stateStyles(value: StateStyels): T;
}
declare type CustomBuilder = () => any;
declare class CommonShapeMethod<T> extends CommonMethod<T> {
    constructor();
    stroke(value: Color | number | string | Resource): T;
    fill(value: Color | number | string | Resource): T;
    strokeDashOffset(value: number | string): T;
    strokeLineCap(value: LineCapStyle): T;
    strokeLineJoin(value: LineJoinStyle): T;
    strokeMiterLimit(value: number | string): T;
    strokeOpacity(value: number | string | Resource): T;
    fillOpacity(value: number | string | Resource): T;
    strokeWidth(value: number | string | Resource): T;
    antiAlias(value: boolean): T;
    strokeDashArray(value: Array<any>): T;
}
declare class CustomComponent<T> {
    build(): void;
    private aboutToAppear?(): void;
    private aboutToDisappear?(): void;
}
