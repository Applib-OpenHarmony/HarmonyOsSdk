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

import { Font } from ".";
import { FontWeight, FontStyle } from "./enums";
import { CommonMethod } from "./common";
import { ResourceColor, ResourceStr, Length } from "./units";

/**
 * Declare the type of input box
 * @since 7
 */
export declare enum InputType {
  /**
   * Basic input mode.
   * @since 7
   */
  Normal,

  /**
   * Password entry mode.
   * @since 7
   */
  Number,

  /**
   * E-mail address input mode.
   * @since 7
   */
  Email,

  /**
   * Pure digital input mode.
   * @since 7
   */
  Password,
}

/**
 * Declare the type of soft keyboard.
 * @since 7
 */
export declare enum EnterKeyType {
  /**
   * Go.
   * @since 7
   */
  Go,

  /**
   * Search.
   * @since 7
   */
  Search,

  /**
   * Send.
   * @since 7
   */
  Send,

  /**
   * Next.
   * @since 7
   */
  Next,

  /**
   * Done.
   * @since 7
   */
  Done,
}

/**
 * Defines the option of TextInput.
 * @since 7
 */
export declare interface TextInputOption {
  /**
   * The place holder text string.
   * @since 7
   */
  placeholder?: ResourceStr;

  /**
   * Sets the current value of TextArea.
   * @since 7
   */
  text?: ResourceStr;
}

/**
 * Provides a single-line text input component interface.
 * @since 7
 */
interface TextInput extends TextInputAttribute<TextInput> {
  /**
   * Called when writing a single line of text.
   * @since 7
   */
  (value?: TextInputOption): TextInput;
}

/**
 * @since 7
 */
declare class TextInputAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the input type is set.
   * @since 7
   */
  type(value: InputType): T;

  /**
   * Called when the color of the placeholder is set.
   * @since 7
   */
  placeholderColor(value: ResourceColor): T;

  /**
   * Called when the font property of the placeholder is set.
   * @since 7
   */
  placeholderFont(value?: Font): T;

  /**
   * Called when the type of soft keyboard input button is set.
   * @since 7
   */
  enterKeyType(value: EnterKeyType): T;

  /**
   * Called when the color of the insertion cursor is set.
   * @since 7
   */
  caretColor(value: ResourceColor): T;

  /**
   * Called when judging whether the text editing has changed.
   * @since 7
   */
  onEditChanged(callback: (isEditing: boolean) => void): T;

  /**
   * Called when submitted.
   * @since 7
   */
  onSubmit(callback: (enterKey: EnterKeyType) => void): T;

  /**
   * Called when the input of the input box changes.
   * @since 7
   */
  onChange(callback: (value: string) => void): T;

  /**
   * Called when the input of maximum text length is set.
   * @since 7
   */
  maxLength(value: number): T;

  /**
   * Called when the font color is set.
   * @since 7
   */
  fontColor(value: ResourceColor): T;

  /**
   * Called when the font size is set.
   * @since 7
   */
  fontSize(value: Length): T;

  /**
   * Called when the font style of a font is set.
   * @since 7
   */
  fontStyle(value: FontStyle): T;

  /**
   * Called when the font weight is set.
   * @since 7
   */
  fontWeight(value: number | FontWeight | string): T;

  /**
   * Called when the font list of text is set.
   * @since 7
   */
  fontFamily(value: ResourceStr): T;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  onCopy(callback: (value: string) => void): T;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  onCut(callback: (value: string) => void): T;

  /**
   * Called when using the Clipboard menu
   * @since 7
   */
  onPaste(callback: (value: string) => void): T;
}

export declare class TextInputExtend<T> extends TextInputAttribute<T> {}
export declare const TextInputInterface: TextInput;
