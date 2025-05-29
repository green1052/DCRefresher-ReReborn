export {};

declare global {
    type SettingsStore = Record<string, Record<string, RefresherSettings>>;
    
    type RefresherSettings =
        | RefresherCheckSettings
        | RefresherTextSettings
        | RefresherRangeSettings
        | RefresherOptionSettings;

    interface RefresherBaseSettings<Type extends string, Value> {
        type: Type;
        name: string;
        desc: string;
        value: Value;
        default: Value;
        advanced?: boolean;
    }

    interface RefresherCheckSettings extends RefresherBaseSettings<"check", boolean> {}

    interface RefresherTextSettings extends RefresherBaseSettings<"text", string> {}

    interface RefresherRangeSettings extends RefresherBaseSettings<"range", number> {
        min: number;
        max: number;
        step: number;
        unit: string;
    }

    interface RefresherOptionSettings extends RefresherBaseSettings<"option", string> {
        items: unknown;
    }
}
