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

interface ImageAnimator extends ImageAnimatorAttribute<ImageAnimator> {
    (): ImageAnimator;
}
declare class ImageAnimatorAttribute<T> extends CommonMethod<T> {
    images(value: Array<{
        src: string;
        width?: number | string;
        height?: number | string;
        top?: number | string;
        left?: number | string;
        duration?: number;
    }>): T;
    state(value: AnimationStatus): T;
    duration(value: number): T;
    reverse(value: boolean): T;
    fixedSize(value: boolean): T;
    preDecode(value: number): T;
    fillMode(value: FillMode): T;
    iterations(value: number): T;
    onStart(event: () => void): T;
    onPause(event: () => void): T;
    onRepeat(event: () => void): T;
    onCancel(event: () => void): T;
    onFinish(event: () => void): T;
}
declare class ImageAnimatorExtend<T> extends ImageAnimatorAttribute<T> {
}
declare const ImageAnimator: ImageAnimator;
