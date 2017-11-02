/**
 * main模块控制器
 */
(function(){
	angular.module('mainCtrlModule',[])
			.controller('mainCtrl', ['$scope','mainDataService',function($scope,mainDataService){

				var self = mainDataService;
				
			}])
			// 该服务用于 'main' 模块的数据请求
			.factory('mainDataService', ['$rootScope',function($rootScope){
					return {

					};
			}]);
})();