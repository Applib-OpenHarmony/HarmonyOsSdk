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

interface XComponent extends XComponentAttribute<XComponent> {
    (value: {
        id: string;
        type: string;
        libraryname: string;
        source: string;
    }): XComponent;
}
declare class XComponentAttribute<T> extends CommonMethod<T> {
    onLoad(callback: (event?: {}) => void): T;
    onDestroy(event: () => void): T;
}
declare class XComponentExtend<T> extends XComponentAttribute<T> {
}
declare const XComponent: XComponent;
