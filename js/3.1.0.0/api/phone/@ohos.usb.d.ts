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

declare namespace usb {
    /**
     * Obtains the USB device list.
     *
     * @return USB device{@link USBDevice}list.
     * @since 8
     */
    function getDevices(): Array<Readonly<USBDevice>>;

    /**
     * Connects the USB device.
     *
     * @param device USB device information from device list {@link getDevices()}.
     * @return USB device pipe {@link USBDevicePipe} for data transfer.
     * @since 8
     */
    function connectDevice(device: USBDevice): Readonly<USBDevicePipe>;

    /**
     * Checks whether the user has permission to access the device.
     *
     * @param deviceName Device name，{@link USBDevice.name}.
     * @return Returns true if the user has the permission to access the device; return false otherwise.
     * @since 8
     */
    function hasRight(deviceName: string): boolean;

    /**
     * Requests the temporary permission for the application to access the USB device.
     *
     * @param deviceName Device name，{@link USBDevice.name}.
     * @return Returns true if the temporary device access permissions are granted; return false otherwise.
     * @since 8
     */
    function requestRight(deviceName: string): Promise<boolean>;

    /**
     * Claims a USB interface.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param iface USB interface, which is used to determine the index of the interface to claim {@link USBInterface}.
     * @param force Optional parameter that determines whether to forcibly claim the USB interface. 
     * The default value is false, indicating not to forcibly claim the USB interface.
     * @return Returns 0 if the USB interface is successfully claimed; returns an error code otherwise.
     * @since 8
     */
    function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number;

    /**
     * Releases a USB interface.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param iface USB interface, which is used to determine the index of the interface to release {@link USBInterface}.
     * @return Returns 0 if the USB interface is successfully released; return an error code otherwise.
     * @since 8
     */
    function releaseInterface(pipe: USBDevicePipe, iface: USBInterface): number;

    /**
     * Set the device configuration.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param config USB configuration to set {@link USBConfig}.
     * @return Returns 0 if the USB configuration is successfully set; return an error code otherwise.
     * @since 8
     */
    function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number;

    /**
     * Sets a USB interface.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param iface USB interface to set {@link USBInterface}.
     * @return Returns 0 if the USB interface is successfully set; return an error code otherwise.
     * @since 8
     */
    function setInterface(pipe: USBDevicePipe, iface: USBInterface): number;

    /**
     * Obtains the raw USB descriptor.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @return Raw descriptor data.
     * @since 8
     */
    function getRawDescriptor(pipe: USBDevicePipe): Uint8Array;

    /**
     * Obtains the file descriptor.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @return File descriptor of the USB device.
     * @since 8
     */
    function getFileDescriptor(pipe: USBDevicePipe): number;

    /**
     * Performs control transfer.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param contrlparam control transfer parameters.
     * @param timeout Timeout duration. This parameter is optional. The default value is 0, indicating no timeout.
     * @return Returns the size of the transmitted or received data block if the control transfer is successful; 
     * return -1 if an exception occurs. 
     * @since 8
     */
    function controlTransfer(pipe: USBDevicePipe, contrlparam: USBControlParams, timeout?: number): Promise<number>;

    /**
     * Performs bulk transfer.
     *
     * @param pipe Device pipe, which is used to determine the bus number and device address {@link USBDevicePipe}.
     * @param endpoint USB endpoint, which is used to determine the USB port for data transfer {@link USBEndpoint}.
     * @param buffer Buffer for writing or reading data.
     * @param timeout Timeout duration. This parameter is optional. The default value is 0, indicating no timeout.
     * @return Returns the size of the transmitted or received data block if the control transfer is successful; 
     * return -1 if an exception occurs. 
     * @since 8
     */
    function bulkTransfer(pipe: USBDevicePipe, endpoint: USBEndpoint, buffer: Uint8Array,
        timeout?: number): Promise<number>;

    /**
     * Closes a USB device pipe.
     *
     * @param pipe USB device pipe {@link USBDevicePipe}.
     * @return Returns 0 if the USB device pipe is closed successfully; return an error code otherwise.
     * @since 8
     */
    function closePipe(pipe: USBDevicePipe): number;

    /**
     * Represents the USB endpoint from which data is sent or received.
     * You can obtain the USB endpoint through USBInterface {@link USBInterface}.
     *
     * @since 8
     */
    interface USBEndpoint {
        /**
        * Endpoint address.
        *
        * @since 8
        */
        address: number;

        /**
        * Endpoint attributes.
        *
        * @since 8
        */
        attributes: number;

        /**
        * Endpoint interval.
        *
        * @since 8
        */
        interval: number;

        /**
        * Maximun size of data packets on the endpoint.
        *
        * @since 8
        */
        maxPacketSize: number;

        /**
        * Endpoint direction.
        *
        * @since 8
        */
        direction: USBRequestDirection;

        /**
        * Endpoint number.
        *
        * @since 8
        */
        number: number;

        /**
        * Endpoint type
        *
        * @since 8
        */
        type: number;

        /**
        * Unique ID of the interface to which the endpoint belongs {@link USBInterface.id}
        *
        * @since 8
        */
        interfaceId: number;
    }


    /**
     * Represents a USB interface. One USBconfig {@link USBConfig} can contain multiple USBInterface instances, 
     * each providing a specific function.
     *
     * @since 8
     */
    interface USBInterface {
        /**
         * Unique ID of the USB interface.
         *
         * @since 8
         */
        id: number;

        /**
         * Interface protocol.
         *
         * @since 8
         */
        protocol: number;

        /**
         * Device type.
         *
         * @since 8
         */
        clazz: number;

        /**
         * Device subclass.
         *
         * @since 8
         */
        subClass: number;

        /**
         * Alternating between descripors of the same USB interface.
         *
         * @since 8
         */
        alternateSetting: number;

        /**
         * Interface name.
         *
         * @since 8
         */
        name: string;

        /**
         * Endpoints {@link USBEndpoint} that belongs to the USB interface.
         *
         * @since 8
         */
        endpoints: Array<USBEndpoint>;
    }

    /**
     * Represents the USB configuration. One USBDevice{@link USBDevice} can contain multiple USBConfig instances.
     *
     * @since 8
     */
    interface USBConfig {
        /**
         * Unique ID if the USB configuration.
         *
         * @since 8
         *
         *
         */
        id: number;

        /**
         * Configuration attributes.
         *
         * @since 8
         */
        attributes: number;

        /**
         * Maximum power consumption, in mA.
         *
         * @since 8
         */
        maxPower: number;

        /**
         * Configuration name, which can be left empty.
         *
         * @since 8
         */
        name: string;

        /**
         * Support for remote wakeup.
         *
         * @since 8
         */
        isRemoteWakeup: boolean;

        /**
         * Support for independent power supplies.
         *
         * @since 8
         */
        isSelfPowered: boolean;

        /**
         * Supported interface attributes {@link USBInterface}.
         *
         * @since 8
         */
        interfaces: Array<USBInterface>;
    }

    /**
     * Represents a USB device.
     *
     * @since 8
     */
    interface USBDevice {
        /**
         * Bus address.
         *
         * @since 8
         */
        busNum: number;
        /**
         * Device address.
         *
         * @since 8
         */
        devAddress: number;
        /**
         * Device SN.
         *
         * @since 8
         */
        serial: string;
        /**
         * Device name.
         *
         * @since 8
         */
        name: string;
        /**
         * Device manufacturer.
         *
         * @since 8
         */
        manufacturerName: string;
        /**
         * Product name.
         *
         * @since 8
         */
        productName: string;
        /**
         * Product version.
         *
         * @since 8
         */
        version: string;
        /**
         * Vendor ID.
         *
         * @since 8
         */
        vendorId: number;
        /**
         * Product ID.
         *
         * @since 8
         */
        productId: number;
        /**
         * Device class.
         *
         * @since 8
         */
        clazz: number;
        /**
         * Device subclass.
         *
         * @since 8
         */
        subClass: number;
        /**
         * Device protocol code.
         *
         * @since 8
         */
        protocol: number;
        /**
         * Device configuration descriptor information {@link USBConfig}.
         *
         * @since 8
         */
        configs: Array<USBConfig>;
    }

    /**
     * Represents a USB device pipe, which is used to determine the USB device.
     *
     * @since 8
     */
    interface USBDevicePipe {
        /**
         * Bus address.
         *
         * @since 8
         */
        busNum: number;
        /**
         * Device address.
         *
         * @since 8
         */
        devAddress: number;
    }

    /**
    * Represents control transfer parameters.
    *
    * @since 8
    */
    interface USBControlParams {
        /**
         * Request type.
         *
         * @since 8
         */
        request: number;
        /**
         * Request target tyoe.
         *
         * @since 8
         */
        target: USBRequestTargetType;
        /**
         * Request control type.
         *
         * @since 8
         */
        reqType: USBControlRequestType;
        /**
         * Request parameter value.
         *
         * @since 8
           */
        value: number;
        /**
         * Index of the parameter value.
         *
         * @since 8
         */
        index: number;
        /**
         * Data written to or read from the buffer.
         * @since 8
         */
        data: Uint8Array;
    }

    /**
     * Enumerates USB request target types.
     *
     * @since 8
     */
    enum USBRequestTargetType {
        /**
         * Device.
         *
         * @since 8
         */
        USB_REQUEST_TARGET_DEVICE = 0,
        /**
         * Interface.
         *
         * @since 8
         */
        USB_REQUEST_TARGET_INTERFACE,
        /**
         * Endpoint.
         *
         * @since 8
         */
        USB_REQUEST_TARGET_ENDPOINT,
        /**
         * Others.
         *
         * @since 8
         */
        USB_REQUEST_TARGET_OTHER
    }

    /**
     * Enumerates control request types.
     * @since 8
     */
    enum USBControlRequestType {
        /**
         * Standard.
         *
         * @since 8
         */
        USB_REQUEST_TYPE_STANDARD = 0,
        /**
         * Class.
         *
         * @since 8
         */
        USB_REQUEST_TYPE_CLASS,
        /**
         * Verdor.
         *
         * @since 8
         */
        USB_REQUEST_TYPE_VENDOR
    }

    /**
     * Enumerates request directions.
     * @since 8
     */
    enum USBRequestDirection {
        /**
         * Request for writing data from the host to the device.
         *
         * @since 8
         */
        USB_REQUEST_DIR_TO_DEVICE = 0,
        /**
         * Request for reading data from the device to the host.
         *
         * @since 8
         */
        USB_REQUEST_DIR_FROM_DEVICE = 0x80
    }
}

export default usb;
