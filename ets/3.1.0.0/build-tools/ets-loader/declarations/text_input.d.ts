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

declare enum InputType {
    Normal,
    Number,
    Email,
    Password
}
declare enum EnterKeyType {
    Go,
    Search,
    Send,
    Next,
    Done
}
declare interface TextInputOption {
    placeholder?: ResourceStr;
    text?: ResourceStr;
}
interface TextInput extends TextInputAttribute<TextInput> {
    (value?: TextInputOption): TextInput;
}
declare class TextInputAttribute<T> extends CommonMethod<T> {
    type(value: InputType): T;
    placeholderColor(value: ResourceColor): T;
    placeholderFont(value?: Font): T;
    enterKeyType(value: EnterKeyType): T;
    caretColor(value: ResourceColor): T;
    onEditChanged(callback: (isEditing: boolean) => void): T;
    onSubmit(callback: (enterKey: EnterKeyType) => void): T;
    onChange(callback: (value: string) => void): T;
    maxLength(value: number): T;
    fontColor(value: ResourceColor): T;
    fontSize(value: Length): T;
    fontStyle(value: FontStyle): T;
    fontWeight(value: number | FontWeight | string): T;
    fontFamily(value: ResourceStr): T;
    onCopy(callback: (value: string) => void): T;
    onCut(callback: (value: string) => void): T;
    onPaste(callback: (value: string) => void): T;
}
declare class TextInputExtend<T> extends TextInputAttribute<T> {
}
declare const TextInput: TextInput;
