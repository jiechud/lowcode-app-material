!function storyCodeAddon(){window.pkgInfo={name:"lowcode-app-material",version:"0.1.0"},window.storyCodes={"colorfulbutton--size":'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { ColorfulButton } from "lowcode-app-material";\nexport const Size = () => {\n  return (\n    <div>\n      Size demo\n      <ColorfulButton size="large" color="yellow" />\n    </div>\n  );\n};\n',"colorfulinput--basic":'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { ColorfulInput } from "lowcode-app-material";\nexport const Basic = () => {\n  return (\n    <div>\n      basic demo\n      <ColorfulInput color="orange" />\n    </div>\n  );\n};\n',"colorfulinput--control":'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { ColorfulInput } from "lowcode-app-material";\nexport const Control = () => {\n  return (\n    <div>\n      Control demo\n      <ColorfulInput value="control" />\n    </div>\n  );\n};\n',"colorfulbutton--basic":'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { ColorfulButton } from "lowcode-app-material";\nexport const Basic = () => {\n  return (\n    <div>\n      basic demo\n      <ColorfulButton color="red" />\n    </div>\n  );\n};\n',"colorfulinput--size":'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport { ColorfulInput } from "lowcode-app-material";\nexport const Size = () => {\n  return (\n    <div>\n      Size demo\n      <ColorfulInput size="large" />\n    </div>\n  );\n};\n'}}(),(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.mdx)$":function(module,exports,__webpack_require__){var map={"./colorful-button/README.stories.mdx":"./docs/colorful-button/README.stories.mdx","./colorful-input/README.stories.mdx":"./docs/colorful-input/README.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.mdx)$"},"./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)demo\\/(?!\\.)(?=.)[^/]*?\\.(tsx|jsx|js))$":function(module,exports,__webpack_require__){var map={"./colorful-button/demo/basic.tsx":"./docs/colorful-button/demo/basic.tsx","./colorful-button/demo/size.tsx":"./docs/colorful-button/demo/size.tsx","./colorful-input/demo/basic.tsx":"./docs/colorful-input/demo/basic.tsx","./colorful-input/demo/control.tsx":"./docs/colorful-input/demo/control.tsx","./colorful-input/demo/size.tsx":"./docs/colorful-input/demo/size.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)demo\\/(?!\\.)(?=.)[^/]*?\\.(tsx|jsx|js))$"},"./docs/colorful-button/README.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("react");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"ColorfulButton",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",null,"ColorfulButton"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"银行卡选择"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"何时使用"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"银行卡选择"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"示例"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{id:"colorfulbutton--basic",mdxType:"Story"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{id:"colorfulbutton--size",mdxType:"Story"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"ColorfulButton",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./docs/colorful-button/demo/basic.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");__webpack_exports__.default={title:"ColorfulButton"};var Basic=function Basic(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"basic demo",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__.a,{color:"red"}))};Basic.storyName="基础用法",Basic.desc="多彩按钮的基础用法，`code`试一下能不能用"},"./docs/colorful-button/demo/size.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Size",(function(){return Size}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");__webpack_exports__.default={title:"ColorfulButton"};var Size=function Size(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Size demo",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__.a,{size:"large",color:"yellow"}))};Size.storyName="尺寸",Size.desc="多彩按钮的用法，演示自己控制数据的用法。`code`试一下能不能用"},"./docs/colorful-input/README.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("react");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,{title:"ColorfulInput",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h1",null,"ColorfulInput"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"银行卡选择"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"何时使用"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("p",null,"银行卡选择"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)("h2",null,"示例"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{id:"colorfulinput--basic",mdxType:"Story"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{id:"colorfulinput--control",mdxType:"Story"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.c,{id:"colorfulinput--size",mdxType:"Story"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"ColorfulInput",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./docs/colorful-input/demo/basic.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return Basic}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");__webpack_exports__.default={title:"ColorfulInput"};var Basic=function Basic(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"basic demo",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__.b,{color:"orange"}))};Basic.storyName="基础用法",Basic.desc="多彩按钮的基础用法，ColorfulInput`code`试一下能不能用"},"./docs/colorful-input/demo/control.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Control",(function(){return Control}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");__webpack_exports__.default={title:"ColorfulInput"};var Control=function Control(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Control demo",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__.b,{value:"control"}))};Control.storyName="受控用法",Control.desc="多彩按钮的受控用法，ColorfulInput演示自己控制数据的用法。`code`试一下能不能用"},"./docs/colorful-input/demo/size.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Size",(function(){return Size}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("react"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.tsx");__webpack_exports__.default={title:"ColorfulInput"};var Size=function Size(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Size demo",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lowcode_app_material__WEBPACK_IMPORTED_MODULE_1__.b,{size:"large"}))};Size.storyName="尺寸",Size.desc="多彩按钮的用法，ColorfulInput演示自己控制数据的用法。`code`试一下能不能用"},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)demo\\/(?!\\.)(?=.)[^/]*?\\.(tsx|jsx|js))$"),__webpack_require__("./docs sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.mdx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/index.scss":function(module,__webpack_exports__,__webpack_require__){},"./src/index.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return components_colorful_button})),__webpack_require__.d(__webpack_exports__,"b",(function(){return components_colorful_input}));var helpers_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"),objectWithoutPropertiesLoose_default=__webpack_require__.n(objectWithoutPropertiesLoose),external_React_=__webpack_require__("react"),external_Next_=__webpack_require__("@alifd/next"),_excluded=["type","color","style"],colorful_button_ColorfulButton=function ColorfulButton(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,color=_ref.color,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,otherProps=objectWithoutPropertiesLoose_default()(_ref,_excluded),_style=style||{};color&&(_style.backgroundColor=color);var _otherProps=otherProps||{};return _otherProps.style=_style,external_React_.createElement(external_Next_.Button,extends_default()({type:type},_otherProps),"fusion button")};colorful_button_ColorfulButton.displayName="ColorfulButton";var colorful_button=colorful_button_ColorfulButton;try{colorful_button_ColorfulButton.displayName="ColorfulButton",colorful_button_ColorfulButton.__docgenInfo={description:"",displayName:"ColorfulButton",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"normal"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/colorful-button/colorful-button.tsx#ColorfulButton"]={docgenInfo:colorful_button_ColorfulButton.__docgenInfo,name:"ColorfulButton",path:"src/components/colorful-button/colorful-button.tsx#ColorfulButton"})}catch(__react_docgen_typescript_loader_error){}var components_colorful_button=colorful_button;try{colorfulbutton.displayName="colorfulbutton",colorfulbutton.__docgenInfo={description:"",displayName:"colorfulbutton",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"normal"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/colorful-button/index.tsx#colorfulbutton"]={docgenInfo:colorfulbutton.__docgenInfo,name:"colorfulbutton",path:"src/components/colorful-button/index.tsx#colorfulbutton"})}catch(__react_docgen_typescript_loader_error){}var colorful_input_excluded=["color","style"],colorful_input=function ColorfulInput(_ref){var color=_ref.color,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,otherProps=objectWithoutPropertiesLoose_default()(_ref,colorful_input_excluded),_style=style||{};color&&(_style.backgroundColor=color);var _otherProps=otherProps||{};return _otherProps.style=_style,external_React_.createElement(external_Next_.Input,_otherProps)};try{colorfulinput.displayName="colorfulinput",colorfulinput.__docgenInfo={description:"",displayName:"colorfulinput",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/colorful-input/colorful-input.tsx#colorfulinput"]={docgenInfo:colorfulinput.__docgenInfo,name:"colorfulinput",path:"src/components/colorful-input/colorful-input.tsx#colorfulinput"})}catch(__react_docgen_typescript_loader_error){}var components_colorful_input=colorful_input;try{colorfulinput.displayName="colorfulinput",colorfulinput.__docgenInfo={description:"",displayName:"colorfulinput",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/colorful-input/index.tsx#colorfulinput"]={docgenInfo:colorfulinput.__docgenInfo,name:"colorfulinput",path:"src/components/colorful-input/index.tsx#colorfulinput"})}catch(__react_docgen_typescript_loader_error){}try{myselect.displayName="myselect",myselect.__docgenInfo={description:"",displayName:"myselect",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/my-select/my-select.tsx#myselect"]={docgenInfo:myselect.__docgenInfo,name:"myselect",path:"src/components/my-select/my-select.tsx#myselect"})}catch(__react_docgen_typescript_loader_error){}try{myselect.displayName="myselect",myselect.__docgenInfo={description:"",displayName:"myselect",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/my-select/index.tsx#myselect"]={docgenInfo:myselect.__docgenInfo,name:"myselect",path:"src/components/my-select/index.tsx#myselect"})}catch(__react_docgen_typescript_loader_error){}try{ColorfulButton.displayName="ColorfulButton",ColorfulButton.__docgenInfo={description:"",displayName:"ColorfulButton",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"normal"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#ColorfulButton"]={docgenInfo:ColorfulButton.__docgenInfo,name:"ColorfulButton",path:"src/index.tsx#ColorfulButton"})}catch(__react_docgen_typescript_loader_error){}try{ColorfulInput.displayName="ColorfulInput",ColorfulInput.__docgenInfo={description:"",displayName:"ColorfulInput",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#ColorfulInput"]={docgenInfo:ColorfulInput.__docgenInfo,name:"ColorfulInput",path:"src/index.tsx#ColorfulInput"})}catch(__react_docgen_typescript_loader_error){}try{MySelect.displayName="MySelect",MySelect.__docgenInfo={description:"",displayName:"MySelect",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"string"'}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:'"object"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#MySelect"]={docgenInfo:MySelect.__docgenInfo,name:"MySelect",path:"src/index.tsx#MySelect"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/build-plugin-component-multiple/.storybook/preview.jsx-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){},"@alifd/next":function(module,exports){module.exports=Next},react:function(module,exports){module.exports=React},"react-dom":function(module,exports){module.exports=ReactDOM}},[[0,4,5]]]);