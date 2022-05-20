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

declare enum GestureDirection {
    All,
    Horizontal,
    Vertical
}
declare enum PanDirection {
    None,
    Horizontal,
    Left,
    Right,
    Vertical,
    Up,
    Down,
    All
}
declare enum SwipeDirection {
    None,
    Horizontal,
    Vertical,
    All
}
declare enum GestureMode {
    Sequence,
    Parallel,
    Exclusive
}
declare enum GestureMask {
    Normal,
    IgnoreInternal
}
interface FingerInfo {
    id: number;
    globalX: number;
    globalY: number;
    localX: number;
    localY: number;
}
declare type GestureType = TapGesture | LongPressGesture | PanGesture | PinchGesture | SwipeGesture | RotationGesture | GestureGroup;
declare type GestureEvent = TapGestureEvent | LongPressGestureEvent | PanGestureEvent | SwipeGestureEvent | PinchGestureEvent | RotationGestureEvent;
interface TapGestureEvent extends BaseGestureEvent {
    fingerList: FingerInfo[];
}
interface LongPressGestureEvent extends BaseGestureEvent {
    repeat: boolean;
    fingerList: FingerInfo[];
}
interface PanGestureEvent extends BaseGestureEvent {
    offsetX: number;
    offsetY: number;
}
interface SwipeGestureEvent extends BaseGestureEvent {
    angle: number;
    speed: number;
}
interface PinchGestureEvent extends BaseGestureEvent {
    scale: number;
    pinchCenterX: number;
    pinchCenterY: number;
}
interface RotationGestureEvent extends BaseGestureEvent {
    angle: number;
}
interface BaseGestureEvent extends BaseEvent {
}
interface TapGesture {
    (value?: {
        count?: number;
        fingers?: number;
    }): TapGesture;
    onAction(event: (event?: GestureEvent) => void): TapGesture;
}
interface LongPressGesture {
    (value?: {
        fingers?: number;
        repeat?: boolean;
        duration?: number;
    }): LongPressGesture;
    onAction(event: (event?: LongPressGestureEvent) => void): LongPressGesture;
    onActionEnd(event: (event?: LongPressGestureEvent) => void): LongPressGesture;
    onActionCancel(event: () => void): LongPressGesture;
}
declare class PanGestureOption {
    constructor(value?: {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
    });
    setDirection(value: PanDirection);
    setDistance(value: number);
    setFingers(value: number);
}
interface PanGesture {
    (value?: {
        fingers?: number;
        direction?: PanDirection;
        distance?: number;
    } | PanGestureOption): PanGesture;
    onActionStart(event: (event?: PanGestureEvent) => void): PanGesture;
    onActionUpdate(event: (event?: PanGestureEvent) => void): PanGesture;
    onActionEnd(event: (event?: PanGestureEvent) => void): PanGesture;
    onActionCancel(event: () => void): PanGesture;
}
interface SwipeGesture {
    (value?: {
        fingers?: number;
        direction?: SwipeDirection;
        speed?: number;
    }): SwipeGesture;
    onAction(event: (event?: SwipeGestureEvent) => void): SwipeGesture;
}
interface PinchGesture {
    (value?: {
        fingers?: number;
        distance?: number;
    }): PinchGesture;
    onActionStart(event: (event?: PinchGestureEvent) => void): PinchGesture;
    onActionUpdate(event: (event?: PinchGestureEvent) => void): PinchGesture;
    onActionEnd(event: (event?: PinchGestureEvent) => void): PinchGesture;
    onActionCancel(event: () => void): PinchGesture;
}
interface RotationGesture {
    (value?: {
        fingers?: number;
        angle?: number;
    }): RotationGesture;
    onActionStart(event: (event?: RotationGestureEvent) => void): RotationGesture;
    onActionUpdate(event: (event?: RotationGestureEvent) => void): RotationGesture;
    onActionEnd(event: (event?: RotationGestureEvent) => void): RotationGesture;
    onActionCancel(event: () => void): RotationGesture;
}
interface GestureGroup {
    (mode: GestureMode, ...gesture: GestureType[]): GestureGroup;
    onCancel(event: () => void): GestureGroup;
}
declare const TapGesture: TapGesture;
declare const LongPressGesture: LongPressGesture;
declare const PanGesture: PanGesture;
declare const SwipeGesture: SwipeGesture;
declare const PinchGesture: PinchGesture;
declare const RotationGesture: RotationGesture;
declare const GestureGroup: GestureGroup;
