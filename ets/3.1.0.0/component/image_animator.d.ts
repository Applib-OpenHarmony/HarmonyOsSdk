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
import { AnimationStatus } from "./enums";

/**
 * @since 7
 */
interface ImageAnimator extends ImageAnimatorAttribute<ImageAnimator> {
  /**
   * ImageAimator is returned.
   * @since 7
   */
  (): ImageAnimator;
}

/**
 * inheritance CommonMethod
 * @since 7
 */
declare class ImageAnimatorAttribute<T> extends CommonMethod<T> {
  /**
   * list images
   * @since 7
   */
  images(
    value: Array<{
      src: string;
      width?: number | string;
      height?: number | string;
      top?: number | string;
      left?: number | string;
      duration?: number;
    }>,
  ): T;

  /**
   * The default value is the initial state, which is used to control the playback status.
   * @since 7
   */
  state(value: AnimationStatus): T;

  /**
   * The unit is millisecond.
   * @since 7
   */
  duration(value: number): T;

  /**
   * Set the playback sequence.
   * @since 7
   */
  reverse(value: boolean): T;

  /**
   * Sets whether the image size is fixed to the component size.
   * @since 7
   */
  fixedSize(value: boolean): T;

  /**
   * Indicates whether to enable pre-decoding.
   * @since 7
   */
  preDecode(value: number): T;

  /**
   * Sets the state before and after the animation starts
   * @since 7
   */
  fillMode(value: FillMode): T;

  /**
   * Played once by default
   * @since 7
   */
  iterations(value: number): T;

  /**
   * Status callback, which is triggered when the animation starts to play.
   * @since 7
   */
  onStart(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation pauses.
   * @since 7
   */
  onPause(event: () => void): T;

  /**
   * Status callback, triggered when the animation is replayed
   * @since 7
   */
  onRepeat(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation is canceled.
   * @since 7
   */
  onCancel(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation playback is complete.
   * @since 7
   */
  onFinish(event: () => void): T;
}

export declare class ImageAnimatorExtend<T> extends ImageAnimatorAttribute<T> {}
export declare const ImageAnimatorInterface: ImageAnimator;
