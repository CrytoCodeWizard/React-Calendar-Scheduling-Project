/**
 * TimelinePointer plugin
 *
 * @header  --gstc--header--
 */
import type { Vido } from '../gstc';
export declare const CELL = "chart-timeline-grid-row-cell";
export declare type CELL_TYPE = 'chart-timeline-grid-row-cell';
export declare const ITEM = "chart-timeline-items-row-item";
export declare type ITEM_TYPE = 'chart-timeline-items-row-item';
export declare type SELECTION_TYPE = typeof CELL | typeof ITEM;
export interface TimelinePointerEvents {
    down: PointerEvent | null;
    move: PointerEvent | null;
    up: PointerEvent | null;
}
export interface TimelinePointerPoint {
    x: number;
    y: number;
}
export declare type TimelinePointerState = 'up' | 'down' | 'move';
export interface TimelinePointerCaptureEvents {
    up?: boolean;
    down?: boolean;
    move?: boolean;
}
export interface TimelinePointerLocked {
    up: boolean | string;
    down: boolean | string;
    move: boolean | string;
}
export interface Options {
    enabled?: boolean;
    captureEvents?: TimelinePointerCaptureEvents;
}
export interface TimelinePointerOffset {
    top: number;
    left: number;
}
export interface Movement {
    x: number;
    y: number;
}
export declare type TargetType = ITEM_TYPE | CELL_TYPE | '';
export interface PluginData extends Options {
    isMoving: boolean;
    pointerState: TimelinePointerState;
    currentTarget: HTMLElement | null;
    realTarget: HTMLElement | null;
    targetType: TargetType;
    targetData: any | null;
    events: TimelinePointerEvents;
    initialPosition: TimelinePointerPoint;
    currentPosition: TimelinePointerPoint;
    movement: Movement;
}
export interface ScrollPosPx {
    horizontal: number;
    vertical: number;
}
export interface TimelinePointerEvent {
    type: TimelinePointerState;
    originalEvent: PointerEvent;
    targetElement: HTMLElement;
    targetData: any;
    targetType: TargetType;
    initialScrollPosPx: ScrollPosPx;
    initialPosition: TimelinePointerPoint;
    currentPosition: TimelinePointerPoint;
    movement: Movement;
    isMoving: boolean;
    allEvents: TimelinePointerEvents;
}
export declare type PointerListener = (event: TimelinePointerEvent) => void;
export interface ApiPointerListeners {
    down: Set<PointerListener>;
    move: Set<PointerListener>;
    up: Set<PointerListener>;
}
export declare type AddPointerListener = (type: TimelinePointerState, callback: PointerListener) => void;
export declare type RemovePointerListener = (type: TimelinePointerState, callback: PointerListener) => void;
export declare function Plugin(options?: Options): (vidoInstance: Vido) => () => void;
//# sourceMappingURL=timeline-pointer.d.ts.map