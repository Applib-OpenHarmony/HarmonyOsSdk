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
import { Alignment } from "./enums";

/**
 * Provides ports for stacking containers.
 * @since 7
 */
interface Stack extends StackAttribute<Stack> {
  /**
   * Set the value.
   * @since 7
   */
  (value?: { alignContent?: Alignment }): Stack;
}

/**
 * @since 7
 */
declare class StackAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the occupancy of items in the container is set.
   * @since 7
   */
  alignContent(value: Alignment): T;
}

export declare class StackExtend<T> extends StackAttribute<T> {}
export declare const StackInterface: Stack;