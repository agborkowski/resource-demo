// Type definitions for evoPagination

/// <reference path="../definetly-typed/angular-1.2.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ngEvoPagination module (evo-pagination.js)
///////////////////////////////////////////////////////////////////////////////
declare module evo.pagination {

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationService
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationService {
        (totalCount: number, pageLength: number): IEvoPagination<any>
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationProvider
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationProvider {
        setConfig(cfg: IEvoPaginationBaseConfig): IEvoPaginationBaseConfig;
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationUpdateConfig
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationBaseConfig {
        fullList: any[];
        currentList: any[];
        pageLength:  number;
        totalCount: number;
        pageCount: number;
        navWrap: number;
        currentPage: number;
        navList: Array<any>;
        _hook(...args: any[]): any;
        _updateMode: string;
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPagination
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPagination<T> {
        fullList: Array<T>;
        currentList: Array<T>;
        pageLength:  number;
        totalCount: number;
        pageCount: number;
        navWrap: number;
        currentPage: number;
        navList: Array<IEvoPaginationNav>;
        reloading: boolean;
        reloadingPromise: ng.IPromise<IEvoPagination<T>>;
        reset(): IEvoPagination<T>;
        init(totalCount: number, pageLength: number): IEvoPagination<T>;
        init(fullList: Array<T>, pageLength: number): IEvoPagination<T>;
        setHook(hookFn: IEvoPaginationHook<T>);
        updateAsync(pageNumber: number): IEvoPagination<T>;
        updateSync(pageNumber: number): IEvoPagination<T>;
        updatePreCounted(cfg: IEvoPaginationConfig<T>): IEvoPagination<T>;
        update(pageNumber: number): IEvoPagination<T>;
        updateNavList(): IEvoPagination<T>;
        hasNext(): boolean;
        hasPrev(): boolean;
        isFirst(): boolean;
        isLast(): boolean;
        next(): IEvoPagination<T>;
        prev(): IEvoPagination<T>;
        first(): IEvoPagination<T>;
        last(): IEvoPagination<T>;
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationUpdateConfig
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationConfig<T> {
        totalCount?: number;
        pageCount?: number;
        currentPage?: number;
        pageLength?: number;
        currentList?: Array<T>;
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationHook
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationHook<T> {
        (pageNumber: number, pageLength: number, pagination: IEvoPagination<T>): ng.IPromise<IEvoPaginationConfig<T>>;
    }

    ///////////////////////////////////////////////////////////////////////////
    // EvoPaginationNav
    ///////////////////////////////////////////////////////////////////////////
    interface IEvoPaginationNav {
        index: number;
        selected: boolean;
        splitter: boolean;
    }

}