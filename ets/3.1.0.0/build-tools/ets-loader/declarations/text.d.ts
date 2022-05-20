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

declare class TextExtend<T> extends TextAttribute<T> {
}
interface Text extends TextAttribute<Text> {
    (content?: string | Resource): Text;
}
declare class TextAttribute<T> extends CommonMethod<T> {
    fontColor(value: ResourceColor): T;
    fontSize(value: number | string | Resource): T;
    minFontSize(value: number | string | Resource): T;
    maxFontSize(value: number | string | Resource): T;
    fontStyle(value: FontStyle): T;
    fontWeight(value: number | FontWeight | string): T;
    textAlign(value: TextAlign): T;
    lineHeight(value: number | string | Resource): T;
    textOverflow(value: {
        overflow: TextOverflow;
    }): T;
    fontFamily(value: string | Resource): T;
    maxLines(value: number): T;
    decoration(value: {
        type: TextDecorationType;
        color?: ResourceColor;
    }): T;
    letterSpacing(value: number | string): T;
    textCase(value: TextCase): T;
    baselineOffset(value: number | string): T;
}
declare const Text: Text;
