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

interface Grid extends GridAttribute<Grid> {
    (scroller?: Scroller): Grid;
}
declare class GridAttribute<T> extends CommonMethod<T> {
    columnsTemplate(value: string): T;
    rowsTemplate(value: string): T;
    columnsGap(value: Length): T;
    rowsGap(value: Length): T;
    scrollBarWidth(value: number | string): T;
    scrollBarColor(value: Color | number | string): T;
    scrollBar(value: BarState): T;
    onScrollIndex(event: (first: number) => void): T;
    cachedCount(value: number): T;
}
declare class GridExtend<T> extends GridAttribute<T> {
}
declare const Grid: Grid;
