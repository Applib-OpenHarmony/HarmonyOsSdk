/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from "./basic";

/**
 * Provides methods to operate or manage Wi-Fi.
 *
 * @since 6
 * @SysCap SystemCapability.Communication.WiFi
 * @devices phone, tablet, tv, wearable, car
 * @import import wifi from '@ohos.wifi';
 */
declare namespace wifi {
    /**
     * Enables Wi-Fi.
     *
     * @return Returns {@code true} if the operation is successful; returns {@code false} otherwise.
     *
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function enableWifi(): boolean;

    /**
     * Disables Wi-Fi.
     *
     * @return Returns {@code true} if the operation is successful; returns {@code false} otherwise.
     *
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function disableWifi(): boolean;

    /**
     * Queries the Wi-Fi status
     *
     * @return Returns {@code true} if the Wi-Fi is active; returns {@code false} otherwise.
     *
     * @since 6
     */
    function isWifiActive(): boolean;

    /**
     * Scans Wi-Fi hotspots with parameters.
     *
     * <p>This API works in asynchronous mode.</p>
     *
     * @return Returns {@code true} if the scanning is successful; returns {@code false} otherwise.
     *
     * @since 6
     */
    function scan(): boolean;

    /**
     * Obtains the hotspot information that scanned.
     *
     * @return Returns information about scanned Wi-Fi hotspots if any.
     *
     * @since 6
     */
    function getScanInfos(): Promise<Array<WifiScanInfo>>;
    function getScanInfos(callback: AsyncCallback<Array<WifiScanInfo>>): void;

    /**
     * Adds Wi-Fi connection configuration to the device.
     *
     * <p>The configuration will be updated when the configuration is added.</p>
     *
     * @return Returns {@code networkId} if the configuration is added; returns {@code -1} otherwise.
     *
     * @devices phone, tablet
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function addDeviceConfig(config: WifiDeviceConfig): Promise<number>;
    function addDeviceConfig(config: WifiDeviceConfig, callback: AsyncCallback<number>): void;

    /**
     * Connects to Wi-Fi network.
     *
     * @param networkId ID of the connected network.
     * @return Returns {@code true} if the network connection is successful; returns {@code false} otherwise.
     *
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function connectToNetwork(networkId: number): boolean;

    /**
     * Connects to Wi-Fi network.
     *
     * @param config Indicates the device configuration for connection to the Wi-Fi network.
     * @return Returns {@code true} if the network connection is successful; returns {@code false} otherwise.
     *
     * @devices phone, tablet
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function connectToDevice(config: WifiDeviceConfig): boolean;

    /**
     * Disconnects Wi-Fi network.
     *
     * @return Returns {@code true} for disconnecting network success, returns {@code false} otherwise.
     *
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    function disconnect(): boolean;

    /**
     * Calculates the Wi-Fi signal level based on the Wi-Fi RSSI and frequency band.
     *
     * @param rssi Indicates the Wi-Fi RSSI.
     * @band Indicates the Wi-Fi frequency band.
     * @return Returns Wi-Fi signal level ranging from 0 to 4.
     *
     * @since 6
     */
    function getSignalLevel(rssi: number, band: number): number;

    /**
     * Obtains information about a Wi-Fi connection.
     *
     * @return Returns the Wi-Fi connection information.
     * @since 7
     */
    function getLinkedInfo(): Promise<WifiLinkedInfo>;
    function getLinkedInfo(callback: AsyncCallback<WifiLinkedInfo>): void;

    /**
     * Checks whether a Wi-Fi connection has been set up.
     *
     * @return Returns {@code true} if a Wi-Fi connection has been set up; returns {@code false} otherwise.
     * @since 7
     */
    function isConnected(): boolean;

    /**
     * Obtains the features supported by this device.
     *
     * <p>To check whether this device supports a specified feature.
     *
     * @return Returns the features supported by this device.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function getSupportedFeatures(): number;

    /**
     * Checks whether this device supports a specified feature.
     *
     * @param featureId Indicates the ID of the feature.
     * @return Returns {@code true} if this device supports the specified feature; returns {@code false} otherwise.
     * @since 7
     */
    function isFeatureSupported(featureId: number): boolean;

    /**
     * Obtains the MAC address of a Wi-Fi device. Wi-Fi must be enabled.
     *
     * <p>The MAC address is unique and cannot be changed.
     *
     * @return Returns the MAC address of the Wi-Fi device.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function getDeviceMacAddress(): string[];

    /**
     * Obtains the IP information of a Wi-Fi connection.
     *
     * <p>The IP information includes the host IP address, gateway address, and DNS information.
     *
     * @return Returns the IP information of the Wi-Fi connection.
     * @since 7
     */
    function getIpInfo(): IpInfo;

    /**
     * Obtains the country code of this device.
     *
     * @return Returns the country code of this device.
     * @since 7
     */
    function getCountryCode(): string;

    /**
     * Re-associates to current network.
     *
     * @return {@code true} if the Wi-Fi network is re-associate successfully.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function reassociate(): boolean;

    /**
     * Re-connects to current network.
     *
     * @return {@code true} if the Wi-Fi network is re-connect successfully.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function reconnect(): boolean;

    /**
     * Obtains the list of all existing Wi-Fi configurations.
     *
     * <p>You can obtain only the Wi-Fi configurations you created on your own application.
     *
     * @return Returns the list of all existing Wi-Fi configurations you created on your application.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function getDeviceConfigs(): Array<WifiDeviceConfig>;

    /**
     * Updates the specified Wi-Fi configuration.
     *
     * @param config Indicates the Wi-Fi configuration to update.
     *
     * @return Returns the network ID in the updated Wi-Fi configuration if the update is successful;
     *     returns {@code -1} if the specified Wi-Fi configuration is not contained in the list.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function updateNetwork(config: WifiDeviceConfig): number;

    /**
     * Disables a specified network.
     *
     * <p>The disabled network will not be associated with again.
     *
     * @param netId Identifies the network to disable.
     * @return Returns {@code true} if the specified network is disabled; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function disableNetwork(netId: number): boolean;

    /**
     * Removes all the saved Wi-Fi configurations.
     *
     * @return Returns {@code true} if all the saved Wi-Fi configurations are removed;
     *     returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function removeAllNetwork(): boolean;

    /**
     * Deletes a Wi-Fi network with a specified ID.
     *
     * <p>After a Wi-Fi network is deleted, its configuration will be deleted from the list of Wi-Fi configurations.
     * If the Wi-Fi network is being connected, the connection will be interrupted.
     * The application can only delete Wi-Fi networks it has created.
     *
     * @param id Indicates the ID of the Wi-Fi network,
     *     which can be obtained using the {@link #addDeviceConfig} or {@link #getLinkedInfo} method.
     * @return Returns {@code true} if the Wi-Fi network is deleted successfully; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function removeDevice(id: number): boolean;

    /**
     * Enables a Wi-Fi hotspot.
     *
     * <p>This method is asynchronous. After the Wi-Fi hotspot is enabled, Wi-Fi may be disabled.
     *
     * @return Returns {@code true} if this method is called successfully; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function enableHotspot(): boolean;

    /**
     * Disables a Wi-Fi hotspot.
     *
     * <p>This method is asynchronous. If Wi-Fi is enabled after the Wi-Fi hotspot is disabled, Wi-Fi may be re-enabled.
     *
     * @return Returns {@code true} if this method is called successfully; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function disableHotspot(): boolean;

    /**
     * Checks whether Wi-Fi hotspot is active on a device.
     *
     * @return Returns {@code true} if Wi-Fi hotspot is enabled; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function isHotspotActive(): boolean;

    /**
     * Sets the hotspot for a device.
     *
     * <p>Only OPEN and WPA2 PSK hotspots can be configured.
     *
     * @param config Indicates the Wi-Fi hotspot configuration.
     *     The SSID and {@code securityType} must be available and correct.
     *     If {@code securityType} is not {@code open}, {@code preSharedKey} must be available and correct.
     * @return Returns {@code true} if the method is called successfully; returns {@code false} otherwise.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function setHotspotConfig(config: HotspotConfig): boolean;

    /**
     * Obtains the Wi-Fi hotspot configuration.
     *
     * @return Returns the configuration of an existing or enabled Wi-Fi hotspot.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function getHotspotConfig(): HotspotConfig;

    /**
     * Obtains the list of clients that are connected to a Wi-Fi hotspot.
     *
     * <p>This method can only be used on a device that serves as a Wi-Fi hotspot.
     *
     * @return Returns the list of clients that are connected to the Wi-Fi hotspot.
     * @since 7
     * @systemapi Hide this for inner system use.
     */
    function getStations(): Array<StationInfo>;

    /**
     * Defines the EventListener class and provides functions to subscribe or unsubscribe the Wi-Fi events.
     *
     * @since 7
     * @SysCap SystemCapability.Communication.WiFi
     * @devices phone, tablet, tv, wearable, car
     */
    export class EventListener {
        /**
         * Subscribe Wi-Fi status change events.
         *
         * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
         * @since 7
         * @permission {@code ohos.permission.GET_WIFI_INFO}
         */
         on(type: "wifiStateChange", callback: Callback<number>): void;

         /**
          * Unsubscribe Wi-Fi status change events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         off(type: "wifiStateChange", callback?: Callback<number>): void;

         /**
          * Subscribe Wi-Fi connection change events.
          *
          * @return Returns 0: disconnected, 1: connected
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         on(type: "wifiConnectionChange", callback: Callback<number>): void;

         /**
          * Unsubscribe Wi-Fi connection change events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         off(type: "wifiConnectionChange", callback?: Callback<number>): void;

         /**
          * Subscribe Wi-Fi scan status change events.
          *
          * @return Returns 0: scan fail, 1: scan success
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         on(type: "wifiScanStateChange", callback: Callback<number>): void;

         /**
          * Unsubscribe Wi-Fi scan status change events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         off(type: "wifiScanStateChange", callback?: Callback<number>): void;

         /**
          * Subscribe Wi-Fi rssi change events.
          *
          * @return Returns RSSI value in dBm
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         on(type: "wifiRssiChange", callback: Callback<number>): void;

         /**
          * Unsubscribe Wi-Fi rssi change events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
          * @permission {@code ohos.permission.GET_WIFI_INFO}
          */
         off(type: "wifiRssiChange", callback?: Callback<number>): void;

        /**
         * Subscribe Wi-Fi hotspot state change events.
         *
         * @return Returns 0: inactive, 1: active, 2: activating, 3: deactivating
         * @since 7
         */
         on(type: "hotspotStateChange", callback: Callback<number>): void;

         /**
          * Unsubscribe Wi-Fi hotspot state change events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
         */
         off(type: "hotspotStateChange", callback?: Callback<number>): void;

         /**
          * Subscribe Wi-Fi hotspot sta join events.
          *
          * @return Returns StationInfo
          * @since 7
          * @systemapi Hide this for inner system use.
          */
         on(type: "hotspotStaJoin", callback: Callback<StationInfo>): void;

         /**
          * Unsubscribe Wi-Fi hotspot sta join events.
          *
          * <p>All callback functions will be deregistered If there is no specific callback parameter.</p>
          *
          * @since 7
          * @systemapi Hide this for inner system use.
          */
         off(type: "hotspotStaJoin", callback?: Callback<StationInfo>): void;

         /**
          * Subscribe Wi-Fi hotspot sta leave events.
          *
          * @return Returns {@link #StationInfo} object
          * @since 7
          * @systemapi Hide this for inner system use.
          */
         on(type: "hotspotStaLeave", callback: Callback<StationInfo>): void;

         /**
          * Unsubscribe Wi-Fi hotspot sta leave events.
          *
          * @return Returns {@link #StationInfo} object
          * @since 7
          * @systemapi Hide this for inner system use.
          */
         off(type: "hotspotStaLeave", callback?: Callback<StationInfo>): void;
    }

    /**
     * Wi-Fi device configuration information.
     *
     * @since 6
     * @systemapi Hide this for inner system use.
     */
    interface WifiDeviceConfig {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Wi-Fi key: maximum length is 64 */
        preSharedKey: string;

        /** Hide SSID or not, false(default): not hide */
        isHiddenSsid: boolean;

        /** Security type: reference definition of WifiSecurityType */
        securityType: number;
    }

    /**
     * Describes the scanned Wi-Fi information.
     *
     * @since 6
     */
    interface WifiScanInfo {
        /** Wi-Fi SSID: the maximum length is 32 */
        ssid: string;

        /** Wi-Fi bssid(MAC): the length is 6 */
        bssid: string;

        /** Security type: reference definition of WifiSecurityType */
        securityType: number;

        /** Received signal strength indicator (RSSI) */
        rssi: number;

        /** Frequency band, 1: 2.4G, 2: 5G */
        band: number;

        /** Frequency */
        frequency: number;

        /** Time stamp */
        timestamp: number;
    }

    /**
     * Describes the wifi security type.
     *
     * @since 6
     */
    enum WifiSecurityType {
        WIFI_SEC_TYPE_INVALID = 0, /* Invalid security type */
        WIFI_SEC_TYPE_OPEN = 1, /* Open */
        WIFI_SEC_TYPE_WEP = 2, /* Wired Equivalent Privacy (WEP) */
        WIFI_SEC_TYPE_PSK = 3, /* Pre-shared key (PSK) */
        WIFI_SEC_TYPE_SAE = 4, /* Simultaneous Authentication of Equals (SAE) */
    }

    /**
     * Wi-Fi connection information.
     *
     * @since 7
     */
    interface WifiLinkedInfo {
        /** The SSID of the Wi-Fi hotspot */
        ssid: string;

        /** The BSSID of the Wi-Fi hotspot */
        bssid: string;

        /** The ID(uniquely identifies) of a Wi-Fi connection. */
        /* @systemapi */
        networkId: number;

        /** The RSSI(dBm) of a Wi-Fi access point. */
        rssi: number;

        /** The frequency band of a Wi-Fi access point. */
        band: number;

        /** The speed of a Wi-Fi access point. */
        linkSpeed: number;

        /** The frequency of a Wi-Fi access point. */
        frequency: number;

        /** Whether the SSID of the access point (AP) of this Wi-Fi connection is hidden. */
        isHidden: boolean;

        /** Whether this Wi-Fi connection restricts the data volume. */
        isRestricted: boolean;

        /** The load value of this Wi-Fi connection. A greater value indicates a higher load. */
        /* @systemapi */
        chload: number;

        /** The signal-to-noise ratio (SNR) of this Wi-Fi connection. */
        /* @systemapi */
        snr: number;

        /** The Wi-Fi MAC address of a device. */
        macAddress: string;

        /** The IP address of this Wi-Fi connection. */
        ipAddress: number;

        /** The state of the supplicant of this Wi-Fi connection. */
        /* @systemapi */
        suppState: SuppState;

        /** The state of this Wi-Fi connection. */
        connState: ConnState;
    }

    /**
     * Wi-Fi IP information.
     *
     * @since 7
     */
    interface IpInfo {
        /** The IP address of the Wi-Fi connection */
        ipAddress: number;

        /** The gateway of the Wi-Fi connection */
        gateway: number;

        /** The network mask of the Wi-Fi connection */
        netmask: number;

        /** The primary DNS server IP address of the Wi-Fi connection */
        primaryDns: number;

        /** The secondary DNS server IP address of the Wi-Fi connection */
        secondDns: number;

        /** The DHCP server IP address of the Wi-Fi connection */
        serverIp: number;

        /** The IP address lease duration of the Wi-Fi connection */
        leaseDuration: number;
    }

    /**
     * Wi-Fi hotspot configuration information.
     *
     * @since 7
     * @systemapi
     */
    interface HotspotConfig {
        /** The SSID of the Wi-Fi hotspot */
        ssid: string;

        /** The encryption mode of the Wi-Fi hotspot */
        securityType: WifiSecurityType;

        /** The frequency band of the Wi-Fi hotspot */
        band: number;

        /** The password of the Wi-Fi hotspot */
        preSharedKey: string;

        /** The maximum number of connections allowed by the Wi-Fi hotspot */
        maxConn: number;
    }

    /**
     * Wi-Fi station information.
     *
     * @since 7
     * @systemapi
     */
    interface StationInfo {
        /** the network name of the Wi-Fi client */
        name: string;

        /** The MAC address of the Wi-Fi client */
        macAddress: string;

        /** The IP address of the Wi-Fi client */
        ipAddress: string;
    }

    /**
     * The state of the supplicant enumeration.
     *
     * @since 7
     * @systemapi
     */
    export enum SuppState {
        /** The supplicant is not associated with or is disconnected from the AP. */
        DISCONNECTED,

        /** The network interface is disabled. */
        INTERFACE_DISABLED,

        /** The supplicant is disabled. */
        INACTIVE,

        /** The supplicant is scanning for a Wi-Fi connection. */
        SCANNING,

        /** The supplicant is authenticating with a specified AP. */
        AUTHENTICATING,

        /** The supplicant is associating with a specified AP. */
        ASSOCIATING,

        /** The supplicant is associated with a specified AP. */
        ASSOCIATED,

        /** The four-way handshake is ongoing. */
        FOUR_WAY_HANDSHAKE,

        /** The group handshake is ongoing. */
        GROUP_HANDSHAKE,

        /** All authentication is completed. */
        COMPLETED,

        /** Failed to establish a connection to the supplicant. */
        UNINITIALIZED,

        /** The supplicant is in an unknown or invalid state. */
        INVALID
    }

    /**
     * The state of Wi-Fi connection enumeration.
     *
     * @since 7
     */
    export enum ConnState {
        /** The device is searching for an available AP. */
        SCANNING,

        /** The Wi-Fi connection is being set up. */
        CONNECTING,

        /** The Wi-Fi connection is being authenticated. */
        AUTHENTICATING,

        /** The IP address of the Wi-Fi connection is being obtained. */
        OBTAINING_IPADDR,

        /** The Wi-Fi connection has been set up. */
        CONNECTED,

        /** The Wi-Fi connection is being torn down. */
        DISCONNECTING,

        /** The Wi-Fi connection has been torn down. */
        DISCONNECTED,

        /** Failed to set up the Wi-Fi connection. */
        UNKNOWN
    }
}

export default wifi;
