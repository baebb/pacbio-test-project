'use strict';

/**
 * Start our angular module
 */
angular.module('mainCtrl', [])
    // this will be the ctrl of the ENTIRE app
    .controller('mainCtrl', function ($state, localStorageService) {
        // bind this to vm (view-model)
        var vm = this;
        
        // bind data to display in our view
        vm.currentState = $state.current;
        vm.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        vm.letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        
        // Function to handle when user clicks a cell
        vm.clickCell = function (letter, number) {
            // display it in well location field
            vm.wellLocation = letter + number
            if (vm.getItem(vm.wellLocation)) {
                vm.reactionTime = vm.getItem(vm.wellLocation + '.reactionTime');
                vm.sampleName = vm.getItem(vm.wellLocation + '.sampleName');
            } else {
                // clear values
                vm.reactionTime = '';
                vm.sampleName = '';
            }
        };
        
        // Function to handle add data
        vm.addData = function () {
            // clear the error
            vm.error = '';
            
            // check the reaction time
            if (vm.reactionTime >= 5 && vm.reactionTime <= 90) {
                // check the sample name length
                if (vm.sampleName.length <= 64) {
                    // if localStorage is supported
                    if(localStorageService.isSupported) {
                        //...
                        vm.submit(vm.wellLocation, true);
                        vm.submit(vm.wellLocation + '.reactionTime', vm.reactionTime);
                        vm.submit(vm.wellLocation + '.sampleName', vm.sampleName);
                        
                        // if there no same sample name
                        if (vm.getItem(vm.sampleName) != true) {
                            vm.submit(vm.sampleName, true);
                            vm.submit(vm.sampleName + '.color', getRandomColor());
                            vm.submit(vm.sampleName + '.code', getRandomCode());
                        }
                    } else {
                        vm.error = 'localStorage is not supported';
                    }
                } else {
                    vm.error = 'Sample Name length limit is 64 characters';
                }
            } else if (vm.reactionTime < 5) {
                vm.error = 'Reaction Time minimum is 5 minutes!';
            } else if (vm.reactionTime > 90) {
                vm.error = 'Reaction Time maximum is 90 minutes!';
            } else {
                
            }
        };
        
        // Function to handle remove data
        vm.removeData = function () {
            // clear the error
            vm.error = '';
            
            
            // if there's plate clicked
            if (vm.wellLocation != '') {
                // remove data
                vm.removeItem(vm.wellLocation);
                vm.removeItem(vm.wellLocation + '.reactionTime');
                vm.removeItem(vm.wellLocation + '.sampleName');
            } else {
                vm.error = 'Please select a plate';
            }
        }
        
        // Function to handle getting color
        vm.getColor = function (letter, number) {
            return vm.getItem(vm.getItem((letter + number)+'.sampleName') + '.color');
        };
        
        // Function to handle setting a localStorage(key, val)
        vm.submit = function (key, val) {
            return localStorageService.set(key, val);
        };
        
        // Function to handle getting localStorage(key)
        vm.getItem = function (key) {
            return localStorageService.get(key);
        };
        
        // Function to handle removing localStorage(key)
        vm.removeItem = function (key) {
            return localStorageService.remove(key);
        }
        
        // Function to handle random color hex generation
        function getRandomColor() {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#';
            
            for (let i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            
            return color;
        }
        
        // Function to handle random code generation
        function getRandomCode() {
            let code = '';
            let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (let i=0; i < 3; i++) {
                code += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
            }
            
            return code;
        }
    });