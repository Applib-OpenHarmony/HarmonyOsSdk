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
import { Color } from "./enums";

/**
 * Defines the Gauge component.
 * @since 8
 */
interface Gauge extends GaugeAttribute<Gauge> {
  /**
   * value:Current data value.
   * min: Current Segment Minimum Value
   * max: Current Segment Maximum Value
   * @since 8
   */
  (options: { value: number; min?: number; max?: number }): Gauge;
}

/**
 * @since 8
 */
declare class GaugeAttribute<T> extends CommonMethod<T> {
  /**
   * Sets the value for the current profile.
   * @since 8
   */
  value(value: number): T;

  /**
   * Set the start angle. Clock 0 is 0 degrees and clockwise is positive.
   * @since 8
   */
  startAngle(angle: number): T;

  /**
   * Sets the end angle position. Clock 0 is 0 degrees and clockwise is positive.
   * @since 8
   */
  endAngle(angle: number): T;

  /**
   * Set the color of the chart. You can set the solid color and segmented gradient color.
   * @since 8
   */
  colors(colors: Array<any>): T;

  /**
   * Sets the thickness of the ring chart.
   * @since 8
   */
  strokeWidth(length: number): T;
}

export declare class GaugeExtend<T> extends GaugeAttribute<T> {}
export declare const GaugeInterface: Gauge;
