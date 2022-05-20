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

declare type CanvasFillRule = 'evenodd' | 'nonzero';
declare type CanvasLineCap = 'butt' | 'round' | 'square';
declare type CanvasLineJoin = 'bevel' | 'miter' | 'round';
declare type CanvasDirection = 'inherit' | 'ltr' | 'rtl';
declare type CanvasTextAlign = 'center' | 'end' | 'left' | 'right' | 'start';
declare type CanvasTextBaseline = 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top';
declare type ImageSmoothingQuality = 'high' | 'low' | 'medium';
declare class CanvasGradient {
    addColorStop(offset: number, color: string): void;
}
declare class CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: number): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}
declare class Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: Matrix2D): void;
    constructor();
    constructor(path: Path2D);
    constructor(d: string);
}
declare interface CanvasPattern {
    setTransform(transform?: Matrix2D): void;
}
declare interface TextMetrics {
    readonly actualBoundingBoxAscent: number;
    readonly actualBoundingBoxDescent: number;
    readonly actualBoundingBoxLeft: number;
    readonly actualBoundingBoxRight: number;
    readonly alphabeticBaseline: number;
    readonly emHeightAscent: number;
    readonly emHeightDescent: number;
    readonly fontBoundingBoxAscent: number;
    readonly fontBoundingBoxDescent: number;
    readonly hangingBaseline: number;
    readonly ideographicBaseline: number;
    readonly width: number;
}
declare class ImageBitmap {
    readonly height: number;
    readonly width: number;
    close(): void;
    constructor(src: string);
    constructor(data: PixelMap);
}
declare interface ImageData {
    readonly data: Uint8ClampedArray;
    readonly height: number;
    readonly width: number;
    constructor(width: number, height: number, data?: Uint8ClampedArray);
}
declare class RenderingContextSettings {
    alpha?: boolean;
    antialias?: boolean;
    constructor(antialias?: boolean, alpha?: boolean);
}
declare class CanvasRenderer extends CanvasPath {
    globalAlpha: number;
    globalCompositeOperation: string;
    drawImage(image: ImageBitmap, dx: number, dy: number): void;
    drawImage(image: ImageBitmap, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: ImageBitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    stroke(): void;
    stroke(path: Path2D): void;
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    filter(filter: string): void;
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality(quality: ImageSmoothingQuality): void;
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    restore(): void;
    save(): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    direction(direction: CanvasDirection): void;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    getTransform(): Matrix2D;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: Matrix2D): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
    setPixelMap(value?: PixelMap): void;
    transferFromImageBitmap(bitmap: ImageBitmap): void;
}
declare class CanvasRenderingContext2D extends CanvasRenderer {
    readonly height: number;
    readonly width: number;
    toDataURL(type?: string, quality?: any): string;
    constructor(settings?: RenderingContextSettings);
}
declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
    toDataURL(type?: string, quality?: any): string;
    transferToImageBitmap(): ImageBitmap;
    constructor(width: number, height: number, settings?: RenderingContextSettings);
}
declare interface OffscreenCanvas extends CanvasRenderer {
    height: number;
    width: number;
    transferToImageBitmap(): ImageBitmap;
    constructor(width: number, height: number);
}
interface Canvas extends CanvasAttribute<Canvas> {
    (context?: CanvasRenderingContext2D): Canvas;
}
declare class CanvasAttribute<T> extends CommonMethod<T> {
    onReady(event: () => void): T;
}
declare class CanvasExtend<T> extends CanvasAttribute<T> {
}
declare const Canvas: Canvas;
