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
import { ResourceColor } from "./units";

/**
 * Declare the type of status button
 * @since 8
 */
export declare enum ToggleType {
  /**
   * Checkbox
   * @since 8
   */
  Checkbox,

  /**
   * Switch
   * @since 8
   */
  Switch,

  /**
   * Button
   * @since 8
   */
  Button,
}

/**
 * @since 8
 */
interface Toggle extends ToggleAttribute<Toggle> {
  /**
   * Set parameters to obtain the toggle.
   * @since 8
   */
  (options: { type: ToggleType; isOn?: boolean }): Toggle;
}

/**
 * @since 8
 */
declare class ToggleAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the selected state of the component changes.
   * @since 8
   */
  onChange(callback: (isOn: boolean) => void): T;

  /**
   * Called when the color of the selected button is set.
   * @since 8
   */
  selectedColor(value: ResourceColor): T;

  /**
   * Called when the color of the selected button is set.
   * @since 8
   */
  switchPointColor(color: ResourceColor): T;
}

export declare class ToggleExtend<T> extends ToggleAttribute<T> {}
export declare const ToggleInterface: Toggle;
