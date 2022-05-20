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
import { BarState, Color } from "./enums";
import { Scroller } from "./scroll";
import { Length } from "./units";

/**
 * @since 7
 */
interface Grid extends GridAttribute<Grid> {
  /**
   * Grid is returned when the parameter is transferred.
   * @since 7
   */
  (scroller?: Scroller): Grid;
}

/**
 * @since 7
 */
declare class GridAttribute<T> extends CommonMethod<T> {
  /**
   * This parameter specifies the number of columns in the current grid layout.
   * @since 7
   */
  columnsTemplate(value: string): T;

  /**
   * Lets you set the number of rows in the current grid layout,
   * @since 7
   */
  rowsTemplate(value: string): T;

  /**
   * Allows you to set the spacing between columns.
   * @since 7
   */
  columnsGap(value: Length): T;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  rowsGap(value: Length): T;

  /**
   * This parameter specifies the width of the scroll bar.
   * @since 7
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Sets the color of the scroll bar.
   * @since 7
   */
  scrollBarColor(value: Color | number | string): T;

  /**
   * Lets you set the spacing between rows.
   * @since 7
   */
  scrollBar(value: BarState): T;

  /**
   * Sets the status of the scroll bar.
   * @since 7
   */
  onScrollIndex(event: (first: number) => void): T;

  /**
   * cached Count
   * @since 7
   */
  cachedCount(value: number): T;
}

export declare class GridExtend<T> extends GridAttribute<T> {}
export declare const GridInterface: Grid;
