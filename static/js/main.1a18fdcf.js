(()=>{"use strict";var e={8754:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});r(3861);var n=r(9526),o=r(3535),i=r(4803),a=r(5421),l=r(4942),d=r(5861),c=r(2982),s=r(885),u=r(1133),f=r(9233),p=r(1553),h=r(4333),g=r(9566),y=r(8859),b=r(2727),v=r(5519),x=r(7557);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=h.default.create({container:{flex:1,backgroundColor:"#F3F8F2"},header:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:10,paddingVertical:5,borderBottomWidth:1,borderBottomColor:"#ccc",backgroundColor:"#F3F8F2"},title:{fontSize:20,fontWeight:"bold"},listContent:{paddingVertical:10,paddingHorizontal:10},card:{borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5,backgroundColor:"#D9E5D6",borderWidth:1,borderColor:"lightgray",paddingVertical:10,paddingHorizontal:10},cardTitle:{fontSize:18,fontWeight:"bold"},cardContent:{marginVertical:10,textAlign:"center",justifyContent:"center"},cardText:{marginBottom:10},cardButton:{marginTop:10},headerButtons:{flexDirection:"row",alignItems:"center",flexDirection:"row",justifyContent:"space-evenly",marginHorizontal:3},buttonContainer:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:5,paddingVertical:1,paddingHorizontal:15,marginLeft:15,marginRight:15},sortButton:{marginRight:5},addRecipeButton:{marginLeft:5}});const w=function(){var e=(0,b.useNavigation)(),t=(0,n.useState)("default"),r=(0,s.default)(t,2),o=r[0],i=r[1],l=function(e){var t=(0,c.default)(w);"foodCategory"===e?t.sort((function(e,t){return e.foodCategory.localeCompare(t.foodCategory)})):t.sort((function(e,t){return e.id-t.id})),O(t)},h=(0,n.useState)([{id:1,title:"Spaghetti and Meatballs",foodCategory:"Italian",description:"A classic Italian dish with pasta and meatballs",instructions:"1. Boil water and cook spaghetti. 2. Make meatballs and cook in a pan. 3. Serve with sauce on top."},{id:2,title:"Deluxe BLT",foodCategory:"American",description:"A tasty sandwich with the classic bacon, lettuce tomato. ",instructions:"1. Bread chicken and fry in a pan. 2. Cover with marinara sauce and cheese. 3. Bake in oven. 4. Serve with pasta."},{id:3,title:"Tacos",foodCategory:"Mexican",description:"A classic Mexican dish with meat and vegetables wrapped in a tortilla",instructions:"1. Cook the meat with vegetables. 2. Warm up the tortillas. 3. Serve with toppings."},{id:4,title:"Sushi",foodCategory:"Japanese",description:"A Japanese dish made with vinegar rice and seafood or vegetables",instructions:"1. Cook the rice and mix with vinegar. 2. Cut the fish or vegetables. 3. Roll the sushi."}]),j=(0,s.default)(h,2),w=j[0],O=j[1];(0,n.useEffect)((function(){D()}),[]);var D=function(){var e=(0,d.default)((function*(){try{var e=yield v.default.getItem("@recipes");null!==e&&O(JSON.parse(e))}catch(t){console.error(t)}}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,d.default)((function*(e){try{yield v.default.setItem("@recipes",JSON.stringify(e))}catch(t){console.error(t)}}));return function(t){return e.apply(this,arguments)}}(),R=function(e){O((function(t){return[].concat((0,c.default)(t),[C({id:Math.random().toString()},e)])}))},S=function(){var e=(0,d.default)((function*(e){y.default.alert("Delete Recipe","Are you sure you want to delete this recipe?",[{text:"Cancel",style:"cancel"},{text:"OK",onPress:function(){var t=(0,d.default)((function*(){var t=w.filter((function(t){return t.id!==e}));O(t),yield B(t)}));return function(){return t.apply(this,arguments)}}()}])}));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)(u.default,{style:m.container,children:[(0,x.jsxs)(u.default,{style:m.header,children:[(0,x.jsx)(f.default,{style:m.title,children:"Recipe Library"}),(0,x.jsxs)(u.default,{style:m.buttonContainer,children:[(0,x.jsx)(u.default,{style:m.sortButton,children:(0,x.jsx)(p.default,{title:"Sort Recipe",onPress:function(){"default"===o?(l("foodCategory"),i("foodCategory")):"foodCategory"===o&&(l("default"),i("default"))},disabled:0===w.length,color:"#92B3AB"})}),(0,x.jsx)(u.default,{style:m.addRecipeButton,children:(0,x.jsx)(p.default,{title:"Add New Recipe",onPress:function(){e.navigate("AddRecipe",{addNewRecipe:R}),i("default")},color:"#92B3AB"})})]})]}),(0,x.jsx)(g.default,{data:w,renderItem:function(t){var r=t.item;return(0,x.jsxs)(a.Card,{containerStyle:m.card,children:[(0,x.jsx)(a.Card.Title,{style:m.cardTitle,children:r.title}),(0,x.jsx)(a.Card.Divider,{}),(0,x.jsxs)(u.default,{style:m.cardContent,children:[(0,x.jsxs)(f.default,{style:m.cardText,children:["Cuisine Category: ",r.foodCategory]}),(0,x.jsx)(a.Card.Divider,{}),(0,x.jsxs)(f.default,{style:m.cardText,children:["Recipe Description: ",r.description]}),(0,x.jsx)(a.Card.Divider,{}),(0,x.jsxs)(u.default,{style:m.buttonContainer,children:[(0,x.jsx)(p.default,{title:"View Recipe Details",onPress:function(){return t=r,void e.navigate("RecipeDetail",{recipe:t});var t},buttonStyle:m.cardButton,color:"#92B3AB"}),(0,x.jsx)(p.default,{title:"Delete Recipe",onPress:function(){return S(r.id)},buttonStyle:m.cardButton,color:"#92B3AB"})]})]})]})},keyExtractor:function(e){return e.id},contentContainerStyle:m.listContent})]})};var O=r(5439),D=h.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#F3F8F2",paddingHorizontal:10},title:{fontSize:24,fontWeight:"bold",marginBottom:20,color:"#100007"},input:{borderWidth:1,borderColor:"lightgray",padding:10,marginVertical:10,width:"100%",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5,width:"100%",backgroundColor:"#D9E5D6"},instructionsInput:{height:200,textAlignVertical:"top"},buttonContainer:{flexDirection:"row",justifyContent:"space-evenly",marginTop:20,width:"100%"}});const B=function(e){var t=e.route,r=(0,b.useNavigation)(),o=(0,n.useState)(""),i=(0,s.default)(o,2),a=i[0],l=i[1],d=(0,n.useState)(""),c=(0,s.default)(d,2),h=c[0],g=c[1],y=(0,n.useState)(""),v=(0,s.default)(y,2),j=v[0],C=v[1],m=(0,n.useState)(""),w=(0,s.default)(m,2),B=w[0],R=w[1];return(0,x.jsxs)(u.default,{style:D.container,children:[(0,x.jsx)(f.default,{style:D.title,children:"Add a new recipe:"}),(0,x.jsx)(O.default,{style:D.input,placeholder:"Recipe Title",value:a,onChangeText:function(e){return l(e)}}),(0,x.jsx)(O.default,{style:D.input,placeholder:"Recipe Description",value:h,onChangeText:function(e){return g(e)}}),(0,x.jsx)(O.default,{style:D.input,placeholder:"Food Category",value:B,onChangeText:function(e){return R(e)}}),(0,x.jsx)(O.default,{style:[D.input,D.instructionsInput],placeholder:"Recipes Instructions",multiline:!0,numberOfLines:10,value:j,onChangeText:function(e){return C(e)}}),(0,x.jsxs)(u.default,{style:D.buttonContainer,children:[(0,x.jsx)(p.default,{title:"Add New Recipe",onPress:function(){var e={title:a,description:h,instructions:j,foodCategory:B};t.params.addNewRecipe(e),r.goBack()},color:"#92B3AB"}),(0,x.jsx)(p.default,{title:"Return to Library",onPress:function(){return r.goBack()},color:"#92B3AB"})]})]})};var R=h.default.create({container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#F3F8F2",paddingHorizontal:10},card:{borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5,width:"100%",marginBottom:10,paddingHorizontal:20,paddingVertical:10,backgroundColor:"#D9E5D6",borderWidth:1,borderColor:"lightgray"},cardTitle:{fontSize:20,textAlign:"center",color:"#100007",fontWeight:"bold"},cardDescription:{marginBottom:10,textAlign:"center",color:"#100007"},cardCategory:{textAlign:"center",color:"#100007",fontWeight:"bold"},cardInstructions:{textAlign:"justify",color:"#100007",lineHeight:20,textAlign:"center"},cardDivider:{backgroundColor:"#DCDCDC",marginVertical:10}});const S=function(){var e=(0,b.useNavigation)(),t=(0,b.useRoute)().params.recipe;return(0,x.jsxs)(u.default,{style:R.container,children:[(0,x.jsxs)(a.Card,{containerStyle:R.card,children:[(0,x.jsx)(a.Card.Title,{style:R.cardTitle,children:t.title}),(0,x.jsx)(a.Card.Divider,{style:R.cardDivider}),(0,x.jsxs)(f.default,{style:R.cardCategory,children:["Category: ",t.foodCategory]}),(0,x.jsx)(a.Card.Divider,{style:R.cardDivider}),(0,x.jsx)(f.default,{style:R.cardDescription,children:t.description}),(0,x.jsx)(a.Card.Divider,{style:R.cardDivider}),(0,x.jsx)(f.default,{style:R.cardInstructions,children:t.instructions})]}),(0,x.jsx)(p.default,{title:"Return to Library",onPress:function(){e.goBack()},color:"#92B3AB"})]})};var k=(0,i.default)();function A(){return(0,x.jsx)(a.ThemeProvider,{children:(0,x.jsx)(o.default,{children:(0,x.jsxs)(k.Navigator,{initialRouteName:"RecipeLibrary",children:[(0,x.jsx)(k.Screen,{name:"RecipeLibrary",component:w,options:{headerLeft:null}}),(0,x.jsx)(k.Screen,{name:"AddRecipe",component:B,options:{headerLeft:null}}),(0,x.jsx)(k.Screen,{name:"RecipeDetail",component:S,options:{headerLeft:null}})]})})})}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],l=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[d])))?n.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,r.d(i,a),i}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/mobiledev-portfolio/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,l,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(d)var s=d(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(s)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[759],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.1a18fdcf.js.map