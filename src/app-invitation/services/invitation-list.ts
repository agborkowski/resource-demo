
declare module app.invitation {

    interface IInvitationList {
        invitations: IInvitationResourceArray;
        theInvitation: IInvitationResource;
        cancel(): void;
        edit(invitation?: IInvitationResource): void;
        reload(): ng.IPromise<IInvitationResourceArray>;
        remove(invitation): ng.IPromise<IInvitationResourceArray>;
        save(): ng.IPromise<IInvitationResourceArray>;
    }

}

'use strict';

angular
    .module('app.invitation')
    .service('invitationList', [
        'Invitation',
        function (Invitation) {

            angular.extend(this, {

                list: null,
                edited: null,

                cancel() {
                    this.edited = null;
                },

                edit(invitation?) {
                    this.edited = Invitation.generate(invitation);
                },

                reload() {
                    this.list = Invitation.query();
                    this.list.$promise.then((invitations) => {
                        this.cancel();
                        return invitations;
                    }, null);
                },

                remove(invitation) {
                    return invitation.$delete().then(() => this.reload(), null);
                },

                save() {
                    return this.edited.upsert().then(() => this.reload(), null);
                }

            })
        }
    ]);