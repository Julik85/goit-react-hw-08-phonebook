"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[907],{9907:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(3433),r=n(9439),s=n(2791),c={form:"ContactForm_form__dhl+T",formName:"ContactForm_formName__9bHzl",formNumber:"ContactForm_formNumber__UMrmC",formBtn:"ContactForm_formBtn__qZGY3"},o=n(9434),i=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},m=function(e){return e.filter.filter},u=n(3634),d=n(184),f=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],l=t[1],m=(0,s.useState)(""),f=(0,r.Z)(m,2),h=f[0],p=f[1],b=(0,o.I0)(),_=(0,o.v9)(i);return(0,d.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;-1!==(0,a.Z)(_).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):b((0,u.uK)({name:n,number:h})),t.reset()},children:[(0,d.jsx)("label",{className:c.formLabel,children:"Name "}),(0,d.jsx)("input",{className:c.formName,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:n,onChange:function(e){var t=e.target.value;l(t)}}),(0,d.jsxs)("label",{className:c.formLabel,children:["Number",(0,d.jsx)("input",{className:c.formNumber,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:h,onChange:function(e){var t=e.target.value;p(t)}})]}),(0,d.jsx)("button",{className:c.formBtn,type:"submit",children:"Add contact"})]})},h={contactListItemBtn:"ContactList_contactListItemBtn__TXYnT"},p=function(){var e=function(e,t){return t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e}((0,o.v9)(i),(0,o.v9)(m)),t=(0,o.I0)();return(0,d.jsx)("div",{className:h.wraperContactList,children:(0,d.jsx)("ul",{className:h.contactList,children:e.map((function(e,n){return(0,d.jsxs)("li",{className:h.contactListItem,children:[e.name,": ",e.number,(0,d.jsx)("button",{type:"button",className:h.contactListItemBtn,onClick:function(){return function(e){return t((0,u.nE)(e))}(e.id)},children:"Delete"})]},n)}))})})},b="Filter_filterName__Y2kKA",_="Filter_filterLabel__+pnW-",x=n(4808),v=function(){var e=(0,o.I0)(),t=(0,o.v9)(m);return(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:_,children:"Find contacts by Name "}),(0,d.jsx)("input",{className:b,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){e((0,x.T)(t.target.value))}})]})},N=n(4270);function j(){var e=(0,o.I0)(),t=(0,o.v9)(l);return(0,s.useEffect)((function(){e((0,u.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N.q,{children:(0,d.jsx)("title",{children:"Phonebook"})}),(0,d.jsx)(f,{}),(0,d.jsx)("div",{children:t&&"Recuest in progress..."}),(0,d.jsx)(v,{}),(0,d.jsx)(p,{})]})}}}]);
//# sourceMappingURL=907.25bdb69e.chunk.js.map