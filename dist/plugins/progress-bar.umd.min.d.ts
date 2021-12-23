/**
 * ProgressBar plugin
 *
 * @header  --gstc--header--
 */
import type { Vido } from '../gstc';
export declare const pluginPath = "config.plugin.ProgressBar";
export interface Options {
    enabled?: boolean;
    className?: string;
}
export declare function Plugin(options?: Options): (vidoInstance: Vido) => () => void;
//# sourceMappingURL=progress-bar.d.ts.map