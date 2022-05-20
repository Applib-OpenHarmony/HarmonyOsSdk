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

declare enum DialogAlignment {
    Top,
    Center,
    Bottom,
    Default
}
declare interface AlertDialogParam {
    title?: ResourceStr;
    message: ResourceStr;
    autoCancel?: boolean;
    cancel?: () => void;
    alignment?: DialogAlignment;
    offset?: Offset;
    gridCount?: number;
}
declare interface AlertDialogParamWithConfirm extends AlertDialogParam {
    confirm?: {
        value: ResourceStr;
        fontColor?: ResourceColor;
        backgroundColor?: ResourceColor;
        action: () => void;
    };
}
declare interface AlertDialogParamWithButtons extends AlertDialogParam {
    primaryButton: {
        value: ResourceStr;
        fontColor?: ResourceColor;
        backgroundColor?: ResourceColor;
        action: () => void;
    };
    secondaryButton: {
        value: ResourceStr;
        fontColor?: ResourceColor;
        backgroundColor?: ResourceColor;
        action: () => void;
    };
}
declare class AlertDialog {
    static show(value: AlertDialogParamWithConfirm | AlertDialogParamWithButtons);
}
