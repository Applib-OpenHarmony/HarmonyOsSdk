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
import { FontWeight } from "./enums";
import { Length, Resource, ResourceColor } from "./units";

/**
 * Provides the interface for the marquee attributes.
 * @since 8
 */
interface Marquee extends MarqueeAttribute<Marquee> {
  /**
   * Create marquee.
   * @since 8
   */
  (value: { start: boolean; step?: number; loop?: number; fromStart?: boolean; src: string }): Marquee;
}

/**
 * Declares marquee properties.
 * @since 8
 */
declare class MarqueeAttribute<T> extends CommonMethod<T> {
  /**
   * Set marquee font Color.
   * @since 8
   */
  fontColor(value: ResourceColor): T;

  /**
   * Set marquee font size.
   * @since 8
   */
  fontSize(value: Length): T;

  /**
   * Set marquee allow scale.
   * @since 8
   */
  allowScale(value: boolean): T;

  /**
   * Set marquee font weight.
   * @since 8
   */
  fontWeight(value: number | FontWeight | string): T;

  /**
   * Set marquee font family.
   * @since 8
   */
  fontFamily(value: string | Resource): T;

  /**
   * Called when scrolling starts.
   * @since 8
   */
  onStart(event: () => void): T;

  /**
   * Called when scrolling to the bottom.
   * @since 8
   */
  onBounce(event: () => void): T;

  /**
   * Called when scrolling is complete.
   * @since 8
   */
  onFinish(event: () => void): T;
}

export declare class MarqueeExtend<T> extends MarqueeAttribute<T> {}
export declare const MarqueeInterface: Marquee;
