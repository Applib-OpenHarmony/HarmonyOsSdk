/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

/**
 * Provides methods to get power consumption information.
 *
 * @syscap SystemCapability.PowerManager.BatteryStatistics
 * @systemapi
 * @since 8
 */
declare namespace batteryStats {
    /**
     * Describes the consumption type.
     *
     * @systemapi
     * @since 8
     */
    export enum ConsumptionType {
        /** Indicates an invalid consumption type */
        CONSUMPTION_TYPE_INVALID = -17,

        /** Indicates the battery power consumption generated by APP */
        CONSUMPTION_TYPE_APP,

        /** Indicates the battery power consumption generated by bluetooth */
        CONSUMPTION_TYPE_BLUETOOTH,

        /** Indicates the battery power consumption generated when the CPU is idle */
        CONSUMPTION_TYPE_IDLE,

        /** Indicates the battery power consumption generated when phone call is active */
        CONSUMPTION_TYPE_PHONE,

        /** Indicates the battery power consumption generated by radio */
        CONSUMPTION_TYPE_RADIO,

        /** Indicates the battery power consumption generated by screen */
        CONSUMPTION_TYPE_SCREEN,

        /** Indicates the battery power consumption generated by user */
        CONSUMPTION_TYPE_USER,

        /** Indicates the battery power consumption generated by WIFI */
        CONSUMPTION_TYPE_WIFI
    }

    /**
     * Obtains the power consumption information list.
     *
     * @return Returns power consumption information list of a device.
     * @systemapi
     * @since 8
     */
    function getBatteryStats(): Promise<Array<BatteryStatsInfo>>;
    function getBatteryStats(callback: AsyncCallback<Array<BatteryStatsInfo>>): void;

    /**
     * Obtains power consumption information(Mah) for a given uid.
     *
     * @param uid Indicates the uid.
     * @return Returns power consumption information(Mah).
     * @systemapi
     * @since 8
     */
    function getAppPowerValue(uid: number): number;

    /**
     * Obtains power consumption information(Percent) for a given uid.
     *
     * @param uid Indicates the uid.
     * @return Returns power consumption information(Percent).
     * @systemapi
     * @since 8
     */
    function getAppPowerPercent(uid: number): number;

    /**
     * Obtains power consumption information(Mah) for a given type.
     *
     * @param ConsumptionType Indicates the hardware type.
     * @return Returns power consumption information(Mah).
     * @systemapi
     * @since 8
     */
    function getHardwareUnitPowerValue(type: ConsumptionType): number;

    /**
     * Obtains power consumption information(Percent) for a given type.
     *
     * @param ConsumptionType Indicates the hardware type.
     * @return Returns power consumption information(Percent).
     * @systemapi
     * @since 8
     */
    function getHardwareUnitPowerPercent(type: ConsumptionType): number;

    /**
     * Contains power consumption information of a device.
     *
     * <p>Power consumption information includes the uid, type and power consumption value.
     *
     * @systemapi
     * @since 8
     */
    interface BatteryStatsInfo {
        /** The uid related with the power consumption info. */
        uid: number;

        /** The type related with the power consumption info. */
        type: ConsumptionType;

        /** The power consumption value(mah). */
        power: number;
    }
}
export default batteryStats;