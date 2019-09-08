(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",function(){return withDesign}),__webpack_require__.d(__webpack_exports__,"a",function(){return config});var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71),_storybook_addons__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__),_addon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(143);const withDesign=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__.makeDecorator)({name:"withDesign",parameterName:_addon__WEBPACK_IMPORTED_MODULE_1__.b,skipIfNoParameterOrOptions:!0,wrapper:(getStory,context,{parameters:parameters})=>{return _storybook_addons__WEBPACK_IMPORTED_MODULE_0___default.a.getChannel().emit(_addon__WEBPACK_IMPORTED_MODULE_1__.a.UpdateConfig,parameters),getStory(context)}}),config=c=>c;module&&module.hot&&module.hot.decline&&module.hot.decline()}).call(this,__webpack_require__(115)(module))},143:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Events}),__webpack_require__.d(__webpack_exports__,"b",function(){return ParameterName});const Events={UpdateConfig:"STORYBOOK_ADDON_DESIGNS/update_config"},ParameterName="design"},144:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sample.8855819b.png"},229:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-with-text.df9c85ee.png"},230:function(module){module.exports={name:"storybook-addon-designs",version:"5.1.1",description:"Storybook addon for embedding your design preview in addon panel",main:"lib/index.js",types:"lib/index.d.ts",repository:"git@github.com:pocka/storybook-addon-designs.git",homepage:"https://github.com/pocka/storybook-addon-designs",author:"pocka <pockawoooh@gmail.com>",license:"MIT",files:["lib","register.js"],devDependencies:{"@storybook/addons":"^5.0.3","@storybook/components":"^5.0.3","@storybook/core-events":"^5.0.3","@storybook/theming":"^5.0.3","@types/pdfjs-dist":"^2.0.0","@types/react":"^16.8.8","@types/webpack-env":"^1.13.9",react:"^16.8.4",typescript:"^3.3.4000"},peerDependencies:{"@storybook/addons":"^5.0.0","@storybook/components":"^5.0.0","@storybook/theming":"^5.0.0",react:">=16.8.0"},scripts:{dev:"tsc --watch --preserveWatchOutput",build:"tsc",test:"echo 'No tests' && exit 0",clean:"rm -r lib",prepublishOnly:"cp ../../README.md ./ && yarn build"},dependencies:{"react-pdf":"^4.0.5"},publishConfig:{tag:"latest"}}},231:function(module,exports,__webpack_require__){__webpack_require__(232),__webpack_require__(310),module.exports=__webpack_require__(311)},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Button});__webpack_require__(85);var _emotion_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var Button=function(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",_extends({css:button},props))};Button.displayName="Button";var button={name:"zl32i9-button",styles:"padding:10px 32px;margin:0;font-size:16px;line-height:1.5;border:none 0;outline:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;color:#fff;background-image:linear-gradient(277.88deg,#51b441 32.37%,#61c451 99.3%);text-transform:uppercase;border-radius:4px;box-shadow:0px 1px 2px rgba(0,0,0,0.15);cursor:pointer;transition:transform 0.1s ease,box-shadow 0.1s ease;&:active{box-shadow:0px 1px 1px rgba(0,0,0,0.25);transform:scale(0.99);}&[disabled]{background-image:linear-gradient(277.88deg,#a6b4a4 32.37%,#bdc4bc 99.3%);color:#e0e0e0;cursor:not-allowed;}label:button;"};Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"stories/Button.jsx"})},311:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(65),__webpack_require__(66),__webpack_require__(168),__webpack_require__(83);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_storybook_theming__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(227),_storybook_addon_designs_assets_logo_with_text_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(229),_storybook_addon_designs_assets_logo_with_text_png__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_storybook_addon_designs_assets_logo_with_text_png__WEBPACK_IMPORTED_MODULE_6__),storybook_addon_designs_package_json__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(230);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({options:{theme:Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_5__.create)({brandTitle:"storybook-addon-designs",brandImage:_storybook_addon_designs_assets_logo_with_text_png__WEBPACK_IMPORTED_MODULE_6___default.a,brandUrl:storybook_addon_designs_package_json__WEBPACK_IMPORTED_MODULE_7__.homepage})}});var req=__webpack_require__(471);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(115)(module))},33:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"6011ce6757a13457a54df95fb1a4bb12.pdf"},471:function(module,exports,__webpack_require__){var map={"./index.stories.js":472};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=471},472:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(144),_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_4__),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33),_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!0},"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples|Figma",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Embed file",function(){return _ref},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}).add("Embed node",function(){return _ref2},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample?node-id=2%3A5"})}).add("Embed prototype",function(){return _ref3},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"figma",url:"https://www.figma.com/proto/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})}).add("Allowing fullscreen",function(){return _ref4},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",allowFullscreen:!0})});var _ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples|iframe",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Embed site",function(){return _ref5},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"iframe",url:"https://www.wikipedia.org/"})});var _ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref8=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref9=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref10=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!0},"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples|PDF",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Embed PDF",function(){return _ref6},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a})}).add("Set scale",function(){return _ref7},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a,scale:2})}).add("Set offset",function(){return _ref8},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a,offset:[-100,-100]})}).add("Set page",function(){return _ref9},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a,page:2})}).add("Set both scale and offset",function(){return _ref10},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a,offset:[-300,140],scale:2})});var _ref11=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref12=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,{disabled:!0},"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples|Image",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Embed image",function(){return _ref11},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"image",url:_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_4___default.a})}).add("Set scale and offset",function(){return _ref12},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"image",url:_storybook_addon_designs_assets_sample_png__WEBPACK_IMPORTED_MODULE_4___default.a,offset:[-300,140],scale:2})});var _ref13=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref14=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Examples|Advanced",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Embed multiple designs",function(){return _ref13},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)([{type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"},{type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a}])}).add("Set tab names",function(){return _ref14},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)([{name:"Foo",type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"},{name:"Bar",type:"pdf",url:_storybook_addon_designs_assets_sample_pdf__WEBPACK_IMPORTED_MODULE_5___default.a}])});var _ref15=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button"),_ref16=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Tests|Placeholder",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Show placeholder when no `design` parameter",function(){return _ref15}).add("Show error message when `type` is not supported",function(){return _ref16},{design:{type:"foo"}});var _ref17=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Tests|Issues/#14",module).addDecorator(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.b).add("Do not persist addon panel (step 1)",function(){return _ref17},{design:Object(storybook_addon_designs__WEBPACK_IMPORTED_MODULE_2__.a)({type:"figma",url:"https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample"})});var _ref18=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,null,"Button");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Tests|Issues/#14",module).add("Do not persist addon panel (step 2)",function(){return _ref18})}.call(this,__webpack_require__(115)(module))}},[[231,1,2]]]);
//# sourceMappingURL=main.8fcedcc531e50197d3cb.bundle.js.map