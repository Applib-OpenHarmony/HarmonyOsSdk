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

import { ResourceStr } from ".";
import { CommonMethod } from "./common";
import { TextAlign, FontWeight, FontStyle } from "./enums";
import { Font, Length, ResourceColor } from "./units";

/**
 * Defines the option of TextArea.
 * @since 7
 */
export declare interface TextAreaOption {
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
 * Provides an interface for the multi-line text input component.
 * @since 7
 */
interface TextArea extends TextAreaAttribute<TextArea> {
  /**
   * Called when writing multiple lines of text.
   * @since 7
   */
  (value?: TextAreaOption): TextArea;
}

/**
 * Defines the attribute functions of TextArea.
 * @since 7
 */
declare class TextAreaAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the color of the placeholder is set.
   * @since 7
   */
  placeholderColor(value: ResourceColor): T;

  /**
   * Called when the font property of the placeholder is set.
   * @since 7
   */
  placeholderFont(value: Font): T;

  /**
   * Called when the alignment of the contents of a multiline text box is set.
   * @since 7
   */
  textAlign(value: TextAlign): T;

  /**
   * Called when the insertion cursor color is set.
   * @since 7
   */
  caretColor(value: ResourceColor): T;

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
   * Called when the input changes.
   * @devices phone, tablet, car.
   * @since 7
   */
  onChange(callback: (value: string) => void): T;

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

export declare class TextAreaExtend<T> extends TextAreaAttribute<T> {}
export declare const TextAreaInterface: TextArea;
