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

import { Resource } from '.';
import { CommonMethod } from "./common";
import { FontWeight, FontStyle } from "./enums";
import { Length, ResourceColor, ResourceStr } from "./units";

/**
 * Provides a button component.
 * @since 7
 */
export declare enum ButtonType {
  /**
   * Capsule button (rounded corners default to half the height).
   * @since 7
   */
  Capsule,

  /**
   * Round buttons.
   * @since 7
   */
  Circle,

  /**
   * Common button (no rounded corners by default).
   * @since 7
   */
  Normal,
}

/**
 * Defines the button options.
 * @since 7
 */
export declare interface ButtonOption {
  /**
   * Describes the button style.
   * @since 7
   */
  type?: ButtonType;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @since 7
   */
  stateEffect?: boolean;
}

/**
 * Defines the Button Component.
 * @since 7
 */
interface Button extends ButtonAttribute<Button> {
  /**
   * Button object
   * @since 7
   */
  (): Button;

  /**
   * Create Button with Text child.
   * @since 7
   */
  (options: ButtonOption): Button;

  /**
   * Create Button with inner text label.
   * @since 7
   */
  (label: ResourceStr, options?: ButtonOption): Button;
}

/**
 * Defines the button attribute functions.
 * @since 7
 */
declare class ButtonAttribute<T> extends CommonMethod<T> {
  /**
   * Describes the button style.
   * @since 7
   */
  type(value: ButtonType): T;

  /**
   * Indicates whether to enable the switchover effect when the button is pressed. When the status is set to false, the switchover effect is disabled.
   * @since 7
   */
  stateEffect(value: boolean): T;

  /**
   * Text color.
   * @since 7
   */
  fontColor(value: ResourceColor): T;

  /**
   * Text size.
   * @since 7
   */
  fontSize(value: Length): T;

  /**
   * Font weight.
   * @since 7
   */
  fontWeight(value: number | FontWeight | string): T;

  /**
   * Font style.
   * @since 8
   */
  fontStyle(value: FontStyle): T;

  /**
   * Font family.
   * @since 8
   */
  fontFamily(value: string | Resource): T;
}

export declare class ButtonExtend<T> extends ButtonAttribute<T> {}
export declare const ButtonInterface: Button;
