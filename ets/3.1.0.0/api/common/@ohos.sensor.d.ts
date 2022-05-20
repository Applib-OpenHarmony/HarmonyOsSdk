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
import { AsyncCallback } from './basic';

/**
 * This module provides the capability to subscribe to sensor data.
 *
 * @since 8
 * @sysCap SystemCapability.Sensors.Sensor
 * @devices phone, tablet
 * @import import sensor from '@ohos.sensor'
 * @permission ohos.permission.ACCELEROMETER, ohos.permission.GRYOSCOPE,
 *             ohos.permission.ACTIVITY_MOTION, ohos.permission.HEALTH_DATA
 */
declare namespace sensor {
    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.ACCELEROMETER
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: AsyncCallback<AccelerometerResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.ACCELEROMETER
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: AsyncCallback<AccelerometerUncalibratedResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: AsyncCallback<LightResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: AsyncCallback<AmbientTemperatureResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_BAROMETER}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: AsyncCallback<BarometerResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GRAVITY}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: AsyncCallback<GravityResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.GRYOSCOPE
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: AsyncCallback<GyroscopeResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.GRYOSCOPE
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: AsyncCallback<GyroscopeUncalibratedResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HALL}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_HALL, callback: AsyncCallback<HallResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HEART_RATE}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.HEALTH_DATA
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: AsyncCallback<HeartRateResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HUMIDITY}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: AsyncCallback<HumidityResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.ACCELEROMETER
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: AsyncCallback<LinearAccelerometerResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: AsyncCallback<MagneticFieldResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: AsyncCallback<MagneticFieldUncalibratedResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ORIENTATION}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: AsyncCallback<OrientationResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PEDOMETER}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.ACTIVITY_MOTION
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: AsyncCallback<PedometerResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission ohos.permission.ACTIVITY_MOTION
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: AsyncCallback<PedometerDetectionResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PROXIMITY}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: AsyncCallback<ProximityResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: AsyncCallback<RotationVectorResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: AsyncCallback<SignificantMotionResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data, If the API is called multiple times, the last call takes effect.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_WEAR_DETECTION}.
     * @param options Optional parameters specifying the interval at which sensor data is reported, {@code Options}.
     * @permission N/A
     * @since 8
     */
    function on(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: AsyncCallback<WearDetectionResponse>,
        options?: Options): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER}.
     * @permission ohos.permission.ACCELEROMETER
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER, callback: AsyncCallback<AccelerometerResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED}.
     * @permission ohos.permission.ACCELEROMETER
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED, callback: AsyncCallback<AccelerometerUncalibratedResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback: AsyncCallback<LightResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback: AsyncCallback<AmbientTemperatureResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_BAROMETER}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_BAROMETER, callback: AsyncCallback<BarometerResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GRAVITY}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_GRAVITY, callback: AsyncCallback<GravityResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE}.
     * @permission ohos.permission.GYROSCOPE
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE, callback: AsyncCallback<GyroscopeResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED}.
     * @permission ohos.permission.GYROSCOPE
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED, callback: AsyncCallback<GyroscopeUncalibratedResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HALL}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_HALL, callback: AsyncCallback<HallResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HEART_RATE}.
     * @permission ohos.permission.HEART_RATE
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_HEART_RATE, callback: AsyncCallback<HeartRateResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_HUMIDITY}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_HUMIDITY, callback: AsyncCallback<HumidityResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION}.
     * @permission ohos.permission.ACCELERATION
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_LINEAR_ACCELERATION, callback: AsyncCallback<LinearAccelerometerResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, callback: AsyncCallback<MagneticFieldResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED, callback: AsyncCallback<MagneticFieldUncalibratedResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ORIENTATION}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_ORIENTATION, callback: AsyncCallback<OrientationResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PEDOMETER}.
     * @permission ohos.permission.ACTIVITY_MOTION
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER, callback: AsyncCallback<PedometerResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION}.
     * @permission ohos.permission.ACTIVITY_MOTION
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_PEDOMETER_DETECTION, callback: AsyncCallback<PedometerDetectionResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_PROXIMITY}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_PROXIMITY, callback: AsyncCallback<ProximityResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback: AsyncCallback<RotationVectorResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_SIGNIFICANT_MOTION, callback: AsyncCallback<SignificantMotionResponse>): void;

    /**
     * Subscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType.SENSOR_TYPE_ID_WEAR_DETECTION}.
     * @permission N/A
     * @since 8
     */
    function once(type: SensorType.SENSOR_TYPE_ID_WEAR_DETECTION, callback: AsyncCallback<WearDetectionResponse>): void;

    /**
     * Unsubscribe to sensor data once.
     * @param type Indicate the sensor type to listen for, {@code SensorType}.
     * @permission N/A
     * @since 8
     */
    function off(type: SensorType, callback: AsyncCallback<void>): void;

    /**
     * Indicates geographic location.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface LocationOptions {
        latitude: number;
        longitude: number;
        altitude: number;
    }

    /**
     * Indicates geomagnetic field data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface GeomagneticResponse {
        x: number;
        y: number;
        z: number;
        geomagneticDip: number;
        deflectionAngle: number;
        levelIntensity: number;
        totalIntensity: number;
    }

   /**
   * Implements the calculation of the geomagnetic field at a specific location on Earth.
   *
   * @param LocationOptions Indicates geographic location, {@code LocationOptions}.
   * @param timeMillis Indicates the time at which the magnetic declination is to be obtained, in milliseconds
   * since the Unix epoch.
   * @return Returns the geomagnetic field data, {@code GeomagneticResponse}.
   * @since 8
   */
    function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number, callback: AsyncCallback<GeomagneticResponse>): void;
    function getGeomagneticField(locationOptions: LocationOptions, timeMillis: number): Promise<GeomagneticResponse>;

    /**
     * Subscribe to the sensor's optional parameters.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface Options {
        interval?: number; /**< Sensor event reporting event interval */
    }

    /**
     * The type of sensor.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    enum SensorType {
        SENSOR_TYPE_ID_ACCELEROMETER = 1,          /**< Acceleration sensor */
        SENSOR_TYPE_ID_GYROSCOPE = 2,              /**< Gyroscope sensor */
        SENSOR_TYPE_ID_AMBIENT_LIGHT = 5,          /**< Ambient light sensor */
        SENSOR_TYPE_ID_MAGNETIC_FIELD = 6,         /**< Magnetic field sensor */
        SENSOR_TYPE_ID_BAROMETER = 8,              /**< Barometric pressure sensor */
        SENSOR_TYPE_ID_HALL = 10,                  /**< Hall effect sensor */
        SENSOR_TYPE_ID_PROXIMITY = 12,             /**< Proximity sensor */
        SENSOR_TYPE_ID_HUMIDITY = 13,              /**< Humidity sensor */
        SENSOR_TYPE_ID_ORIENTATION = 256,          /**< Orientation sensor */
        SENSOR_TYPE_ID_GRAVITY = 257,              /**< Gravity sensor */
        SENSOR_TYPE_ID_LINEAR_ACCELERATION = 258,  /**< Linear acceleration sensor */
        SENSOR_TYPE_ID_ROTATION_VECTOR = 259,      /**< Rotation vector sensor */
        SENSOR_TYPE_ID_AMBIENT_TEMPERATURE = 260,  /**< Ambient temperature sensor */
        SENSOR_TYPE_ID_MAGNETIC_FIELD_UNCALIBRATED = 261,  /**< Uncalibrated magnetic field sensor */
        SENSOR_TYPE_ID_GYROSCOPE_UNCALIBRATED = 263,  /**< Uncalibrated gyroscope sensor */
        SENSOR_TYPE_ID_SIGNIFICANT_MOTION = 264,    /**< Significant motion sensor */
        SENSOR_TYPE_ID_PEDOMETER_DETECTION = 265,   /**< Pedometer detection sensor */
        SENSOR_TYPE_ID_PEDOMETER = 266,             /**< Pedometer sensor */
        SENSOR_TYPE_ID_HEART_RATE = 278,            /**< Heart rate sensor */
        SENSOR_TYPE_ID_WEAR_DETECTION = 280,        /**< Wear detection sensor */
        SENSOR_TYPE_ID_ACCELEROMETER_UNCALIBRATED = 281,   /**< Uncalibrated acceleration sensor */
    }

    /**
     * The basic data structure of the sensor event.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface Response {
        timestamp: number; /**< The timestamp of the reported sensor data */
    }

    /**
     * Acceleration sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface AccelerometerResponse extends Response {
        x: number; /**< Acceleration x-axis component */
        y: number; /**< Acceleration y-axis component */
        z: number; /**< Acceleration z-axis component */
    }

    /**
     * Linear acceleration sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface LinearAccelerometerResponse extends Response{
        x: number; /**< Linear acceleration x-axis component */
        y: number; /**< Linear acceleration y-axis component */
        z: number; /**< Linear acceleration z-axis component */
    }

    /**
     * Acceleration uncalibrated sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface AccelerometerUncalibratedResponse extends Response {
        x: number; /**< Acceleration uncalibrated x-axis component */
        y: number; /**< Acceleration uncalibrated y-axis component */
        z: number; /**< Acceleration uncalibrated z-axis component */
        biasX: number; /**< Acceleration uncalibrated x-axis offset */
        biasY: number; /**< Acceleration uncalibrated y-axis offset */
        biasZ: number; /**< Acceleration uncalibrated z-axis offset */
    }

    /**
     * Gravity sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface GravityResponse extends Response {
        x: number; /**< Gravity x-axis component */
        y: number; /**< Gravity y-axis component */
        z: number; /**< Gravity z-axis component */
    }

    /**
     * Orientation sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface OrientationResponse extends Response {
        x: number; /**< Orientation x-axis component */
        y: number; /**< Orientation y-axis component */
        z: number; /**< Orientation z-axis component */
    }

    /**
     * Rotation vector sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface RotationVectorResponse extends Response {
        x: number; /**< Rotation vector x-axis component */
        y: number; /**< Rotation vector y-axis component */
        z: number; /**< Rotation vector z-axis component */
    }

    /**
     * Gyroscope sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface GyroscopeResponse extends Response {
        x: number; /**< Gyroscope x-axis component */
        y: number; /**< Gyroscope y-axis component */
        z: number; /**< Gyroscope z-axis component */
    }

    /**
     * Gyroscope uncalibrated sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface GyroscopeUncalibratedResponse extends Response {
        x: number; /**< Gyroscope uncalibrated x-axis component */
        y: number; /**< Gyroscope uncalibrated y-axis component */
        z: number; /**< Gyroscope uncalibrated z-axis component */
        biasX: number; /**< Gyroscope uncalibrated x-axis offset */
        biasY: number; /**< Gyroscope uncalibrated y-axis offset */
        biasZ: number; /**< Gyroscope uncalibrated z-axis offset */
    }

    /**
     * Significant motion sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface SignificantMotionResponse extends Response {
        scalar: number; /**< The degree of significant motion */
    }

    /**
     * Proximity sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface ProximityResponse extends Response {
        distance: number; /**< Indicates the degree of proximity, event 0 indicates proximity, while 1 indicates distance */
    }

    /**
     * Light sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface LightResponse extends Response {
        intensity: number; /**< Indicates light intensity, in lux */
    }

    /**
     * Hall sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface HallResponse extends Response {
        status: number; /**< Indicates hall status, event 0 indicates open, while 1 indicates close*/
    }

    /**
     * Magnetic field sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface MagneticFieldResponse extends Response {
        x: number; /**< Magnetic field x-axis component */
        y: number; /**< Magnetic field y-axis component */
        z: number; /**< Magnetic field z-axis component */
    }

    /**
     * Magnetic field uncalibrated sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface MagneticFieldUncalibratedResponse extends Response {
        x: number; /**< Magnetic field uncalibrated x-axis component */
        y: number; /**< Magnetic field uncalibrated y-axis component */
        z: number; /**< Magnetic field uncalibrated z-axis component */
        biasX: number; /**< Magnetic field uncalibrated x-axis offset */
        biasY: number; /**< Magnetic field uncalibrated y-axis offset */
        biasZ: number; /**< Magnetic field uncalibrated z-axis offset */
    }

    /**
     * Pedometer sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface PedometerResponse extends Response {
        steps: number; /**< Indicates the number of steps */
    }

    /**
     * Humidity sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface HumidityResponse extends Response {
        humidity: number; /**< Indicates the number of humidity */
    }

    /**
     * Pedometer detection sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface PedometerDetectionResponse extends Response {
        scalar: number; /**< Indicates the pedometer detection status, 1 indicates that a walking action has occurred, and 0 indicates that no movement has occurred */
    }

    /**
     * Ambient temperature sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface AmbientTemperatureResponse extends Response {
        temperature: number; /**< Indicates ambient temperature, in celsius */
    }

    /**
     * Barometer sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface BarometerResponse extends Response {
        pressure: number; /**< Indicates the number of barometer, in pascal */
    }

    /**
     * Heart rate sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface HeartRateResponse extends Response {
        heartRate: number; /**< Indicates the number of heart rate */
    }

    /**
     * Wear detection sensor event data.
     * @devices phone, tablet
     * @sysCap SystemCapability.Sensors.Sensor
     */
    interface WearDetectionResponse extends Response {
        value: number; /**< Indicates the status of wear detection, 1 for wearing, 0 for wearing not */
    }
 }

 export default sensor;