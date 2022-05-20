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
 * Provides an interface for generating QR codes.
 * @since 7
 */
interface QRCode extends QRCodeAttribute<QRCode> {
  /**
   * Called when a QR code is set.
   * @since 7
   */
  (value: string): QRCode;
}

/**
 * @since 7
 */
declare class QRCodeAttribute<T> extends CommonMethod<T> {
  /**
   * Called when the QR code color is set.
   * @since 7
   */
  color(value: ResourceColor): T;

  /**
   * Called when setting the QR code background color.
   * @since 7
   */
  backgroundColor(value: ResourceColor): T;
}

export declare class QRCodeExtend<T> extends QRCodeAttribute<T> {}
export declare const QRCodeInterface: QRCode;
