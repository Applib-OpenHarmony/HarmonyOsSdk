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

import { Want } from "../ability/want";
import { ResultSet } from "../data/rdb/resultSet";
import { AbilityInfo } from "../bundle/abilityInfo";
import { DataAbilityResult } from "../ability/dataAbilityResult";
import { DataAbilityOperation } from "../ability/dataAbilityOperation";
import dataAbility from "../@ohos.data.dataAbility";
import rdb from "../@ohos.data.rdb";
import rpc from "../@ohos.rpc";
import resourceManager from "../@ohos.resourceManager";
import { PacMap } from "../ability/dataAbilityHelper";

/**
 * interface of app lifecycle.
 *
 * @name LifecycleApp
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
export declare interface LifecycleApp {
  /**
   * Called back when the state of an ability changes from <b>BACKGROUND</b> to <b>INACTIVE</b>.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onShow?(): void;

  /**
   * Called back when an ability enters the <b>BACKGROUND</b> state.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onHide?(): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onDestroy?(): void;

  /**
   * Called back when an ability is started for initialization.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onCreate?(): void;

  /**
   * Called when the window display mode of this ability changes, for example, from fullscreen mode
   *     to multi-window mode or from multi-window mode to fullscreen mode.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param isShownInMultiWindow Specifies whether this ability is currently in multi-window mode.
   *     The value {@code true} indicates the multi-window mode, and {@code false} indicates another mode.
   * @param newConfig Indicates the new configuration information about this Page ability.
   * @return -
   * @systemapi hide for inner use.
   */
  onWindowDisplayModeChanged?(isShownInMultiWindow: boolean, newConfig: resourceManager.Configuration): void;

  /**
   * Asks a user whether to start the migration.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return Returns {@code true} if the user allows the migration; returns {@code false} otherwise.
   */
  onStartContinuation?(): boolean;

  /**
   * Saves the user data of a local ability generated during runtime.
   * After the migration is triggered and the local ability is ready, this method is called when the Distributed
   * Scheduler Service requests data from the local ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param data Indicates the user data to save.
   * @return Returns {@code true} if the data is successfully saved; returns {@code false} otherwise.
   */
  onSaveData?(data: Object): boolean;

  /**
   * Called back when a local ability migration is complete.
   *
   * <p>You can define the processing logic after the migration is complete. For example, you can display a prompt to
   * notify the user of the successful migration and then exit the local ability.</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param result Indicates the migration result code. The value {@code 0} indicates that the migration is
   *               successful, and {@code -1} indicates that the migration fails.
   * @return -
   */
  onCompleteContinuation?(result: number): void;

  /**
   * Restores the user data saved during the migration for an ability on the remote device immediately after the
   * ability is created on the remote device. Lifecycle scheduling for the ability starts only after the user data
   * is restored.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param data Indicates the user data to restore.
   * @return -
   */
  onRestoreData?(data: Object): void;

  /**
   * Called to notify the local device when a running ability on the remote device is destroyed after a reversible
   * migration is performed for the ability from the local device to the remote device.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onRemoteTerminated?(): void;

  /**
   * This method is called when the system determines that the ability may be destroyed in an unexpected
   * situation, for example, when the screen orientation changes or the user touches the Home key. Generally,
   * this method is used only to save temporary states.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param outState Indicates the {@code PacMap} object used for storing user data and states. This
   * parameter cannot be null.
   * @return -
   */
  onSaveAbilityState?(outState: PacMap): void;

  /**
   * This method is called if an ability was destroyed at a certain time due to resource reclaim or was
   * unexpectedly destroyed and the {@link #onSaveAbilityState(PacMap)} method was called to save its user data and
   * states. Generally, this method is called after the {@link #onStart(Want)} method.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param inState Indicates the {@code PacMap} object used for storing data and states. This
   * parameter can not be null.
   * @return -
   */
  onRestoreAbilityState?(inState: PacMap): void;

  /**
   * Called back when an ability enters the <b>INACTIVE</b> state (an ability in this state is not interactive and may
   * change to the <b>BACKGROUND</b> or <b>ACTIVE</b> state).
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onInactive?(): void;

  /**
   * Called back when an ability enters the <b>ACTIVE</b> state.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onActive?(): void;

  /**
   * Called when the launch mode of an ability is set to singleton.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param want Indicates the new {@code want} containing information about the ability.
   * @return -
   */
  onNewWant?(want: Want): void;

  /**
   * Called when the system has determined to trim the memory, for example, when the ability is running in the
   * background and there is no enough memory for running as many background processes as possible.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param level Indicates the memory trim level, which shows the current memory usage status.
   * @return -
   */
  onMemoryLevel?(level: number): void;
}

/**
 * interface of service lifecycle.
 *
 * @name LifecycleService
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
export declare interface LifecycleService {
  /**
   * Called back when an ability is started for initialization (it can be called only once in the entire lifecycle of
   * an ability).
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onStart?(): void;

  /**
   * Called back when Service is started.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param want Indicates the want of Service to start.
   * @param startId Indicates the number of times the Service ability has been started. The {@code startId} is
   *     incremented by 1 every time the ability is started. For example, if the ability has been started
   *     for six times.
   * @return -
   */
  onCommand?(want: Want, startId: number): void;

  /**
   * Called back before an ability is destroyed.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @return -
   */
  onStop?(): void;

  /**
   * Called back when a Service ability is first connected to an ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param want Indicates connection information about the Service ability.
   * @return Returns the proxy of the Service ability.
   */
  onConnect?(want: Want): rpc.RemoteObject;

  /**
   * Called back when all abilities connected to a Service ability are disconnected.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param want Indicates disconnection information about the Service ability.
   * @return -
   */
  onDisconnect?(want: Want): void;

  /**
   * Called when a new client attempts to connect to a Service ability after all previous client connections to it
   * are disconnected.
   *
   * <p>The Service ability must have been started but not been destroyed, that is, {@link #startAbility} has been
   * called but {@link #terminateSelf} has not.</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param want Indicates the want of the Service ability being connected.
   * @return -
   */
  onReconnect?(want: Want): void;
}

/**
 * interface of data lifecycle.
 *
 * @name LifecycleData
 * @since 7
 * @sysCap AAFwk
 * @devices phone, tablet, tv, wearable, car
 */
export declare interface LifecycleData {
  /**
   * Updates one or more data records in the database. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the database table storing the data to update.
   * @param valueBucket Indicates the data to update. This parameter can be null.
   * @param predicates Indicates filter criteria. If this parameter is null, all data records will be updated by
   *                   default.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  update?(uri: string, valueBucket: rdb.ValuesBucket, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

  /**
   * Queries one or more data records in the database. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the database table storing the data to query.
   * @param columns Indicates the columns to be queried, in array, for example, {"name","age"}. You should define
   *                the processing logic when this parameter is null.
   * @param predicates Indicates filter criteria. If this parameter is null, all data records will be queried by
   *                   default.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  query?(uri: string, columns: Array<string>, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

  /**
   * Deletes one or more data records. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the database table storing the data to delete.
   * @param predicates Indicates filter criteria. If this parameter is null, all data records will be deleted by
   *     default.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  delete?(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

  /**
   * Converts the given {@code uri} that refer to the Data ability into a normalized URI. A normalized URI can be
   * used across devices, persisted, backed up, and restored. It can refer to the same item in the Data ability
   * even if the context has changed.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri to normalize.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  normalizeUri?(uri: string, callback: AsyncCallback<string>): void;

  /**
   * Inserts multiple data records into the database. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the position where the data is to insert.
   * @param valueBuckets Indicates the data to insert.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  batchInsert?(uri: string, valueBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void;

  /**
   * Converts the given normalized {@code uri} generated by {@link #normalizeUri(uri)} into a denormalized one.
   * The default implementation of this method returns the original uri passed to it.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri to denormalize.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  denormalizeUri?(uri: string, callback: AsyncCallback<string>): void;

  /**
   * Inserts a data record into the database. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the position where the data is to insert.
   * @param valueBucket Indicates the data to insert.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  insert?(uri: string, valueBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * Opens a file. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the path of the file to open.
   * @param mode Indicates the open mode, which can be "r" for read-only access, "w" for write-only access (erasing
   *     whatever data is currently in the file), "wt" for write access that truncates any existing file,
   *     "wa" for write-only access to append to any existing data, "rw" for read and write access on any
   *     existing data, or "rwt" for read and write access that truncates any existing file.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  openFile?(uri: string, mode: string, callback: AsyncCallback<number>): void;

  /**
   * Obtains the MIME type of files. This method should be implemented by a Data ability.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the path of the files to obtain.
   * @param mimeTypeFilter Indicates the MIME type of the files to obtain. This parameter cannot be set to {@code
   *     null}.
   *     <p>1. "&ast;/*": Obtains all types supported by a Data ability.
   *     <p>2. "image/*": Obtains files whose main type is image of any subtype.
   *     <p>3. "&ast;/jpg": Obtains files whose subtype is JPG of any main type.
   * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  getFileTypes?(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Called to carry {@code AbilityInfo} to this ability after the ability is initialized.
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param info Indicates the {@code AbilityInfo} object containing information about this ability.
   * @return -
   */
  onInitialized?(info: AbilityInfo): void;

  /**
   * Obtains the MIME type matching the data specified by the URI of the Data ability. This method should be
   * implemented by a Data ability.
   *
   * <p>Data abilities supports general data types, including text, HTML, and JPEG.</p>
   *
   * @devices phone, tablet, tv, wearable, car
   * @since 7
   * @sysCap AAFwk
   * @param uri Indicates the uri of the data.
    * @param callback function specified by framework to receive the result, developer should call this function to
   *                 return the resylt to framework.
   * @return -
   */
  getType?(uri: string, callback: AsyncCallback<string>): void;
}
