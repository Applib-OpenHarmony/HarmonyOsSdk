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

declare interface Resource {
    readonly id: number;
    readonly type: number;
    readonly params?: any[];
}
declare type Length = string | number | Resource;
declare type ResourceStr = string | Resource;
declare type Padding = {
    top?: Length;
    right?: Length;
    bottom?: Length;
    left?: Length;
};
declare type Margin = Padding;
declare type Offset = {
    dx: Length;
    dy: Length;
};
declare type ResourceColor = Color | number | string | Resource;
declare interface Font {
    size?: Length;
    weight?: FontWeight | number | string;
    family?: string | Resource;
    style?: FontStyle;
}
declare interface Area {
    width: Length;
    height: Length;
    pos: Position;
    globalPos: Position;
}
declare interface Position {
    x: Length;
    y: Length;
}
