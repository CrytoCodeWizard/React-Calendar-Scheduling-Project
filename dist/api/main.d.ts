/**
 * Main api
 *
 * @header  --gstc--header--
 */
import { Dayjs } from 'dayjs';
import { DataChartTime, DataChartTimeLevel, DataChartTimeLevelDate, ChartCalendarLevel, ChartTimeDate, ChartTimeDates, ChartCalendarLevelFormat, Vido, Reason } from '../gstc';
export default function main(vido: Vido, mergeDeep: any): {
    className: string;
    styleMap: import("@neuronet.io/vido").StyleMap;
    initializePlugins(): void;
    heightChange(): void;
    resizerActiveChange(active: boolean): void;
    generateTreeFromVisibleRows(): void;
    generateTree(fullReload?: boolean): void;
    prepareExpanded(): void;
    generateVisibleRowsAndItems(): void;
    updateItemsVerticalPositions(): void;
    getMutedListeners(): any[];
    triggerLoadedEvent(): void;
    getLastPageDatesWidth(chartWidth: number, allDates: DataChartTimeLevelDate[]): number;
    formatDate(formatting: ChartCalendarLevelFormat, date: DataChartTimeLevelDate, localeName: string): import("../gstc").htmlResult;
    generatePeriodDates(formatting: ChartCalendarLevelFormat, time: DataChartTime, level: ChartCalendarLevel, levelIndex: number): DataChartTimeLevel;
    limitGlobal(time: DataChartTime, oldTime: DataChartTime): DataChartTime;
    setCenter(time: DataChartTime): void;
    guessPeriod(time: DataChartTime, levels: ChartCalendarLevel[]): DataChartTime;
    getFormatAndLevelIndexForZoom(zoom: number, levels?: ChartCalendarLevel[]): {
        levelIndex: number;
        format: ChartCalendarLevelFormat;
    };
    generateAllDates(time: DataChartTime, levels: ChartCalendarLevel[]): ChartTimeDates[] | 0;
    getPeriodDates(allLevelDates: ChartTimeDates, time: DataChartTime): ChartTimeDate[];
    updateLevels(time: DataChartTime, levels: ChartCalendarLevel[]): void;
    updateLocale(): void;
    calculateTotalViewDuration(time: DataChartTime): void;
    calculateRightGlobal(leftGlobalDate: Dayjs, chartWidth: number, allMainDates: DataChartTimeLevelDate[], offsetPx: any, offsetMs: any): number;
    updateVisibleItems(time?: DataChartTime, multi?: import("deep-state-observer").Multi): import("deep-state-observer").Multi;
    recalculateTimes(reason: Reason): void;
    minimalReload(eventInfo: any): void;
    partialReload(fullReload: boolean, eventInfo: any): void;
    fullReload(eventInfo: any): void;
};
//# sourceMappingURL=main.d.ts.map