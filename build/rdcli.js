#!/usr/bin/env node
'use strict';var _realDebrid=require('./real-debrid');var _realDebrid2=_interopRequireDefault(_realDebrid);var _package=require('../package.json');var _package2=_interopRequireDefault(_package);var _commander=require('commander');var _commander2=_interopRequireDefault(_commander);var _coPrompt=require('co-prompt');var _coPrompt2=_interopRequireDefault(_coPrompt);var _singleLineLog=require('single-line-log');var _singleLineLog2=_interopRequireDefault(_singleLineLog);var _co=require('co');var _co2=_interopRequireDefault(_co);var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_commander2.default.version(_package2.default.version).description('Download links, magnets and torrent files.').usage('<url|magnet|torrent>').action(function(arg){return (0,_co2.default)(regeneratorRuntime.mark(function action(){var api,connect,link,unrestrictLink;return regeneratorRuntime.wrap(function action$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:api=new _realDebrid2.default();connect=regeneratorRuntime.mark(function connect(){var username,password;return regeneratorRuntime.wrap(function connect$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,_coPrompt2.default)('Username: ');case 2:username=_context.sent;_context.next=5;return _coPrompt2.default.password('Password: ');case 5:password=_context.sent;_context.next=8;return api.connect(username,password);case 8:case 'end':return _context.stop();}}},connect,this);});link=void 0;if(!arg.match(/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\? \.-]*)*\/?$/)){_context2.next=9;break;}_context2.next=6;return connect();case 6:link=arg;_context2.next=27;break;case 9:if(!arg.match(/^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{20,50}/i)){_context2.next=17;break;}_context2.next=12;return connect();case 12:_context2.next=14;return api.convertTorrent(arg);case 14:link=_context2.sent;_context2.next=27;break;case 17:if(!_fs2.default.existsSync(arg)){_context2.next=25;break;}_context2.next=20;return connect();case 20:_context2.next=22;return api.convertTorrent(arg);case 22:link=_context2.sent;_context2.next=27;break;case 25:console.log('Usage: rdcli <url|magnet|torrent>');process.exit();case 27:_context2.next=29;return api.unrestrictLink(link);case 29:unrestrictLink=_context2.sent;_context2.next=32;return api.download(unrestrictLink,function(res){if(!isNaN(res.percent)){_singleLineLog2.default.stdout('Download: '+res.percent+'% Speed: '+res.mbps+'Mbps '+res.bytesWriting+'/'+res.totalSize+' Remaining: '+res.remaining+'sec\n');}else if(res==='end'){console.log('File downloaded.');}else {console.log('Error: '+res);}});case 32:case 'end':return _context2.stop();}}},action,this);}));}).parse(process.argv);if(!process.argv.slice(2).length){_commander2.default.outputHelp();}