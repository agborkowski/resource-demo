
declare module ng {

    interface IPromise<T> {
        then(Function): IPromise<any>;
        then(success: Function, Function): IPromise<any>;
        then(success: Function, error: Function, Function): IPromise<any>;
        catch(Function): IPromise<any>;
        finally(Function):IPromise<any>;
    }

    interface IRootScopeService {
        version: string;
    }

}