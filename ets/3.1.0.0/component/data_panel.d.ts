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
 * DataPanelType enum
 * @since 8
 */
export declare enum DataPanelType {
  /**
   * Line Type
   * @since 8
   */
  Line,

  /**
   * Line Rainbow
   * @since 8
   */
  Circle,
}

/**
 * Defines the option of DataPanel.
 * @since 7
 */
export declare interface DataPanelOption {
  /**
   * Current data value. the max length is 9.
   * @since 7
   */
  values: number[];

  /**
   * Maximum value of the current data.
   * @since 7
   */
  max?: number;

  /**
   * DataPanel Type
   * @since 8
   */
  type?: DataPanelType;
}

/**
 * Defines the DataPanel component.
 * @since 7
 */
interface DataPanel extends DataPanelAttribute<DataPanel> {
  /**
   * Return a DataPanel.
   * @since 7
   */
  (options: DataPanelOption): DataPanel;
}

/**
 * Defines the DataPanel attribute functions.
 * @since 7
 */
declare class DataPanelAttribute<T> extends CommonMethod<T> {
  /**
   * Disable the special effect of the data ratio chart.
   * @since 7
   */
  closeEffect(value: boolean): T;
}

export declare class DataPanelExtend<T> extends DataPanelAttribute<T> {}
export declare const DataPanelInterface: DataPanel;
