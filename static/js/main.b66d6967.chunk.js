(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports={currencySelectorContainer:"styles_currencySelectorContainer__2kO6N",gradientAnimation:"styles_gradientAnimation__hnqwK"}},114:function(e,t,n){e.exports={ratesCompareContainer:"styles_ratesCompareContainer__Xk4MQ",gradientAnimation:"styles_gradientAnimation__15KmJ"}},118:function(e,t,n){e.exports=n(249)},136:function(e,t,n){},22:function(e,t,n){e.exports={btn:"styles_btn__2RqcC",raise:"styles_raise__3m8gy",primary:"styles_primary__2qAw0",fullWidth:"styles_fullWidth__2zJvd",disabled:"styles_disabled__14Os4",gradientAnimation:"styles_gradientAnimation__sTVNa"}},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),l=n(252),i=n(38),o=n(101),u=(n(136),n(12)),d=n(105),y=n.n(d),p=n(106),b=n(107),m=n.n(b),C=n(2),_=" currencies/LOAD_CURRENCIES",v="currencies/LOAD_CURRENCIES_SUCCESS",f="currencies/LOAD_CURRENCIES_FAIL",h={data:[],isProcessing:!1,isProcessed:!1};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(C.a)({},e,{isProcessing:!0});case v:var n=Object.keys(t.payload.data.rates).map(function(e){return{value:t.payload.data.rates[e],label:e}});return Object(C.a)({},e,{isProcessing:!1,isProcessed:!0,data:n});case f:return Object(C.a)({},e,{isProcessing:!1,isProcessed:!1});default:return e}},g=n(108),O=n.n(g),T=" selectedCurrencies/CONVERT_CURRENCIES",j="selectedCurrencies/CONVERT_CURRENCIES_SUCCESS",S="selectedCurrencies/CONVERT_CURRENCIES_FAIL",k={currencyToSell:{label:"",amount:""},currencyToBuy:{label:"",amount:""},exchangeRate:{isProcessing:!1,isProcessed:!1,currencyToSell:{label:"",rate:0},currencyToBuy:{label:"",rate:0}}},P=function(e,t){return{type:"selectedCurrencies/SET_CURRENCY_DATA",currencyType:e,data:t}};function R(e,t){return{types:[T,j,S],payload:{request:{url:"/latest",params:{symbols:"".concat(e,",").concat(t),base:e}}}}}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.exchangeRate,a=e.currencyToSell,r=e.currencyToBuy;switch(t.type){case"selectedCurrencies/SET_CURRENCY_DATA":var c=t.data,s=c.label,l=c.amount,i=void 0===l?"":l,o="currencyToSell"===t.currencyType,u=!o&&r.label!==s,d=function(e,t,n,a,r){if(!n)return"";var c,s=e.currencyToBuy.rate;return a&&(c=r*s),t&&!a&&(c=n*s),t||a||(c=n/s),String(c).includes("."),Number(c.toFixed(2))}(n,o,i,u,a.amount),y=u?a.amount:d;return Object(C.a)({},e,{currencyToSell:Object(C.a)({},a,{label:o?s:a.label,amount:o?i:y}),currencyToBuy:Object(C.a)({},r,{label:o?r.label:s,amount:o||u?d:i})});case T:return Object(C.a)({},e,{exchangeRate:Object(C.a)({},n,{isProcessing:!0})});case"selectedCurrencies/RESET_SELECTED_VALUES":return Object(C.a)({},e,{currencyToSell:Object(C.a)({},e.currencyToSell,{amount:""}),currencyToBuy:Object(C.a)({},e.currencyToBuy,{amount:""})});case j:var p=t.payload.data,b=p.rates,m=p.base,_=Object.keys(b).find(function(e){return e!==m});return Object(C.a)({},e,{exchangeRate:{isProcessing:!1,isProcessed:!0,currencyToSell:Object(C.a)({},n.currencyToSell,{label:m,rate:b[m]}),currencyToBuy:Object(C.a)({},n.currencyToBuy,{label:_,rate:b[_]})}});case S:return Object(C.a)({},e,{exchangeRate:Object(C.a)({},k.exchangeRate,{isProcessing:!1,isProcessed:!1})});default:return e}},D={status:{error:"",successMessage:""},data:[{label:"USD",value:1210},{label:"PLN",value:5e3},{label:"GBP",value:156},{label:"THB",value:29200}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"pockets/IS_OVER_LIMIT":return Object(C.a)({},e,{status:{successMessage:"",error:t.data?"Insufficient funds!":""}});case"pockets/UPDATE_POCKET_CURRENCY":var n=O()(e.data),a=t.data.find(function(e){return e.newPocket});return a&&n.push({label:a.label,value:a.value}),n.forEach(function(e,a){var r=t.data.find(function(t){return t.label===e.label});return r&&(n[a].value=r.value),null}),Object(C.a)({},e,{data:n,status:{error:"",successMessage:"Currencies have been successfully exchanged!"}});default:return e}},L=Object(u.c)({currencies:E,selectedCurrencies:A,pockets:N}),w=y.a.create({baseURL:"https://api.exchangeratesapi.io/",responseType:"json"}),I="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.d,x=n(253),B=n(251),V=n(250),U=n(37),W=n.n(U),M=n(3),F=n(6),X=n.n(F),q=n(59),K=n.n(q),Y=function(e){return e.isLoading?r.a.createElement("div",{className:K.a.loader},r.a.createElement("div",{className:K.a.loaderDots})):null};Y.defaultProps={isLoading:!0};var H=Y,J=n(60),G=n.n(J),z=function(e){var t,n=e.content,a=e.isLoading,c=X()((t={},Object(M.a)(t,G.a.pageContainer,!0),Object(M.a)(t,G.a.fadeInContent,!a),t));return r.a.createElement("div",{className:c},a?r.a.createElement(H,{isLoading:a}):n)};z.defaultProps={isLoading:!1};var Q=z,Z=n(22),$=n.n(Z),ee=function(e){var t,n=e.children,a=e.disabled,c=e.fullWidth,s=e.primary,l=e.onClick,i=e.raiseOnInteraction,o=X()((t={},Object(M.a)(t,$.a.btn,!0),Object(M.a)(t,$.a.primary,s),Object(M.a)(t,$.a.disabled,a),Object(M.a)(t,$.a.fullWidth,c),Object(M.a)(t,$.a.raise,i),t));return r.a.createElement("button",{className:o,onClick:l,disabled:a},n)};ee.defaultProps={disabled:!1,fullWidth:!1,primary:!1,raiseOnInteraction:!1};var te=ee,ne=function(e){var t=e.history;Object(a.useEffect)(function(){return document.body.classList.add("animatedBg"),function(){document.body.classList.remove("animatedBg")}});var n=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Ladies and gentlemen..."),r.a.createElement("p",null,"I would like to present you the currencies converter!"),r.a.createElement(te,{raiseOnInteraction:!0,primary:!0,onClick:function(){return t.push("/converter")}},"SEE THE DEVICE"));return r.a.createElement(Q,{content:n})},ae=n(17),re=n(18),ce=n(20),se=n(19),le=n(21),ie=n(1),oe=n.n(ie),ue=(oe.a.shape({label:oe.a.string,amount:oe.a.oneOfType([oe.a.string,oe.a.number])}),oe.a.shape({label:oe.a.string,amount:oe.a.oneOfType([oe.a.string,oe.a.number])}),n(39)),de=n.n(ue),ye=function(e){var t,n=e.data,a=n.error,c=n.successMessage;if(!a&&!c)return null;var s=X()((t={},Object(M.a)(t,de.a.statusContainer,!0),Object(M.a)(t,de.a.error,a),Object(M.a)(t,de.a.success,c),t)),l=a||c;return r.a.createElement("div",{className:s},r.a.createElement("p",null,l))};ye.defaultProps={data:{error:"",successMessage:""}};var pe=ye,be=n(61),me=n.n(be),Ce=n(109),_e=n(62),ve=n.n(_e),fe=function(e){return!e||Number(e)<=0?"":Math.round(100*e)/100},he=n(117),Ee=(oe.a.array,oe.a.func,oe.a.string,oe.a.bool,oe.a.bool,oe.a.shape({label:oe.a.string,value:oe.a.oneOfType([oe.a.string,oe.a.number])}),{options:[],onChange:function(){},placeholder:"",isDisabled:!0,showValues:!1,value:{label:"",value:""}}),ge=n(40),Oe=n.n(ge),Te=function(e){var t=e.onChange,n=e.options,a=e.placeholder,c=e.value,s=e.isDisabled,l=e.showValues,i=X()(Object(M.a)({},Oe.a.inputContainer,!0));return r.a.createElement("div",{className:i},r.a.createElement(he.a,{options:n,onChange:function(e){return t(e)},placeholder:a,value:c,isDisabled:s,formatOptionLabel:function(e){var t,n=X()((t={},Object(M.a)(t,Oe.a.optionContainer,!0),Object(M.a)(t,Oe.a.disabled,e.disabled),t));return r.a.createElement("div",{className:n,key:e.label},e.label,l&&r.a.createElement("span",null,e.value))},isOptionDisabled:function(e){return e.disabled}}))};Te.defaultProps=Object(C.a)({},Ee);var je=Te,Se=(oe.a.func,oe.a.oneOfType([oe.a.string,oe.a.number]),oe.a.bool,oe.a.string,{onChange:function(){},value:"",isDisabled:!0,placeholder:""}),ke=n(42),Pe=n.n(ke),Re=function(e){var t,n=e.onChange,a=e.isError,c=e.type,s=e.value,l=e.placeholder,i=e.isDisabled,o=X()((t={},Object(M.a)(t,Pe.a.inputContainer,!0),Object(M.a)(t,Pe.a.isError,a),Object(M.a)(t,Pe.a.isDisabled,i),t));return r.a.createElement("div",{className:o},r.a.createElement("input",{onChange:function(e){var t=e.target.value;return n(t)},value:s,placeholder:l,disabled:i,type:c}))};Re.defaultProps=Object(C.a)({},Se);var Ae=Re,De=n(43),Ne=n.n(De),Le=function(e){var t=e.selectInput,n=e.input,a=X()(Object(M.a)({},Ne.a.comboBoxContainer,!0));return r.a.createElement("div",{className:a},r.a.createElement("div",{className:Ne.a.selectWrapper},r.a.createElement(je,t)),r.a.createElement("div",{className:Ne.a.inputWrapper},r.a.createElement(Ae,n)))};Le.defaultProps={selectInput:Ee,input:Se};var we=Le,Ie=n(113),xe=n.n(Ie),Be=function(e){function t(e){var n;return Object(ae.a)(this,t),(n=Object(ce.a)(this,Object(se.a)(t).call(this,e))).onCurrencySelect=function(e){var t=n.props,a={amount:t.selectedCurrencies[t.currencyType].amount,label:e.label};n.updateCurrencyData(a)},n.onAmountChange=function(e){var t=fe(e),a=Object(C.a)({},n.state.currencyData,{amount:t});n.updateCurrencyData(a)},n.updateCurrencyData=function(){var e=Object(Ce.a)(me.a.mark(function e(t){return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({currencyData:t,selectedCurrency:t.label}),e.next=3,n.props.setCurrencyValue(n.props.currencyType,t);case 3:n.checkPocketLimit();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.checkPocketLimit=function(){var e=n.props,t=e.selectedCurrencies,a=e.pockets,r=e.checkPocketLimit,c=e.currencies,s=(a.length&&a||c).find(function(e){return e.label===t.currencyToSell.label});return r(t.currencyToSell.amount>s.value)},n.getSelectedCurrencyValue=function(){return n.props.currencies.find(function(e){return e.label===n.state.selectedCurrency})},n.getAvailableCurrencies=function(){var e=n.props,t=e.currencies,a=e.selectedCurrencies,r="currencyToSell"===e.currencyType?"currencyToBuy":"currencyToSell";return t.map(function(e){return Object(C.a)({},e,{disabled:e.label===a[r].label})})},n.state={currencies:n.getAvailableCurrencies(),selectedCurrency:e.initialCurrency,currencyData:{label:e.initialCurrency,amount:""}},n}return Object(le.a)(t,e),Object(re.a)(t,[{key:"componentDidMount",value:function(){this.props.setCurrencyValue(this.props.currencyType,this.state.currencyData)}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedCurrencies,n=t.currencyToSell,a=t.currencyToBuy,r=e.selectedCurrencies,c=r.currencyToSell,s=r.currencyToBuy;ve()(n,c)&&ve()(a,s)||this.setState({currencies:this.getAvailableCurrencies()})}},{key:"render",value:function(){var e=0===this.state.selectedCurrency.length,t=this.props,n=t.title,a=t.currencyType,c=t.selectedCurrencies,s=t.showValues,l=X()(Object(M.a)({},xe.a.currencySelectorContainer,!0));return r.a.createElement("div",{className:l},n&&r.a.createElement("p",null,n,":"),r.a.createElement(we,{key:this.currencies,selectInput:{options:this.state.currencies,onChange:this.onCurrencySelect,placeholder:"Select currency...",value:this.getSelectedCurrencyValue(),showValues:s,isDisabled:e},input:{onChange:this.onAmountChange,type:"number",value:c[a].amount,isDisabled:e,placeholder:"Currency amount..."}}))}}]),t}(a.Component);Be.defaultProps={title:"",showValues:!1,pockets:[]};var Ve=Be,Ue=n(114),We=n.n(Ue),Me=1e4,Fe=function(e){function t(){var e,n;Object(ae.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(ce.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(c)))).getCurrencyRates=function(e){var t=n.props,a=t.convertCurrencies,r=t.selectedCurrencies,c=r.currencyToSell,s=r.currencyToBuy;e&&a(c.label,s.label),n.interval&&clearInterval(n.interval),n.interval=setInterval(function(){a(c.label,s.label)},Me)},n.renderCurrenciesRatio=function(e){var t=e.currencyToSell,n=e.currencyToBuy,a=e.isProcessing,c=e.isProcessed;return a||c?a&&!c?r.a.createElement(H,{isLoading:!0}):r.a.createElement("span",null,"".concat(t.rate," ").concat(t.label," = ").concat(n.rate," ").concat(n.label)):null},n}return Object(le.a)(t,e),Object(re.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.selectedCurrencies,t=e.currencyToSell,n=e.currencyToBuy;t.label&&n.label&&this.getCurrencyRates(!0)}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedCurrencies,n=t.currencyToSell,a=t.currencyToBuy,r=e.selectedCurrencies,c=r.currencyToSell,s=r.currencyToBuy,l=n.label!==c.label||a.label!==s.label,i=!c.label&&!s.label||!this.interval;l&&this.getCurrencyRates(i)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=X()(Object(M.a)({},We.a.ratesCompareContainer,!0));return r.a.createElement("div",{className:e},this.renderCurrenciesRatio(this.props.selectedCurrencies.exchangeRate))}}]),t}(a.Component),Xe=n(44),qe=n.n(Xe),Ke=function(e){function t(){return Object(ae.a)(this,t),Object(ce.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(le.a)(t,e),Object(re.a)(t,[{key:"componentDidMount",value:function(){this.props.loadCurrencies()}},{key:"render",value:function(){var e=this.props,t=e.selectedCurrencies,n=e.currencies,a=e.pockets,c=a.status.error||!t.currencyToSell.amount,s=r.a.createElement("div",{className:qe.a.converterContainer},r.a.createElement("div",{className:qe.a.screenContainer},r.a.createElement(Ve,{title:"Your currency pockets",currencies:a.data,setCurrencyValue:this.props.setCurrencyValue,currencyType:"currencyToSell",initialCurrency:"USD",selectedCurrencies:t,showValues:!0,checkPocketLimit:this.props.checkPocketLimit}),r.a.createElement(Fe,{selectedCurrencies:t,convertCurrencies:this.props.convertCurrencies}),r.a.createElement(Ve,{title:"Available currencies to buy",currencies:n.data,setCurrencyValue:this.props.setCurrencyValue,currencyType:"currencyToBuy",initialCurrency:"PLN",selectedCurrencies:t,pockets:a.data,checkPocketLimit:this.props.checkPocketLimit}),r.a.createElement("div",{className:qe.a.buttonContainer},r.a.createElement(te,{fullWidth:!0,disabled:!!c,onClick:this.props.exchangeCurrency},"EXCHANGE IT!")),r.a.createElement(pe,{data:a.status})));return n.isProcessing||n.isProcessed?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{title:"Convert it!"}),r.a.createElement(Q,{content:s,isLoading:n.isProcessing})):null}}]),t}(a.Component),Ye={loadCurrencies:function(){return{types:[_,v,f],payload:{request:{url:"/latest"}}}},setCurrencyValue:function(e,t){return function(n,a){var r=a(),c=t.label,s="currencyToSell"===e,l=r.selectedCurrencies.exchangeRate,i=l.currencyToSell,o=l.currencyToBuy,u=s?i.label:o.label;if(i.label&&o.label&&u!==c){var d={toSell:s?c:i.label,toBuy:s?o.label:c};return n(R(d.toSell,d.toBuy)).then(function(){return n(P(e,t))})}return n(P(e,t))}},convertCurrencies:R,checkPocketLimit:function(e){return{type:"pockets/IS_OVER_LIMIT",data:e}},exchangeCurrency:function(){return function(e,t){var n=t(),a=n.selectedCurrencies,r=a.currencyToSell,c=a.currencyToBuy,s=function(e){return n.pockets.data.find(function(t){return t.label===e})},l={label:c.label,value:c.amount,newPocket:!0},i=s(r.label),o=s(c.label)||l,u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?e+t:e-t;return Math.round(100*n)/100},d=[Object(C.a)({},i,{value:u(i.value,r.amount)}),Object(C.a)({},o,{value:u(o.value,c.amount,!0)})];e({type:"pockets/UPDATE_POCKET_CURRENCY",data:d}),e({type:"selectedCurrencies/RESET_SELECTED_VALUES"})}}},He=[{path:"/",component:ne,exact:!0},{path:"/converter",component:Object(i.b)(function(e){return{currencies:e.currencies,selectedCurrencies:e.selectedCurrencies,pockets:e.pockets}},Ye)(Ke),exact:!0}],Je=Object(V.a)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{defaultTitle:"Currency Calculator",title:"Homepage",titleTemplate:"%s | Currency Calculator"}),r.a.createElement(x.a,null,He.map(function(e,t){return r.a.createElement(B.a,Object.assign({key:e.path||t},e))})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.e)(L,e,I(Object(u.a)(m()(w),p.a)))}();s.a.render(r.a.createElement(i.a,{store:Ge},r.a.createElement(l.a,null,r.a.createElement(o.a,null,r.a.createElement(Je,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},39:function(e,t,n){e.exports={statusContainer:"styles_statusContainer__3oLPY",error:"styles_error__3LBTI",success:"styles_success__2AbWw",gradientAnimation:"styles_gradientAnimation__hP9ZL"}},40:function(e,t,n){e.exports={inputContainer:"styles_inputContainer__dOVvq",optionContainer:"styles_optionContainer__1Mkf1",disabled:"styles_disabled__1EPwy",gradientAnimation:"styles_gradientAnimation__2zNFE"}},42:function(e,t,n){e.exports={inputContainer:"styles_inputContainer__wWuQV",isDisabled:"styles_isDisabled__PXKe7",gradientAnimation:"styles_gradientAnimation__3Cd-5"}},43:function(e,t,n){e.exports={comboBoxContainer:"styles_comboBoxContainer__3Tu3C",selectWrapper:"styles_selectWrapper__1pvka",inputWrapper:"styles_inputWrapper__1meRR",gradientAnimation:"styles_gradientAnimation__2F96P"}},44:function(e,t,n){e.exports={converterContainer:"styles_converterContainer__1qTe4",screenContainer:"styles_screenContainer__541Lo",buttonContainer:"styles_buttonContainer__2EKqa",gradientAnimation:"styles_gradientAnimation__cEBX6"}},59:function(e,t,n){e.exports={loader:"styles_loader__MDTWx",loaderDots:"styles_loaderDots__1_EoY",bounce_loader:"styles_bounce_loader__oy-Gr",gradientAnimation:"styles_gradientAnimation__HFx3L"}},60:function(e,t,n){e.exports={pageContainer:"styles_pageContainer__3EdcK",fadeInContent:"styles_fadeInContent__1nKH5",fadein:"styles_fadein__2WRmX",gradientAnimation:"styles_gradientAnimation__1M3Oi"}}},[[118,1,2]]]);
//# sourceMappingURL=main.b66d6967.chunk.js.map