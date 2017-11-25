/**
 * 权限相关拦截器
 */
(function(){
	angular.module('authcInteceptorModule',[])
			.factory('authcInteceptor', ['$rootScope',"$q","$injector",'$location',
				function($rootScope,$q,$injector,$location){
				return {
					request:function(requestConfig){
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