(this["webpackJsonpbis-training-test"]=this["webpackJsonpbis-training-test"]||[]).push([[0],{28:function(e,r,t){},33:function(e,r,t){"use strict";t.r(r);var a=t(1),n=t(0),c=t.n(n),s=t(11),o=t.n(s),i=(t(28),t(14)),j=t.n(i),l=t(15),d=t(8),u=t(38),b=t(9),h=t(36),O=t(35),x=function(e){var r=e.handleClose,t=e.show,n=e.name,c=e.course;return Object(a.jsxs)(h.a,{show:t,onHide:r,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsxs)(h.a.Title,{children:[n," - Courses"]})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Certificate"}),Object(a.jsx)("th",{children:"Pass Marks"}),Object(a.jsx)("th",{children:"Course Name"}),Object(a.jsx)("th",{children:"Marks"}),Object(a.jsx)("th",{children:"Course ID"}),Object(a.jsx)("th",{children:"Course Code"})]})}),Object(a.jsx)("tbody",{children:c.classes.map((function(e,r){return e.marks>=e.passmarks?Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("a",{className:"btn btn-dark",href:"http://".concat(e.certificate),children:Object(a.jsx)(b.f,{})})}),Object(a.jsx)("td",{children:e.passmarks}),Object(a.jsx)("td",{children:e.classname}),Object(a.jsx)("td",{children:e.marks}),Object(a.jsx)("td",{children:e.classid}),Object(a.jsx)("td",{children:e.classcode})]},r):Object(a.jsxs)("tr",{style:{backgroundColor:"#e57373"},children:[Object(a.jsx)("td",{children:Object(a.jsx)("a",{className:"btn btn-dark",href:"http://".concat(e.certificate),children:Object(a.jsx)(b.f,{})})}),Object(a.jsx)("td",{children:e.passmarks}),Object(a.jsx)("td",{children:e.classname}),Object(a.jsx)("td",{children:e.marks}),Object(a.jsx)("td",{children:e.classid}),Object(a.jsx)("td",{children:e.classcode})]},r)}))})]})})]})},m=t(13),f=t(7),p=t(37),E=t(22);function g(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}function v(e){return!!e.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)}var C=function(e){var r=e.handleClose,t=e.show,c=e.user,s=Object(n.useState)({role:c.role,city:c.city,address:c.address,phone:c.phone,username:c.username,id:c.id,email:c.email,name:c.name}),o=Object(d.a)(s,2),i=o[0],j=o[1],l=Object(n.useState)({emailError:"",phoneError:"",usernameError:"",roleError:"",nameError:"",cityError:"",addressError:""}),b=Object(d.a)(l,2),O=b[0],x=b[1],C=function(e,r){x((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(m.a)({},"".concat(e),r))}))};Object(n.useEffect)((function(){i.email?i.email&&!g(i.email)?C("emailError","Email needs to be in format: mysite@domain.com"):C("emailError",""):C("emailError","Please provide an Email ID"),i.phone?i.phone&&!v(i.phone)?C("phoneError","Phone numbers needs to be in format: XXX XXX XXXX (Dashes/Dots/Spaces optional)"):C("phoneError",""):C("phoneError","Please provide a Phone Number"),i.name?C("nameError",""):C("nameError","Please provide a Name"),i.username?C("usernameError",""):C("usernameError","Please provide a Username"),i.role?C("roleError",""):C("roleError","Please provide a Role"),i.city?C("cityError",""):C("cityError","Please provide a City"),i.address?C("addressError",""):C("addressError","Please provide an Address")}),[i]);var y=function(e,t){if(O.emailError||O.phoneError||O.usernameError||O.roleError||O.nameError||O.cityError||O.addressError||O.addressError)window.alert("Please fix the errors before submitting.");else if(window.confirm("Are you sure you want to update User: ".concat(c.name," (with Id: ").concat(c.id,")?"))){var a=[];e.users.forEach((function(e){e.id===i.id?a.push(i):a.push(e)})),t({success:e.success,users:a}),r()}};return Object(a.jsx)(D.Consumer,{children:function(e){var n=e.usersApiData,s=e.setUsersApiData;return Object(a.jsxs)(h.a,{show:t,onHide:r,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsxs)(h.a.Title,{children:["Edit - ",c.name," (Id: ",c.id,")"]})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridId",children:[Object(a.jsx)(p.a.Label,{children:"Id"}),Object(a.jsx)(p.a.Control,{type:"text",readOnly:!0,defaultValue:i.id,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{id:e.target.value})}))}})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridName",children:[Object(a.jsx)(p.a.Label,{children:"Name"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Name",defaultValue:i.name,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{name:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.nameError})]})]}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridUsername",children:[Object(a.jsx)(p.a.Label,{children:"Username"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Username",defaultValue:i.username,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{username:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.usernameError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridEmail",children:[Object(a.jsx)(p.a.Label,{children:"Email"}),Object(a.jsx)(p.a.Control,{type:"email",placeholder:"Enter Email",defaultValue:i.email,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{email:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.emailError})]})]}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridPhone",children:[Object(a.jsx)(p.a.Label,{children:"Phone Number"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Phone Number",defaultValue:i.phone,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{phone:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.phoneError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridAddress",children:[Object(a.jsx)(p.a.Label,{children:"Address"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Address",defaultValue:i.address,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{address:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.addressError})]})]}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridCity",children:[Object(a.jsx)(p.a.Label,{children:"City"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter City",defaultValue:i.city,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{city:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.cityError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridRole",children:[Object(a.jsx)(p.a.Label,{children:"Role"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Role",defaultValue:i.role,onChange:function(e){return j((function(r){return Object(f.a)(Object(f.a)({},r),{},{role:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:O.roleError})]})]}),Object(a.jsx)(p.a.Row,{children:Object(a.jsx)(u.a,{variant:"warning",onClick:function(){return y(n,s)},children:"Update"})})]})})]})}})},y=function(e){var r=e.value,t=Object(n.useState)({}),c=Object(d.a)(t,2),s=c[0],o=c[1],i=Object(n.useState)(!0),h=Object(d.a)(i,2),O=h[0],m=h[1],f=Object(n.useState)({}),p=Object(d.a)(f,2),E=p[0],g=p[1],v=Object(n.useState)(!0),y=Object(d.a)(v,2),w=y[0],N=y[1],A=Object(n.useState)(!1),G=Object(d.a)(A,2),P=G[0],I=G[1],U=Object(n.useState)(!1),k=Object(d.a)(U,2),R=k[0],X=k[1],S=function(e){I(!0),function(){var r=Object(l.a)(j.a.mark((function r(){var t,a;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m(!0),r.next=3,fetch("https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id="+e);case 3:return t=r.sent,r.next=6,t.json();case 6:a=r.sent,o(a),m(!1);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()()},T=function(e,r){g(r.users.filter((function(r){return r.id===e}))),X(!0),N(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:r.name}),Object(a.jsx)("td",{children:r.username}),Object(a.jsx)("td",{children:r.role}),Object(a.jsx)("td",{children:r.city}),Object(a.jsx)("td",{children:r.address}),Object(a.jsx)("td",{children:r.phone}),Object(a.jsx)("td",{children:r.email}),Object(a.jsxs)("td",{children:[Object(a.jsxs)(u.a,{variant:"info",onClick:function(){return S(r.id)},children:[Object(a.jsx)(b.a,{})," Courses"]}),Object(a.jsx)(D.Consumer,{children:function(e){var t=e.usersApiData,n=e.setUsersApiData;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(u.a,{variant:"danger",onClick:function(){return e=r.id,a=t,c=n,void(window.confirm("Are you sure you wish to delete User: ".concat(e,"?"))&&c({success:a.success,users:a.users.filter((function(r){return r.id!==e}))}));var e,a,c},children:[Object(a.jsx)(b.g,{})," Delete"]}),Object(a.jsxs)(u.a,{variant:"warning",onClick:function(){return T(r.id,t)},children:[Object(a.jsx)(b.i,{})," Edit"]})]})}})]})]}),!O&&Object(a.jsx)(x,{handleClose:function(){return I(!1)},show:P,name:r.name,course:s}),!w&&Object(a.jsx)(C,{handleClose:function(){return X(!1)},show:R,user:E[0]})]})},w=function(e){var r=e.usersApiData,t=e.setUsersApiData,c=e.handleClose,s=e.show,o=Object(n.useState)({role:"",city:"",address:"",phone:"",username:"",id:"",email:"",name:""}),i=Object(d.a)(o,2),j=i[0],l=i[1],b=Object(n.useState)({emailError:"",phoneError:"",usernameError:"",roleError:"",nameError:"",cityError:"",addressError:""}),O=Object(d.a)(b,2),x=O[0],C=O[1],y=function(e,r){C((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(m.a)({},"".concat(e),r))}))};Object(n.useEffect)((function(){j.email?j.email&&!g(j.email)?y("emailError","Email needs to be in format: mysite@domain.com"):y("emailError",""):y("emailError","Please provide an Email ID"),j.phone?j.phone&&!v(j.phone)?y("phoneError","Phone numbers needs to be in format: XXX XXX XXXX (Dashes/Dots/Spaces optional)"):y("phoneError",""):y("phoneError","Please provide a Phone Number"),j.name?y("nameError",""):y("nameError","Please provide a Name"),j.username?y("usernameError",""):y("usernameError","Please provide a Username"),j.role?y("roleError",""):y("roleError","Please provide a Role"),j.city?y("cityError",""):y("cityError","Please provide a City"),j.address?y("addressError",""):y("addressError","Please provide an Address")}),[j]);var w=function(){var e=r.users;if(x.emailError||x.phoneError||x.usernameError||x.roleError||x.nameError||x.cityError||x.addressError||x.addressError)window.alert("Please fix the errors before submitting.");else if(window.confirm("Add User (Name: ".concat(j.name,") - Confirm"))){e.push(j);var a={success:r.success,users:e};t(a),c()}};return Object(a.jsxs)(h.a,{show:s,onHide:c,children:[Object(a.jsx)(h.a.Header,{closeButton:!0,children:Object(a.jsx)(h.a.Title,{children:"Add a New User"})}),Object(a.jsx)(h.a.Body,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(p.a.Row,{children:Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridName",children:[Object(a.jsx)(p.a.Label,{children:"Name"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Name",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{name:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.nameError})]})}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridUsername",children:[Object(a.jsx)(p.a.Label,{children:"Username"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Username",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{username:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.usernameError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridEmail",children:[Object(a.jsx)(p.a.Label,{children:"Email"}),Object(a.jsx)(p.a.Control,{type:"email",placeholder:"Enter Email",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{email:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.emailError})]})]}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridPhone",children:[Object(a.jsx)(p.a.Label,{children:"Phone Number"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Phone Number",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{phone:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.phoneError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridAddress",children:[Object(a.jsx)(p.a.Label,{children:"Address"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Address",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{address:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.addressError})]})]}),Object(a.jsxs)(p.a.Row,{children:[Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridCity",children:[Object(a.jsx)(p.a.Label,{children:"City"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter City",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{city:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.cityError})]}),Object(a.jsxs)(p.a.Group,{as:E.a,controlId:"formGridRole",children:[Object(a.jsx)(p.a.Label,{children:"Role"}),Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Enter Role",onChange:function(e){return l((function(r){return Object(f.a)(Object(f.a)({},r),{},{role:e.target.value})}))}}),Object(a.jsx)(p.a.Text,{className:"text-danger",children:x.roleError})]})]}),Object(a.jsx)(p.a.Row,{children:Object(a.jsx)(u.a,{variant:"primary",onClick:function(){return w()},children:"Add"})})]})})]})},N=function(e){var r=e.usersApiData,t=e.setUsersApiData,c=Object(n.useState)(!0),s=Object(d.a)(c,2),o=s[0],i=s[1],j=Object(n.useState)(!1),l=Object(d.a)(j,2),b=l[0],h=l[1],x=function(){h(!0),i(!1)};return Object(a.jsxs)("div",{className:"users-list",children:[Object(a.jsx)(u.a,{variant:"primary",className:"add-button",onClick:function(){return x()},children:"Add New User"}),!o&&Object(a.jsx)(w,{usersApiData:r,setUsersApiData:t,handleClose:function(){return h(!1)},show:b}),Object(a.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,variant:"light",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Role"}),Object(a.jsx)("th",{children:"City"}),Object(a.jsx)("th",{children:"Address"}),Object(a.jsx)("th",{children:"Phone"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Options"})]})}),Object(a.jsx)("tbody",{children:r.users.map((function(e,r){return Object(a.jsx)(y,{value:e},r)}))})]})]})},A=t.p+"static/media/loader.4b397384.gif",G=function(){return Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)("img",{src:A,alt:"loader icon",className:"loader-gif"})})},P=t.p+"static/media/company_logo.cf97cffb.png",I=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{children:Object(a.jsx)("img",{src:P,alt:"BIS Training Solutions Logo",className:"company-logo"})}),Object(a.jsx)("div",{className:"sub-heading",children:Object(a.jsxs)("h2",{children:[Object(a.jsx)(b.h,{})," Users List"]})})]})},U=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("footer",{children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(b.d,{})," 2020"]}),Object(a.jsxs)("a",{href:"http://www.google.com",children:[Object(a.jsx)(b.e,{})," Terms and Conditions"]}),Object(a.jsxs)("a",{href:"http://www.google.com",children:[Object(a.jsx)(b.c,{})," System Requirements"]}),Object(a.jsxs)("a",{href:"http://www.google.com",children:[Object(a.jsx)(b.b,{})," Certificate Verification"]})]})})},D=c.a.createContext(),k=function(){var e=Object(n.useState)([]),r=Object(d.a)(e,2),t=r[0],c=r[1],s=Object(n.useState)(!0),o=Object(d.a)(s,2),i=o[0],u=o[1],b=function(){var e=Object(l.a)(j.a.mark((function e(){var r,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pre.bistrainer.com/v1/index.cfm?action=testapi.users");case 2:return r=e.sent,e.next=5,r.json();case 5:t=e.sent,c(t),u(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),i?Object(a.jsx)(G,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I,{}),Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(D.Provider,{value:{usersApiData:t,setUsersApiData:c},children:Object(a.jsx)(N,{usersApiData:t,setUsersApiData:c})})}),Object(a.jsx)(U,{})]})};o.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.84171112.chunk.js.map