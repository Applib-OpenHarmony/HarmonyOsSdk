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

declare enum NavigationTitleMode {
    Free = 0,
    Full,
    Mini
}
declare interface NavigationMenuItem {
    value: string;
    icon?: string;
    action?: () => void;
}
interface Navigation extends NavigationAttribute<Navigation> {
    (): Navigation;
}
declare class NavigationAttribute<T> extends CommonMethod<T> {
    title(value: string | CustomBuilder): T;
    subTitle(value: string): T;
    hideTitleBar(value: boolean): T;
    hideBackButton(value: boolean): T;
    titleMode(value: NavigationTitleMode): T;
    menus(value: Array<NavigationMenuItem> | CustomBuilder): T;
    toolBar(value: object | CustomBuilder): T;
    hideToolBar(value: boolean): T;
    onTitleModeChanged(callback: (titleMode: NavigationTitleMode) => void): T;
}
declare class NavigationExtend<T> extends NavigationAttribute<T> {
}
declare const Navigation: Navigation;
