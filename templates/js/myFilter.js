/**
 * 自定义过滤器
 */
(function() {
    angular.module('myFilter', [])
            .filter('myFilter', function() {
                return function(input) {
                    
                    var result = '';

                    if (input === 'MALE') {
                        result = input.replace(/MALE/gi, '男');
                        return result;
                        
                    } else if (input === true) {
                        result = '启用'; 
                        return result;
                        
                    } else if (input === false) {
                        result = '禁用'; 
                        return result;
                        
                    }
                };
            });
})();
