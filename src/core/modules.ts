const ModuleStore: Record<string, RefresherModule> = {};

export const modules = {
    register: (module: RefresherModule) => {
        if (ModuleStore[module.name]) throw new Error("Module already registered");
        
        
    }
    
};