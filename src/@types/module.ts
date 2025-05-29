export {};

declare global {
    interface ItemToRefresherMap {
       
    }
    
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


    interface RefresherModule {
        name: string;
        description: string;
        url?: RegExp;
        status: Record<string, unknown>;
        data?: Record<string, unknown>;
        memory: Record<string, unknown>;
        enable: boolean;
        default_enable: boolean;
        settings?: Record<string, SettingsStore>;
        shortcuts: Record<string, () => void>;
        update: Record<any,  any>
        require?:  Array<keyof ItemToRefresherMap>;
        func?: (...args: any) => void;
        revoke?: (...args: any) => void;
    }
}
