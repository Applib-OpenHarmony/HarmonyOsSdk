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

import { CommonMethod, CustomBuilder } from "./common";
import { Resource } from "./units";

/**
 * Provides an interface for switching the content view on a tab page.
 * @since 7
 */
interface TabContent extends TabContentAttribute<TabContent> {
  /**
   * Called when the content view of the switch tab is set.
   * @since 7
   */
  (): TabContent;
}

/**
 * Defines the attribute functions of TabContent.
 * @since 7
 */
declare class TabContentAttribute<T> extends CommonMethod<T> {
  /**
   * Called when tabbar is entered.
   * @since 7
   */
  tabBar(value: string | Resource | CustomBuilder |
    { icon?: string | Resource; text?: string | Resource }): T;
}

export declare class TabContentExtend<T> extends TabContentAttribute<T> {}
export declare const TabContentInterface: TabContent;
