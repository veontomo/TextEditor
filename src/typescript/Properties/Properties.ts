/// <reference path="IProperties.ts" />
module Tag {
    enum MODE {STYLE, ATTR}

    export class Properties implements IProperties {
        getClassName():String {
            return "Property";
        }

        mode:number = -1;

        stringify(mode:MODE):String {
            /// !!! stub
            return "";

        }
    }
};