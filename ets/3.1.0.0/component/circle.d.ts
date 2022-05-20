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

import { CommonShapeMethod } from "./common";

/**
 * Defines circle option for Circle component.
 * @since 7
 */
export declare interface CircleOption {
  /**
   * Defines the width property.
   * @since 7
   */
  width?: string | number;

  /**
   * Defines the height property.
   * @since 7
   */
  height?: string | number;
}

/**
 * Defines circle component.
 * @since 7
 */
interface Circle extends CircleAttribute<Circle> {
  /**
   * use new function to set the value.
   * @since 7
   */
  new (value?: CircleOption): Circle;

  /**
   * Set the value..
   * @since 7
   */
  (value?: CircleOption): Circle;
}

/**
 * Circle drawing component attribute functions.
 * @since 7
 */
declare class CircleAttribute<T> extends CommonShapeMethod<T> {}

export declare class CircleExtend<T> extends CircleAttribute<T> {}
export declare const CircleInterface: Circle;
