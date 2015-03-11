
declare module app.invitation {

    interface IInvitationInvitee {
        id?: number;
        firstName: string;
        lastName: string;
        email: string;
    }

    interface IInvitationStatus {
        name: string;
        create?: number;
    }

    interface IInvitation {
        invitee: IInvitationInvitee;
        status: IInvitationStatus;
    }

    interface IInvitationResourceArray extends ng.resource.IResourceArray<IInvitationResource> {}

    interface IInvitationResource extends IInvitation, ng.resource.IResource<IInvitation> {
        $update(): ng.IPromise<IInvitationResource>;
        clone(): IInvitationResource;
        upsert(): ng.IPromise<IInvitationResource>;
    }

    interface IInvitationResourceClass extends ng.resource.IResourceClass<IInvitationResource> {
        generate(invitation?: IInvitation): IInvitationResource;
        plainNewModel(): IInvitation;
        update(): IInvitationResource;
        update(params: Object): IInvitationResource;
        update(params: Object, data: IInvitation): IInvitationResource;
    }

}


'use strict';

angular
    .module('app.invitation')
    .factory('Invitation', [
        '$resource',
        function ($resource) {
            var Invitation: any = $resource('/invitation/:invitationId', {
                invitationId: '@id'
            }, {
                update: {method: 'PUT'}
            });

            angular.extend(Invitation.prototype, {

                clone() {
                    return new Invitation(angular.extend({}, this, {
                        invitee: angular.copy(this.invitee),
                        status: angular.copy(this.status)
                    }));
                },

                upsert() {
                    return this.id ? this.$update() : this.$save();
                }

            });

            angular.extend(Invitation, {

                plainNewModel() {
                    return {invitee: {firstName: null, lastName: null, email: null}, status: {name: 'Created'}};
                },

                generate(invitation?) {
                    return invitation ? invitation.clone() : new this(this.plainNewModel());
                }

            });

            return Invitation;
        }
    ]);