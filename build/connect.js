'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=getToken;var _requestPromise=require('request-promise');var _requestPromise2=_interopRequireDefault(_requestPromise);var _config=require('config');var _config2=_interopRequireDefault(_config);var _debug=require('debug');var _debug2=_interopRequireDefault(_debug);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[getToken].map(regeneratorRuntime.mark);var log=(0,_debug2.default)('connect');function getToken(username,password){var options,data;return regeneratorRuntime.wrap(function getToken$(_context){while(1){switch(_context.prev=_context.next){case 0:log('connect to real-debrid.com');options={method:'POST',uri:_config2.default.apiBaseUrl+'/oauth/v2/token',form:{username:username,password:password,client_id:_config2.default.clientId,grant_type:'password'},json:true};data=void 0;_context.next=5;return(0,_requestPromise2.default)(options).then(function(body){data=body.access_token;}).catch(function(){throw new Error('invalid login');});case 5:return _context.abrupt('return',data);case 6:case'end':return _context.stop();}}},_marked[0],this);}