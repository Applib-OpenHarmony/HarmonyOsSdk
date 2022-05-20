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

import { CommonMethod, PixelMap } from "./common";
import { ImageFit, ImageRepeat } from "./enums";
import { Resource, ResourceColor } from "./units";

/**
 * @since 7
 */
export declare enum ImageRenderMode {
  /**
   * Render according to the original image, including colors.
   * @since 7
   */
  Original,

  /**
   * Render the image as a template image, ignoring the color information of the image.
   * @since 7
   */
  Template,
}

/**
 * @since 7
 */
export declare enum ImageInterpolation {
  /**
   * Do not use interpolated image data.
   * @since 7
   */
  None,

  /**
   * Low usage of interpolated image data.
   * @since 7
   */
  Low,

  /**
   * Interpolated image data is used moderately.
   * @since 7
   */
  Medium,

  /**
   * High usage of interpolated image data may affect the speed of image rendering.
   * @since 7
   */
  High,
}

/**
 * @since 7
 */
export declare class ImageExtend<T> extends ImageAttribute<T> {}

/**
 * @since 7
 */
interface Image extends ImageAttribute<Image> {
  /**
   * Set src to obtain images.
   * @since 7
   */
  (src: string | PixelMap | Resource): Image;
}

/**
 * @since 7
 */
declare class ImageAttribute<T> extends CommonMethod<T> {
  /**
   * Placeholder displayed on load
   * @since 7
   */
  alt(value: string | Resource): T;

  /**match Text Direction
   * @since 7
   */
  matchTextDirection(value: boolean): T;

  /**
   * Indicates whether the image follows the text direction.
   * @since 7
   */
  fitOriginalSize(value: boolean): T;

  /**
   * fill Color
   * @since 7
   */
  fillColor(value: ResourceColor): T;

  /**
   * Sets the zoom type of an image.
   * @since 7
   */
  objectFit(value: ImageFit): T;

  /**
   * Set the repeat style of the picture
   * @since 7
   */
  objectRepeat(value: ImageRepeat): T;

  /**
   * Set the auto style of the picture
   * @since 7
   */
  autoResize(value: boolean): T;

  /**
   * Sets the image rendering mode.
   * @since 7
   */
  renderMode(value: ImageRenderMode): T;

  /**
   * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
   * @since 7
   */
  interpolation(value: ImageInterpolation): T;

  /**
   * Specifies the picture decoding size.
   * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
   * @since 7
   */
  sourceSize(value: { width: number; height: number }): T;

  /**
   * Sets the synchronous or asynchronous mode for image loading.
   * The default parameter type is bool, and the default value is false.
   * @since 8
   */
  syncLoad(value: boolean): T;

  /**
   * This callback is triggered when an image is successfully loaded.
   * The size of the image source that is successfully loaded is returned, in pixels.
   * @since 7
   */
  onComplete(
    callback: (event?: {
      width: number;
      height: number;
      componentWidth: number;
      componentHeight: number;
      loadingStatus: number;
    }) => void,
  ): T;

  /**
   * This callback is triggered when an exception occurs during image loading.
   * @since 7
   */
  onError(callback: (event?: { componentWidth: number; componentHeight: number }) => void): T;

  /**
   * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
   * If the svg image is a wireless loop image, this callback is not triggered.
   * @since 7
   */
  onFinish(event: () => void): T;
}

/**
 * @devices phone, tablet, car
 * @since 7
 */
export declare const ImageInterface: Image;
