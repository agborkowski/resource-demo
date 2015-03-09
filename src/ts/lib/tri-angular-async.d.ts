// Type definitions for evoPagination

/// <reference path="../definetly-typed/angular-1.2.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// triNgAsync module
///////////////////////////////////////////////////////////////////////////////
declare module tri {

    ///////////////////////////////////////////////////////////////////////////
    // TriNgAsync service
    ///////////////////////////////////////////////////////////////////////////
    interface IAsyncService {
        (fn: IAsyncCallback): void;
        (fn: IAsyncCallback, mode: boolean): void;
        (fn: IAsyncCallback, mode: ng.IScope): void;
        clean(fn: IAsyncCallback): void;
        local(scope: ng.IScope, fn: IAsyncCallback);
    }

    ///////////////////////////////////////////////////////////////////////////
    // TriNgAsync callback
    ///////////////////////////////////////////////////////////////////////////
    interface IAsyncCallback {
        (): any;
    }

}