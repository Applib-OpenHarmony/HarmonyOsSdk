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

import { Axis } from "./enums";
import { CommonMethod } from "./common";
import { ResourceColor } from "./units";

/**
 * Declare sliderstyle
 * @since 7
 */
export declare enum SliderStyle {
  /**
   * The slider is on the slide rail.
   * @since 7
   */
  OutSet = 0,

  /**
   * The slider is in the slide rail.
   * @since 7
   */
  InSet,
}

/**
 * Declare SliderChangeMode
 * @since 7
 */
export declare enum SliderChangeMode {
  /**
   * Start dragging the slider.
   * @since 7
   */
  Begin = 0,

  /**
   * Drag the slider.
   * @since 7
   */
  Moving,

  /**
   * End dragging the slider.
   * @since 7
   */
  End,
}

/**
 * Defines the option of Slider.
 * @since 7
 */
export declare interface SliderOption {
  /**
   * Current value of Slider.
   * @since 7
   */
  value?: number;

  /**
   * Sets the min value of Slider.
   * @since 7
   */
  min?: number;

  /**
   * Sets the max value of Slider.
   * @since 7
   */
  max?: number;

  /**
   * Sets the step of each slide value.
   * @since 7
   */
  step?: number;

  /**
   * Sets the slider style.
   * @since 7
   */
  style?: SliderStyle;

  /**
   * Sets the slider direction style.
   * @since 8
   */
  direction?: Axis;

  /**
   * Set whether the direction of the slider needs to be reversed.
   * @since 8
   */
  reverse?: boolean;
}

/**
 * Provides an interface for the slide bar component.
 * @since 7
 */
interface Slider extends SliderAttribute<Slider> {
  /**
   * Called when the slider bar component is used.
   * @since 7
   */
  (options?: SliderOption): Slider;
}

/**
 * Defines the attribute functions of Slider.
 * @since 7
 */
declare class SliderAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the slider color of the slider bar is set.
   * @since 7
   */
  blockColor(value: ResourceColor): T;

  /**
   * Called when the track color of the slider is set.
   * @since 7
   */
  trackColor(value: ResourceColor): T;

  /**
   * Called when the slider of the slider bar is set to slide over the area color.
   * @since 7
   */
  selectedColor(value: ResourceColor): T;

  /**
   * Called when the minimum label is set.
   * @since 7
   */
  minLabel(value: string): T;

  /**
   * Called when the maximum label is set.
   * @since 7
   */
  maxLabel(value: string): T;

  /**
   * Called when setting whether to display step size.
   * @devices phone, tablet, car
   * @since 7
   */
  showSteps(value: boolean): T;

  /**
   * Called when the percentage of bubble prompt is set when sliding.
   * @devices phone, tablet, car
   * @since 7
   */
  showTips(value: boolean): T;

  /**
   * Called when the selection value changes.
   * @devices phone, tablet, car
   * @since 7
   */
  onChange(callback: (value: number, mode: SliderChangeMode) => void): T;
}

export declare class SliderExtend<T> extends SliderAttribute<T> {}
export declare const SliderInterface: Slider;
