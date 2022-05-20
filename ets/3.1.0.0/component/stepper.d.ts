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

/**
 * Declare the stepper.

 * @since 8
 */
interface Stepper extends StepperAttribute<Stepper> {
  /**
   * Called when the stepper component is used.

   * @since 8
   */
  (value?: { index?: number }): Stepper;
}

/**
 * Defines the stepper attribute functions
 * @since 8
 */
declare class StepperAttribute<T> extends CommonMethod<T> {
  /**
   * Callback when the finish label is clicked.

   * @since 8
   */
  onFinish(callback: () => void): T;

  /**
   * Callback when the skip label is clicked.

   * @since 8
   */
  onSkip(callback: () => void): T;

  /**
   * Callback when the change label is clicked.

   * @since 8
   */
  onChange(callback: (prevIndex?: number, index?: number) => void): T;

  /**
   * Callback when the next label is clicked.

   * @since 8
   */
  onNext(callback: (index?: number, pendingIndex?: number) => void): T;

  /**
   * Callback when the previous label is clicked.

   * @since 8
   */
  onPrevious(callback: (index?: number, pendingIndex?: number) => void): T;
}

export declare class StepperExtend<T> extends StepperAttribute<T> {}
export declare const StepperInterface: Stepper;
