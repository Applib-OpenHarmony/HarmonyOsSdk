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

import { CommonShapeMethod } from "./common";

/**
 * Line drawing component.
 * @since 7
 */
interface Line extends LineAttribute<Line> {
  /**
   * Uses new to create the line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   * @since 7
   */
  new (value?: { width?: string | number; height?: string | number }): Line;

  /**
   * The return value of the parameter is Line.
   * width: Width of the rectangle where the line resides..
   * height: Height of the rectangle where the line resides.
   * @since 7
   */
  (value?: { width?: string | number; height?: string | number }): Line;
}

/**
 * inheritance CommonShapeMethod.
 * @since 7
 */
declare class LineAttribute<T> extends CommonShapeMethod<T> {
  /**
   * Coordinate of the start point of the line (relative coordinate).
   * @since 7
   */
  startPoint(value: Array<any>): T;

  /**
   * Line end coordinates (relative coordinates).
   * @since 7
   */
  endPoint(value: Array<any>): T;
}

export declare class LineExtend<T> extends LineAttribute<T> {}
export declare const LineInterface: Line;
