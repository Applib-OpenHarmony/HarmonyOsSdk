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

import { CommonMethod } from "./common";
import { ResourceColor, Font } from "./units";

/**
 * indexer align property.
 * @since 7
 */
export declare enum IndexerAlign {
  /**
   * A dialog box is displayed on the right of the index bar.
   * @since 7
   */
  Left,

  /**
   * A dialog box is displayed on the left of the index bar.
   * @since 7
   */
  Right,
}

/**
 * Alphabet index bar.
 * @since 7
 */
interface AlphabetIndexer extends AlphabetIndexerAttribute<AlphabetIndexer> {
  /**
   * ArrayValue: Alphabetical index string array.
   * selected: ID of the selected item.
   * @since 7
   */
  (value: { arrayValue: Array<string>; selected: number }): AlphabetIndexer;
}

/**
 * Defines the alphabet index bar attribute functions.
 * @since 7
 */
declare class AlphabetIndexerAttribute<T> extends CommonMethod<T> {
  /**
   * Index bar selection callback.
   * @since 7
   */
  onSelected(event: (index: number) => void): T;

  /**
   * Definitions color.
   * @since 7
   */
  color(value: ResourceColor): T;

  /**
   * Select the text color.
   * @since 7
   */
  selectedColor(value: ResourceColor): T;

  /**
   * Font color of the pop-up prompt text.
   * @since 7
   */
  popupColor(value: ResourceColor): T;

  /**
   * Select the text background color.
   * @since 7
   */
  selectedBackgroundColor(value: ResourceColor): T;

  /**
   * Background color of the pop-up window index.
   * @since 7
   */
  popupBackground(value: ResourceColor): T;

  /**
   * Whether to use pop-up index hints.
   * @since 7
   */
  usingPopup(value: boolean): T;

  /**
   * Select the text text style,
   * @since 7
   */
  selectedFont(value: Font): T;

  /**
   * Select the text background color.
   * @since 7
   */
  popupFont(value: Font): T;

  /**
   * Size of the letter area on the letter index bar. The letter area is a square. Set the length of the square side.
   * @since 7
   */
  itemSize(value: string | number): T;

  /**
   * Definitions fonts.
   * @since 7
   */
  font(value: Font): T;

  /**
   * Alphabet index bar alignment style. The left and right alignment styles are supported, which affects the pop-up position of the pop-up window.
   * @since 7
   */
  alignStyle(value: IndexerAlign): T;
}

export declare const AlphabetIndexerInterface: AlphabetIndexer;
export declare class AlphabetIndexerExtend<T> extends AlphabetIndexerAttribute<T> {}
