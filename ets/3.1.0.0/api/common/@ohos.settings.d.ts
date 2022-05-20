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
import { DataAbilityHelper } from './ability/dataAbilityHelper';

/**
 * This module provides settings data access abilities.
 *
 * @since 8
 * @devices phone, tablet, tv, wearable, car
 * @import import settings from '@ohos.settings'
 * @permission N/A
 */
declare namespace settings {

    /**
     * get settingsdata uri
     * @since 8
     * @param name uri parameter
     * @return settingsdata uri
     */
    function getUri(name: string): string;

    /**
     * get value from settingsdata
     * @since 8
     * @param dataAbilityHelper dataAbilityHelper instance
     * @param name name
     * @param defValue default value
     * @return settingsdata value
     */
     function getValue(dataAbilityHelper: DataAbilityHelper, name: string, defValue: string): string;

    /**
     * set settingsdata value
     * @need permission ohos.permission.WRITE_SYSTEM_SETTING
     * @since 8
     * @param dataAbilityHelper dataAbilityHelper instance
     * @param name name
     * @param value value
     * @return value set result
     */
     function setValue(dataAbilityHelper: DataAbilityHelper, name: string, value: string): boolean;

}

export default settings;
