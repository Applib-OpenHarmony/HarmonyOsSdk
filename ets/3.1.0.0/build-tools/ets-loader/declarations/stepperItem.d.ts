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

declare enum ItemState {
    Normal,
    Disabled,
    Waiting,
    Skip
}
declare class StepperItemExtend<T> extends StepperItemAttribute<T> {
}
interface StepperItem extends StepperItemAttribute<StepperItem> {
    (): StepperItem;
}
declare class StepperItemAttribute<T> extends CommonMethod<T> {
    prevLabel(value: string): T;
    nextLabel(value: string): T;
    status(value?: ItemState): T;
}
declare const StepperItem: StepperItem;
