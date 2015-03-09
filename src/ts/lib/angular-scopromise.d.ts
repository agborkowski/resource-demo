// Type definitions for evoPagination

/// <reference path="../definetly-typed/angular-1.2.d.ts" />

declare module tri {

    interface IScopromise<T> {
        $promise: ng.IPromise<IScopromise<T>>;
        $resolved: boolean;
    }

    interface IScopromiseService {
        <T>(promise: ng.IPromise<T>, object: T): IScopromise<T>;
        <T>(promise: ng.IPromise<Object>, object: T): IScopromise<T>;
        <T>(promise: ng.IPromise<T>, object: Object): IScopromise<T>;
        <T>(promise: ng.IPromise<Array<T>>, array: Array<T>): IScopromiseArray<T>;
    }


    interface IScopromiseArray<T> extends Array<T> {
        $promise : ng.IPromise<IScopromiseArray<T>>;
        $resolved : boolean;
    }

}