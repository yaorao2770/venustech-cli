/**
 * 权限相关拦截器
 */
(function(){
	angular.module('mainCtrlModule',[])
			.factory('tokenInteceptor', ['$rootScope',"$q","$injector",'$cookieStore','$location',
				function($rootScope,$q,$injector,$cookieStore,$location){
				return {
					request:function(requestConfig){

						// var accessToken = $cookieStore.get('accessToken');

						// if(accessToken){
						// 	requestConfig.headers['X-Access-Token'] = accessToken;
						// }

						// return requestConfig;
					},
					response:function(responseObject){
						return responseObject;
					},
					requestError:function(rejectReason){
						return $q.reject(rejection);
					},
					responseError:function(responseError){
						return $q.reject(responseError);
					}
				};
			}])
})();