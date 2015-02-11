! function () {
    "use strict";
    define(["jquery", "underscore", "backbone", "backbone-model-file-upload", "dualStorage"], function ($, _, Backbone) {
        var app = window.app || {};
        return app.Model = app.Model || {}, app.Model.user = Backbone.Model.extend({
            defaults: {
                id: null,
                name: "",
                emailAddress: "",
                phoneNumber: "",
                username: "",
                profileLink: "",
                sessionId: ""
            },
            urlRoot: "customers/user"
        }), app.Model.wallet = Backbone.Model.extend({
            defaults: {
                customerId: null,
                currentBalance: ""
            },
            urlRoot: "customers/wallet"
        }), app.Model.walletHistory = Backbone.Model.extend({
            defaults: {
                id: null,
                transactionType: "",
                transactionId: "",
                orderNumber: "",
                status: ""
            },
            urlRoot: "customers/walletHistory"
        }), app.Model.address = Backbone.Model.extend({
            defaults: {
                id: null,
                name: "",
                phoneNumber: "",
                customerId: "",
                houseNumber: "",
                streetName: "",
                area: "",
                landmark: "",
                pinCode: "",
                city: "",
                latitude: "0",
                longitude: "0"
            },
            urlRoot: "customers/address"
        }), app.Model.slot = Backbone.Model.extend({
            defaults: {
                date: "",
                time: "",
                status: ""
            }
        }), app.Model.prescriptionImage = Backbone.Model.extend({
            defaults: {
                id: null,
                imageLink: "",
                notes: ""
            },
            urlRoot: "/customers/PrescriptionImage"
        }), app.Model.ManualEntry = Backbone.Model.extend({
            defaults: {
                id: null,
                drugName: "",
                price: "0",
                drugId: "0",
                strip: !1,
                quantity: "0"
            }
        }), app.Model.order = Backbone.Model.extend({
            defaults: {
                id: null,
                customerId: null,
                prescriptionImage: "",
                status: "",
                estdTime: "",
                bill: "",
                delieveryAddress: "",
                delieveryTime: "",
                delieveryDate: "",
                medicineForDays: ""
            },
            urlRoot: "/customers/orders"
        }), app
    }) //Function ends for define...
}();