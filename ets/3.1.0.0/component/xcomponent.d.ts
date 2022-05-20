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
 * @since 8
 */
interface XComponent extends XComponentAttribute<XComponent> {
  (value: {
      id: string;
      type: string;
      libraryname: string;
      source: string;
  }): XComponent;
}

/**
 * @since 8
 */
declare class XComponentAttribute<T> extends CommonMethod<T> {
  /**
   * Called when judging whether the xcomponent surface is created.
   * @since 8
   */
   onLoad(callback: (event?: {}) => void): T;

  /**
   * Called when judging whether the xcomponent is destroyed.
   * @since 8
   */
   onDestroy(event: () => void): T;
}

export declare class XComponentExtend<T> extends XComponentAttribute<T> {}
export declare const XComponentInterface: XComponent;
