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
 * ItemState
 * @devices phone, tablet, car
 * @since 8
 */
export declare enum ItemState {
  /**
   * Default State
   * @devices phone, tablet, car
   * @since 8
   */
  Normal,

  /**
   * Disabled State
   * @devices phone, tablet, car
   * @since 8
   */
  Disabled,

  /**
   * Waiting State
   * @devices phone, tablet, car
   * @since 8
   */
  Waiting,

  /**
   * Skip State
   * @devices phone, tablet, car
   * @since 8
   */
  Skip,
}

/**
 * @devices phone, tablet, car
 * @since 8
 */
export declare class StepperItemExtend<T> extends StepperItemAttribute<T> {}

/**
 * Provides an interface for switching the stepperItem view on stepper container.
 * @devices phone, tablet, car
 * @since 8
 */
interface StepperItem extends StepperItemAttribute<StepperItem> {
  /**
   * Called when the stepperItem component is used.
   * @devices phone, tablet, car
   * @since 8
   */
  (): StepperItem;
}

/**
 * @devices phone, tablet, car
 * @since 8
 */
declare class StepperItemAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the value of stepperItem prevLabel is set
   * @devices phone, tablet, car
   * @since 8
   */
  prevLabel(value: string): T;

  /**
   * Called when the value of stepperItem nextLabel is set
   * @devices phone, tablet, car
   * @since 8
   */
  nextLabel(value: string): T;

  /**
   * Called when the value of stepperItem status is set
   * @devices phone, tablet, car
   * @since 8
   */
  status(value?: ItemState): T;
}

/**
 * @devices phone, tablet, car
 * @since 8
 */
export declare const StepperItemInterface: StepperItem;
