(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={form:"ContactForm_form__19OSJ",btn:"ContactForm_btn__1OdyZ"}},20:function(t,e,n){t.exports={container:"Section_container__26QV4",title:"Section_title__32JOV"}},21:function(t,e,n){t.exports={title:"PageTitle_title__2ws9z"}},22:function(t,e,n){t.exports={title:"Title_title__1mvIy"}},25:function(t,e,n){t.exports={filter:"Filter_filter__1OI7o"}},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(5),l=n(9),u=n(3),b=n(17),j=n.n(b),d=n(4),f=n(18),m=n.n(f),O=n(6),h=n(2),p=Object(u.b)("phonebook/add"),x=Object(u.b)("phonebook/delete"),_=Object(u.b)("phonebook/updateFilter"),v=Object(u.c)([],(c={},Object(O.a)(c,p,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(O.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),C=Object(u.c)("",Object(O.a)({},_,(function(t,e){return e.payload}))),g=Object(h.c)({items:v,filter:C}),y=[].concat(Object(l.a)(Object(u.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[m.a]),k={key:"phonebook",storage:j.a,blacklist:["filter"]},N=Object(u.a)({reducer:{contacts:Object(d.g)(k,g)},middleware:y,devTools:!1}),w=Object(d.h)(N),L=n(19),S=n(20),I=n.n(S),F=n(1),A=function(t){var e=t.children;return Object(F.jsx)("section",{children:Object(F.jsx)("div",{className:I.a.container,children:e})})},D=n(21),P=n.n(D),V=function(t){var e=t.title;return e&&Object(F.jsx)("h1",{className:P.a.title,children:e})};V.defaultProps={title:""};var q=V,J=n(22),T=n.n(J),H=function(t){var e=t.title;return e&&Object(F.jsx)("h2",{className:T.a.title,children:e})};H.defaultProps={title:""};var U=H,z=n(23),B=n(24),Q=n(27),E=n(26),M=n(44),Y=n(14),Z=n.n(Y),G=function(t){Object(Q.a)(n,t);var e=Object(E.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(O.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=Object(M.a)(),c=t.state,a=c.name,r=c.number,i=t.props.items;if(a){var o=i.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}));if(o)alert("".concat(o.name," is already in contacts."));else{var s={id:n,name:a,number:r};t.props.submitHandler(s),t.reset()}}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(B.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("form",{className:Z.a.form,onSubmit:this.handleSubmit,children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(F.jsx)("button",{type:"submit",className:Z.a.btn,children:"Add"})]})}}]),n}(a.Component),K=Object(s.b)((function(t){return{items:t.contacts.items}}),(function(t){return{submitHandler:function(e){return t(p(e))}}}))(G),R=n(25),W=n.n(R),X=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(F.jsx)("div",{className:W.a.filter,children:Object(F.jsxs)("label",{children:["Find contacts by name",Object(F.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};X.defaultProps={filterValue:""};var $=Object(s.b)((function(t){return{filterValue:t.contacts.filter}}),(function(t){return{filterUpdate:function(e){return t(_(e.target.value))}}}))(X),tt=n(7),et=n.n(tt),nt=Object(s.b)((function(t){return{filtered:t.contacts.items.filter((function(e){var n=e.name,c=e.number;return n.toLowerCase().includes(t.contacts.filter.toLocaleLowerCase())||c.includes(t.contacts.filter)}))}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))((function(t){var e=t.filtered,n=t.onDeleteContact;return Object(F.jsx)("ul",{className:et.a.contacts,children:e.length?e.map((function(t){return Object(F.jsxs)("li",{className:et.a.item,children:[Object(F.jsxs)("div",{children:[Object(F.jsxs)("p",{children:[t.name,":"]}),Object(F.jsx)("p",{children:t.number})]}),Object(F.jsx)("button",{className:et.a.btn,onClick:function(){n(t.id)},children:"Delete"})]},t.id)})):Object(F.jsx)("li",{className:et.a.notification,children:"No contact found."})})})),ct=function(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(q,{title:"Phone Book"}),Object(F.jsxs)(A,{children:[Object(F.jsx)(U,{title:"Add contacts"}),Object(F.jsx)(K,{}),Object(F.jsx)(U,{title:"\u0421ontacts"}),Object(F.jsx)($,{}),Object(F.jsx)(nt,{})]})]})};n(40),n(41);o.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(s.a,{store:N,children:Object(F.jsx)(L.a,{loading:"Loading...",persistor:w,children:Object(F.jsx)(ct,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contacts:"ContactList_contacts__3AsHY",item:"ContactList_item__2DQ-I",btn:"ContactList_btn__qygUL",notification:"ContactList_notification__2s9_c"}}},[[42,1,2]]]);
//# sourceMappingURL=main.b3fdb88d.chunk.js.map