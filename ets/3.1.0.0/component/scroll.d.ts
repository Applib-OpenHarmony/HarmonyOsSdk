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
import { Axis, BarState, Color, Curve, Edge, EdgeEffect } from "./enums";

/**
 * Content scroll direction.
 * @since 7
 */
export declare enum ScrollDirection {
  /**
   * Vertical scrolling is supported.
   * @since 7
   */
  Vertical,

  /**
   * Horizontal scrolling is supported.
   * @since 7
   */
  Horizontal,

  /**
   * Free scrolling is supported.
   * @since 7
   */
  Free,

  /**
   * Non-scrollable.
   * @since 7
   */
  None,
}

/**
 * @since 7
 */
export declare class Scroller {
  /**
   * constructor.
   * @since 7
   */
  constructor();

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  scrollTo(value: {
    xOffset: number | string;
    yOffset: number | string;
    animation?: { duration: number; curve: Curve };
  });

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  scrollEdge(value: Edge);

  /**
   * Called when page turning mode is set.
   * @since 7
   */
  scrollPage(value: { next: boolean; direction?: Axis });

  /**
   * Called when viewing the scroll offset.
   * @since 7
   */
  currentOffset();

  /**
   * Called when sliding to the specified index.
   * @since 7
   */
  scrollToIndex(value: number);
}

/**
 * Provides interfaces for scrollable containers.
 * @since 7
 */
interface Scroll extends ScrollAttribute<Scroll> {
  /**
   * Called when a scrollable container is set.
   * @since 7
   */
  (scroller?: Scroller): Scroll;
}

/**
 * @since 7
 */
declare class ScrollAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the scroll method is slid.
   * @since 7
   */
  scrollable(value: ScrollDirection): T;

  /**
   * Called when the setting slides to the specified position.
   * @since 7
   */
  onScroll(event: (xOffset: number, yOffset: number) => void): T;

  /**
   * Called when scrolling to the edge of the container.
   * @since 7
   */
  onScrollEdge(event: (side: Edge) => void): T;

  /**
   * Called when scrolling has stopped.
   * @since 7
   */
  onScrollEnd(event: () => void): T;

  /**
   * Called when the status of the scroll bar is set.
   * @since 7
   */
  scrollBar(barState: BarState): T;

  /**
   * Called when the color of the scroll bar is set.
   * @since 7
   */
  scrollBarColor(color: Color | number | string): T;

  /**
   * Called when the width of the scroll bar is set.
   * @since 7
   */
  scrollBarWidth(value: number | string): T;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  edgeEffect(edgeEffect: EdgeEffect): T;
}

export declare class ScrollExtend<T> extends ScrollAttribute<T> {}
export declare const ScrollInterface: Scroll;
