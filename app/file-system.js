// JavaScript Document
// scripts/views/send-prescription
// Script written by Robins Gupta.

(function () {
    'use strict';

    define([
        'jquery',
        'underscore'], function ($, _) {

        //Callback function after persistent file system has been granted...
        function onSuccess(filesystem) {
            var rootDirectoryEntry = filesystem.root;
            //Creating a subDirectory..
            rootDirectoryEntry.getDirectory('DRUGCORNER IMAGES', {
                'create' : 'true'
            }, onDirectoryCreated, onFail);
            //getting the directory entry full path...
            alert(rootDirectoryEntry.name);
            alert(rootDirectoryEntry.fullPath);


        }

        function onDirectoryCreated(DirectoryEntry) {
            console.log("Subdirectory has been successfully created..");

        }


        function onFail(message) {
            console.info('Failed because: ' + message);
        }

    }); //End of define function...
})(); // JavaScript Document