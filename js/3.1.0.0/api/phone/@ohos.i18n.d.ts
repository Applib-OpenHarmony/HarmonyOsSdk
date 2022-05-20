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

/**
 * Provides international settings related APIs.
 *
 * @sysCap SystemCapability.I18N
 * @since 7
 * @devices phone, tablet, tv, wearable, car
 */
declare namespace i18n {
/**
 * Obtains the country or region name localized for display on a given locale.
 *
 * @sysCap SystemCapability.I18N
 * @param country The locale whose country or region name will be displayed.
 * @param locale The locale used to display the country or region.
 * @param sentenceCase Specifies whether the country or region name is displayed in sentence case.
 * @return Returns the country or region name localized for display on a given locale.
 * @since 7
 */
export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string;

/**
 * Obtains the language name localized for display on a given locale.
 *
 * @sysCap SystemCapability.I18N
 * @param language The locale whose language name will be displayed.
 * @param locale The locale used to display the language.
 * @param sentenceCase Specifies whether the language name is displayed in sentence case.
 * @return Returns the language name localized for display on a given locale.
 * @since 7
 */
export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string;

/**
 * Obtain all languages supported by the system.
 *
 * @sysCap SystemCapability.I18N
 * @return Returns all languages supported by the system.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function getSystemLanguages(): Array<string>;

/**
 * Obtain all regions supported by the system in the language.
 *
 * @sysCap SystemCapability.I18N
 * @param language The language used to get the list of regions.
 * @return Returns all regions supported by the system in the language.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function getSystemCountries(language: string): Array<string>;

/**
 * Determine whether the current language or region is recommended.
 *
 * @sysCap SystemCapability.I18N
 * @param language The language code.
 * @param region The region code.
 * @return Returns whether the current language or region is recommended.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function isSuggested(language: string, region?: string): boolean;

/**
 * Obtain the language currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @return Returns the language currently used by the system.
 * @since 7
 */
export function getSystemLanguage(): string;

/**
 * Set the language currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @param language The language to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemLanguage(language: string): boolean;

/**
 * Obtain the region currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @return Returns the region currently used by the system.
 * @since 7
 */
export function getSystemRegion(): string;

/**
 * Set the region currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @param region The region to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemRegion(region: string): boolean;

/**
 * Obtain the locale currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @return Returns the locale currently used by the system.
 * @since 7
 */
export function getSystemLocale(): string;

/**
 * Set the locale currently used by the system.
 *
 * @sysCap SystemCapability.I18N
 * @param locale The locale to be used.
 * @since 7
 * @systemapi Hide this for inner system use.
 */
export function setSystemLocale(locale: string): boolean;

/**
 * Provides util functions.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export interface Util {
    /**
     * Convert from unit to to unit and format according to the locale.
     *
     * @sysCap SystemCapability.I18N
     * @param fromUnit Information of the unit to be converted.
     * @param toUnit Information about the unit to be converted to.
     * @param value Indicates the number to be formatted.
     * @param locale The locale to be used.
     * @param style The style of format.
     * @since 8
     */
    unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: number, locale: string, style?: string): string;
}

/**
 * Provides the options of unit.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export interface UnitInfo {
    /**
     * Unit name.
     */
    unit: string

    /**
     * The measurement system of the unit.
     */
    measureSystem: string
}

/**
 * Provides the options of PhoneNumberFormat.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export interface PhoneNumberFormatOptions {
    /**
     * Indicates the type to format phone number.
     */
    type: string;
}

/**
 * Provides the API for formatting phone number strings
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export class PhoneNumberFormat {
    /**
     * A constructor used to create a PhoneNumberFormat object.
     *
     * @sysCap SystemCapability.I18N
     * @param country Indicates a character string containing the country information for the PhoneNumberFormat object.
     * @param type Indicates the type used to format the phone number, includes: "E164", "RFC3966", "INTERNATIONAL", "NATIONAL".
     * @since 8
     */
    constructor(country: string, options?: PhoneNumberFormatOptions);

    /**
     * Judges whether phone number is valid.
     *
     * @sysCap SystemCapability.I18N
     * @param number Indicates the input phone number to be judged.
     * @return Returns a boolean indicates whether the input phone number is valid.
     * @since 8
     */
    isValidNumber(number: string): boolean;

    /**
     * Obtains the formatted phone number strings of number.
     *
     * @sysCap SystemCapability.I18N
     * @param number Indicates the input phone number to be formatted.
     * @return Returns the formatted phone number.
     * @since 8
     */
    format(number: string): string;
}

/**
 * Get a Calendar instance specified by locale and type.
 *
 * @sysCap SystemCapability.I18N
 * @param locale The locale used to get calendar.
 * @param type If type is not specified, get locale's default Calendar, else get the specified type of Calendar.
 *  such as buddhist, chinese, coptic, ethiopic, hebrew, gregory, indian, islamic_civil, islamic_tbla, islamic_umalqura,
 *  japanese, persion.
 * @since 8
 */
 export function getCalendar(locale: string, type?: string): Calendar;

export class Calendar {
    /**
     * set the date.
     *
     * @sysCap SystemCapability.I18N
     * @param date Date object used to set the time and date.
     * @since 8
     */
    setTime(date: Date);

    /**
     * set the time.
     *
     * @sysCap SystemCapability.I18N
     * @param time Indicates the elapsed milliseconds from 1970.1.1 00:00:00 GMT.
     * @since 8
     */
     setTime(time: number);

    /**
     * Set the time
     *
     * @sysCap SystemCapability.I18N
     * @param year The year field of the calendar, ranges from 0 to 9999.
     * @param month The month field of the calendar, ranges from 0 to 11.
     * @param date The day field of the calendar, ranges from 1 to 31.
     * @param hour The hour field of the calendar, ranges from 0 to 23.
     * @param minute The minute field of the calendar, ranges from 0 to 59.
     * @param second the second field of the calendar, ranges from 0 to 59.
     * @since 8
     */
    set(year: number, month: number, date:number, hour?: number, minute?: number, second?: number);

    /**
     * Set the timezone of this calendar.
     *
     * @sysCap SystemCapability.I18N
     * @param timezone The id of a timezone.
     * @since 8
     */
    setTimeZone(timezone: string);

    /**
     * Get the timezone id of this calendar instance.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the timezone id of this calendar.
     * @since 8
     */
    getTimeZone(): string;

    /**
     * Get the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns start day of a week.
     * @since 8
     */
    getFirstDayOfWeek(): number;

    /**
     * Set the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     *
     * @sysCap SystemCapability.I18N
     * @param value Indicates the start day of a week. 1 indicates Sunday, 7 indicates Saturday.
     * @since 8
     */
    setFirstDayOfWeek(value: number);

    /**
     * Get the minial days of a week, which is needed for the first day of a year.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the minimal days of a week.
     * @since 8
     */
    getMinimalDaysInFirstWeek(): number;

    /**
     * Set the minial days of a week, which is needed for the first week of a year.
     *
     * @sysCap SystemCapability.I18N
     * @param value The value to be set.
     * @since 8
     */
    setMinimalDaysInFirstWeek(value: number);

    /**
     * Get the associated value with the field.
     *
     * @sysCap SystemCapability.I18N
     * @param field Field values such as era, year, month, week_of_year, week_of_month, date, day_of_year, day_of_week
     *  day_of_week_in_month, hour, hour_of_day, minute, second, millisecond, zone_offset, dst_offset, year_woy,
     *  dow_local, extended_year, julian_day, milliseconds_in_day, is_leap_month.
     * @return Return the associated value.
     * @since 8
     */
    get(field: string): number;

    /**
     * Get calendar's name localized for display in the given locale.
     *
     * @sysCap SystemCapability.I18N
     * @param locale Locale used to get the localized name for this calendar.
     * @return Returns the localized name of this calendar.
     * @since 8
     */
    getDisplayName(locale: string): string;

    /**
     * Returns true if the given date is a weekend day. If the date is not given,
     *  the date object of this calendar is used.
     *
     * @sysCap SystemCapability.I18N
     * @param date Date object whose attribute is desired.
     * @return Returns whether the date is a weekend day.
     * @since 8
     */
    isWeekend(date?: Date): boolean;
}

/**
 * Judge whether the locale is RTL locale.
 *
 * @sysCap SystemCapability.I18N
 * @param locale The locale to be used.
 * @return Returns true representing the locale is an RTL locale
 *
 * @since 8
 */
export function isRTL(locale: string): boolean;

/**
 * Obtains a BreakIterator object for finding the location of break point in text.
 *
 * @sysCap SystemCapability.I18N
 * @param locale the returned BreakIterator will adapt the rule, specified by the locale, to break text.
 * @return Returns a newly constructed BreakIterator object.
 * @since 8
 */
 export function getLineInstance(locale: string): BreakIterator;

/**
 * The BreakIterator class is used for finding the location of break point in text.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export class BreakIterator {
    /**
     * Obtains the current position of the BreakIterator instance.
     * 
     * @sysCap SystemCapability.I18N
     * @return Returns the current position of the BreakIterator instance.
     * @since 8
     */
    current(): number;

    /**
     * Set the BreakIterator's position to the first break point, the first break point is always the beginning of the
     * processed text.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the index of the first break point.
     * @since 8
     */
    first(): number;

    /**
     * Set the BreakIterator's position to the last break point. the last break point is always the index beyond the
     * last character of the processed text.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the index of the last break point.
     * @since 8
     */
    last(): number;

    /**
     * Set the BreakItertor's position to the nth break point from the current break point.
     *
     * @sysCap SystemCapability.I18N
     * @param index indicates the number of break points to advance. If index is not given, n is treated as 1.
     * @return Returns the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @since 8
     */
    next(index?: number): number;

    /**
     * Set the BreakItertor's position to the break point preceding the current break point.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @since 8
     */
    previous(): number;

    /**
     * Set the text to be processed.
     *
     * @sysCap SystemCapability.I18N
     * @param text Indicates the text to be processed by the BreakIterator.
     * @since 8
     */
    setLineBreakText(text: string): void;

    /**
     * Set the BreakIterator's position to the first break point following the specified offset.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the index of the BreakIterator after moving. If there is not enough break points, returns -1.
     * @since 8
     */
    following(offset: number): number;

    /**
     * Obtains the text being processed.
     *
     * @sysCap SystemCapability.I18N
     * @return Returns the text that is processed by the BreakIterator.
     * @since 8
     */
    getLineBreakText(): string;

    /**
     * Returns true if the position indicated by the offset is a break point, otherwise false. The BreakIterator's
     * position will be set to the position indicated by the offset if it returns true, otherwise the BreakIterator
     * will be moved to the break point following the offset.
     *
     * @sysCap SystemCapability.I18N
     * @param offset The offset to be checked.
     * @return Returns true if the offset is a break point.
     * @since 8
     */
    isBoundary(offset: number): boolean;
}

/**
 * Sequence text can be grouped under the specified area,
 * and grouping index with different lengths can be specified.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export class IndexUtil {
    /**
     * Get IndexUtil object.
     *
     * @sysCap SystemCapability.I18N
     * @param locale Indicates a character string containing the locale information, including
     *               the language and optionally the script and region, for the NumberFormat object.
     * @return Returns IndexUtil object.
     * @since 8
     */
    getInstance(locale?:string): IndexUtil;

    /**
     * Get a list of labels for use as a UI index
     *
     * @sysCap SystemCapability.I18N
     * @return Returns a list of labels
     * @since 8
     */
    getIndexList(): Array<string>;

    /**
     * Add the index characters from a Locale to the index.
     *
     * @sysCap SystemCapability.I18N
     * @param locale The locale whose index characters are to be added.
     * @since 8
     */
    addLocale(locale: string);

    /**
     * Get corresponding index of the input text.
     *
     * @sysCap SystemCapability.I18N
     * @param text input text
     * @since 8
     */
    getIndex(text: string): string;
}

/**
 * Provides the API for accessing unicode character properties, sunch as whether a character is a digit.
 *
 * @sysCap SystemCapability.I18N
 * @since 8
 */
export class Character {
    /**
     * Determines whether the specified code point is a digit character
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a digit character
     */
    isDigit(char: string): boolean;

    /**
     * Determines if the specified character is a space character or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a space character
     */
    isSpaceChar(char: string): boolean;

    /**
     * Determines if the specified character is a whitespace character
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a whitespace character
     */
    isWhitespace(char: string): boolean;

    /**
     * Determines if the specified character is a RTL character or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a RTL character
     */
    isRTL(char: string): boolean;

    /**
     * Determines if the specified character is a Ideographic character or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a Ideographic character
     */
    isIdeograph(char: string): boolean;

    /**
     * Determines if the specified character is a Letter or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a Letter
     */
    isLetter(char: string): boolean;

    /**
     * Determines if the specified character is a LowerCase character or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a LowerCase character
     */
    isLowerCase(char: string): boolean;

    /**
     * Determines if the specified character is a UpperCase character or not.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns true if the character is a UpperCase character
     */
    isUpperCase(char: string): boolean;

    /**
     * Get the general category value of the specified character.
     *
     * @sysCap SystemCapability.I18N
     * @param char the character to be tested
     * @return Returns the general category of the specified character.
     */
    getType(char: string): string;
}
}