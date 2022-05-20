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

import { Color, FontStyle, FontWeight } from "./enums";

/**
 * Defines the data type of the interface restriction.
 * @since 7
 */
export declare interface Resource {
  /**
   * Set id.
   * @since 7
   */
  readonly id: number;

  /**
   * Set type.
   * @since 7
   */
  readonly type: number;

  /**
   * Set params.
   * @since 7
   */
  readonly params?: any[];
}

/**
 * Defines the length property with string, number and resource unit.
 * @since 7
 */
export declare type Length = string | number | Resource;

/**
 * Defines the string which can use resource.
 * @since 7
 */
export declare type ResourceStr = string | Resource;

/**
 * Defines the padding property.
 * @since 7
 */
export declare type Padding = {
  /**
   * top property.
   */
  top?: Length;

  /**
   * right property.
   */
  right?: Length;

  /**
   * bottom property.
   */
  bottom?: Length;

  /**
   * left property.
   */
  left?: Length;
};

/**
 * Defines the margin property.
 * @since 7
 */
export declare type Margin = Padding;

/**
 * Defines the offset property.
 * @since 7
 */
export declare type Offset = {
  /**
   * dx property.
   */
  dx: Length;

  /**
   * dy property.
   */
  dy: Length;
};

/**
 * Defines the color which can use resource.
 * @since 7
 */
export declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the font used for text.
 * @since 7
 */
export declare interface Font {
  /**
   * font size.
   */
  size?: Length;

  /**
   * font weight.
   */
  weight?: FontWeight | number | string;

  /**
   * font family.
   */
  family?: string | Resource;

  /**
   * font style.
   */
  style?: FontStyle;
}

/**
 * Defines the area property.
 * @since 8
 */
export declare interface Area {
  /**
   * Defines the width property.
   * @since 8
   */
  width: Length;

  /**
   * Defines the height property.
   * @since 8
   */
  height: Length;

  /**
   * Defines the local position.
   * @since 8
   */
  pos: Position;

  /**
   * Defines the global position.
   * @since 8
   */
  globalPos: Position;
}

/**
 * Defines the position.
 * @since 8
 */
export declare interface Position {
  /**
   * Coordinate x of the Position.
   * @since 8
   */
  x: Length;
  /**
   * Coordinate y of the Position.
   * @since 8
   */
  y: Length;
}
