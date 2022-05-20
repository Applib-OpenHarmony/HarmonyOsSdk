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
import { AnimationStatus, Curve, FillMode, PlayMode } from "./enums";

/**
 * Customize spring properties.
 * @since 7
 * @systemapi
 */
export declare class SpringProp {
  /**
   * Constructor parameters
   * @since 7
   * @systemapi
   */
  constructor(mass: number, stiffness: number, damping: number);
}

/**
 * Spring animation model. You can build a spring animation based on the start point, end point, initial speed, and spring attributes.
 * @since 7
 * @systemapi
 */
export declare class SpringMotion {
  /**
   * Constructor parameters
   * @since 7
   * @systemapi
   */
  constructor(start: number, end: number, velocity: number, prop: SpringProp);
}

/**
 * Friction animation model. You can build friction animation by friction force, initial position, and initial velocity.
 * @since 7
 * @systemapi
 */
export declare class FrictionMotion {
  /**
   * Constructor parameters
   * @since 7
   * @systemapi
   */
  constructor(friction: number, position: number, velocity: number);
}

/**
 * Rolling animation model: You can build rolling animation based on the initial position, initial speed, boundary position, and spring attributes.
 * @since 7
 * @systemapi
 */
export declare class ScrollMotion {
  /**
   * Constructor parameters
   * @since 7
   * @systemapi
   */
  constructor(position: number, velocity: number, min: number, max: number, prop: SpringProp);
}

/**
 * Defines Animtor.
 * @since 7
 * @systemapi
 */
interface Animator extends AnimatorAttribute<Animator> {
  /**
   * Constructor parameters
   * @since 7
   * @systemapi
   */
  (value: string): Animator;
}

/**
 * Defines AnimatorAttribute.
 * @since 7
 * @systemapi
 */
declare class AnimatorAttribute<T> extends CommonMethod<T> {
  /**
   * Controls the playback status. The default value is the initial state.
   * @since 7
   * @systemapi
   */
  state(value: AnimationStatus): T;

  /**
   * Animation duration, in milliseconds.
   * @since 7
   * @systemapi
   */
  duration(value: number): T;

  /**
   * Animation curve, default to linear curve
   * @since 7
   * @systemapi
   */
  curve(value: Curve): T;

  /**
   * Delayed animation playback duration, in milliseconds. By default, the animation is not delayed.
   * @since 7
   * @systemapi
   */
  delay(value: number): T;

  /**
   * Sets the state before and after the animation starts.
   * @since 7
   * @systemapi
   */
  fillMode(value: FillMode): T;

  /**
   * The default playback is once. If the value is -1, the playback is unlimited.
   * @since 7
   * @systemapi
   */
  iterations(value: number): T;

  /**
   * Sets the animation playback mode. By default, the animation starts to play again after the playback is complete.
   * @since 7
   * @systemapi
   */
  playMode(value: PlayMode): T;

  /**
   * Configure the physical animation algorithm.
   * @since 7
   * @systemapi
   */
  motion(value: SpringMotion | FrictionMotion | ScrollMotion): T;

  /**
   * Status callback, which is triggered when the animation starts to play.
   * @since 7
   * @systemapi
   */
  onStart(event: () => void): T;

  /**
   * Status callback, triggered when the animation pauses.
   * @since 7
   * @systemapi
   */
  onPause(event: () => void): T;

  /**
   * Status callback, triggered when the animation is replayed.
   * @since 7
   * @systemapi
   */
  onRepeat(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation is canceled.
   * @since 7
   * @systemapi
   */
  onCancel(event: () => void): T;

  /**
   * Status callback, which is triggered when the animation playback is complete.
   * @since 7
   * @systemapi
   */
  onFinish(event: () => void): T;

  /**
   * The callback input parameter is the interpolation during animation playback.
   * @since 7
   * @systemapi
   */
  onFrame(event: (value: number) => void): T;
}

export declare class AnimatorExtend<T> extends AnimatorAttribute<T> {}
export declare const AnimatorInterface: Animator;
