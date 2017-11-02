/**
 * config方法、run方法
 */
(function(){
	angular.module('routeModule',[])
			.config(['$stateProvider','$urlRouterProvider','$httpProvider','$locationProvider',
				function($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider){

					if(!$httpProvider.defaults.headers.get){
						$httpProvider.defaults.headers.get = {};
					}

					// 禁止IE对ajax的缓存（解决ng框架在IE下不打开控制器功能就不能正常使用问题）
					$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
					$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
					$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

					$httpProvider.defaults.withCredentials = true;

					$urlRouterProvider.otherwise('/main');

					$stateProvider
							.state('main',{
								url:'^/main',
								templateUrl:'templates/main.html',
								controller:'mainCtrl'
							})					
				
			}])
			.run(['$rootScope',function($rootScope){

			}]);
})();