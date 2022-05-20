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

import { CommonMethod, PixelMap } from "./common";
import { LineCapStyle, LineJoinStyle } from "./enums";
import { Resource, ResourceColor } from "./units";

/**
 * Provides interfaces for drawing components.
 * @since 7
 */
interface Shape extends ShapeAttribute<Shape> {
  /**
   * Use the new function to create Shape.
   * @since 7
   */
  new (value?: PixelMap): Shape;

  /**
   * Called when a component is drawn.
   * @since 7
   */
  (value?: PixelMap): Shape;
}

/**
 * @since 7
 */
declare class ShapeAttribute<T> extends CommonMethod<T> {
  /**
   * Viewport of shape
   * @since 7
   */
  viewPort(value: { x?: number | string; y?: number | string; width?: number | string; height?: number | string }): T;

  /**
   * Called when the border color is set.
   * @since 7
   */
  stroke(value: ResourceColor): T;

  /**
   * Called when the fill color is set.
   * @since 7
   */
  fill(value: ResourceColor): T;

  /**
   * Called when the offset of the starting point of border drawing is set.
   * @since 7
   */
  strokeDashOffset(value: number | string): T;

  /**
   * Called when the gap of the border is set.
   * @since 7
   */
  strokeDashArray(value: Array<any>): T;

  /**
   * Called when the path endpoint drawing style is set.
   * @since 7
   */
  strokeLineCap(value: LineCapStyle): T;

  /**
   * Called when the border corner drawing style is set.
   * @since 7
   */
  strokeLineJoin(value: LineJoinStyle): T;

  /**
   * Called when the limit value for drawing acute angles as oblique angles is set.
   * @since 7
   */
  strokeMiterLimit(value: number | string): T;

  /**
   * Called when the opacity of the border is set.
   * @since 7
   */
  strokeOpacity(value: number | string | Resource): T;

  /**
   * Called when the transparency of the border is set.
   * @since 7
   */
  fillOpacity(value: number | string | Resource): T;

  /**
   * Called when the width of the border is set.
   * @since 7
   */
  strokeWidth(value: number | string): T;

  /**
   * Called when setting whether anti aliasing is on.
   * @since 7
   */
  antiAlias(value: boolean): T;
}

export declare class ShapeExtend<T> extends ShapeAttribute<T> {}
export declare const ShapeInterface: Shape;
