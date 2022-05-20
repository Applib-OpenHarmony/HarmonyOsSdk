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
import { Axis, BarState, EdgeEffect } from "./enums";
import { Scroller } from "./scroll";
import { Length, ResourceColor } from "./units";

/**
 * Declare scroll status
 * @since 7
 */
export declare enum ScrollState {
  /**
   * Not activated.
   * @since 7
   */
  Idle,

  /**
   * Scrolling status.
   * @since 7
   */
  Scroll,

  /**
   * Drag status.
   * @since 7
   */
  Fling,
}

/**
 * ItemDragInfo object description
 * @since 8
 */
export interface ItemDragInfo {
  /**
   * Obtains the X coordinate of the drag window, in vp.
   * @since 8
   */
  x: number;

  /**
   * Obtains the Y coordinate of the drag window, in vp.
   * @since 8
   */
  y: number;
}

/**
 * ListExtend extension declaration.
 * @since 7
 */
export declare class ListExtend<T> extends ListAttribute<T> {}

/**
 * The list interface is extended.
 * @since 7
 */
interface List extends ListAttribute<List> {
  /**
   * Called when interface data is called.
   * @since 7
   */
  (value?: { initialIndex?: number; space?: number | string; scroller?: Scroller }): List;
}

/**
 * @since 7
 */
declare class ListAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the arrangement direction of the list component is set.
   * @since 7
   */
  listDirection(value: Axis): T;

  /**
   * Called when the display mode of the side slider is set.
   * @since 7
   */
  scrollBar(value: BarState): T;

  /**
   * Called when the sliding effect is set.
   * @since 7
   */
  edgeEffect(value: EdgeEffect): T;

  /**
   * Called when the ListItem split line style is set.
   * @since 7
   */
  divider(
    value: {
      strokeWidth: Length;
      color?: ResourceColor;
      startMargin?: Length;
      endMargin?: Length;
    } | null,
  ): T;

  /**
   * Called when judging whether it is in editable mode.
   * @since 7
   */
  editMode(value: boolean): T;

  /**
   * Called when the minimum number of list item caches is set for long list deferred loading.
   * @since 7
   */
  cachedCount(value: number): T;

  /**
   * Called when setting whether to enable chain linkage dynamic effect.
   * @since 8
   */
  chainAnimation(value: boolean): T;

  /**
   * Called when the offset and status callback of the slide are set.
   * @since 7
   */
  onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;

  /**
   * Called when the start and end positions of the display change.
   * @since 7
   */
  onScrollIndex(event: (start: number, end: number) => void): T;

  /**
   * Called when the list begins to arrive.
   * @since 7
   */
  onReachStart(event: () => void): T;

  /**
   * Called when the list reaches the end.
   * @since 7
   */
  onReachEnd(event: () => void): T;

  /**
   * Called when the slider stops.
   * @since 7
   */
  onScrollStop(event: () => void): T;

  /**
   * Called when a list item is deleted.
   * @since 7
   */
  onItemDelete(event: (index: number) => boolean): T;

  /**
   * Called when a list item is moved.
   * @since 7
   */
  onItemMove(event: (from: number, to: number) => boolean): T;

  /**
   * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
   * (To be triggered, press and hold for 170 milliseconds (ms))
   * @since 8
   */
  onItemDragStart(event: (event: ItemDragInfo, itemIndex: number) => ((() => any) | void)): T;

  /**
   * After binding, a callback is triggered when the component is dragged to the range of the component.
   * @since 8
   */
  onItemDragEnter(event: (event: ItemDragInfo) => void): T;

  /**
   * After binding, a callback is triggered when the drag moves within the range of a placeable component.
   * @since 8
   */
  onItemDragMove(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number) => void): T;

  /**
   * After binding, a callback is triggered when the component is dragged out of the component range.
   * @since 8
   */
  onItemDragLeave(event: (event: ItemDragInfo, itemIndex: number) => void): T;

  /**
   * The component bound to this event can be used as the drag release target.
   * This callback is triggered when the drag behavior is stopped within the scope of the component.
   * @since 8
   */
  onItemDrop(event: (event: ItemDragInfo, itemIndex: number, insertIndex: number, isSuccess: boolean) => void): T;
}

/**
 * @since 7
 */
export declare const ListInterface: List;
