(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5452392a"],{"24a3":function(t,e,s){"use strict";var r=s("421e"),a=s.n(r);a.a},"421e":function(t,e,s){},a97d:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("v-card",{attrs:{color:"transparent",flat:""}},[s("v-card-title",{staticClass:"display-1 font-weight-bold"},[t._v("Manage Departments")]),s("v-card-subtitle",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, voluptatum.")]),s("v-card-text",[s("custom-breadcrumbs",{attrs:{routes:t.breadcrumbRoutes}})],1),s("router-view")],1)],1)},a=[],i=s("e0e7"),n={components:{CustomBreadcrumbs:i["a"]},computed:{breadcrumbRoutes:function(){var t=this.$route.meta.breadcrumbs;return t||[]}}},c=n,u=s("2877"),o=s("6544"),d=s.n(o),l=s("b0af"),m=s("99d9"),b=Object(u["a"])(c,r,a,!1,null,null,null);e["default"]=b.exports;d()(b,{VCard:l["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCardTitle:m["d"]})},abd3:function(t,e,s){},e0e7:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-breadcrumbs",{class:t.className,staticStyle:{"padding-left":"0 !important"},attrs:{items:t.routes},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[s("router-link",{staticClass:"primary--text route",attrs:{to:r.to}},[s("div",{staticClass:"d-flex align-center"},[s("v-icon",{staticClass:"mr-1",attrs:{color:"primary"}},[t._v(t._s(r.icon))]),s("span",[t._v(t._s(r.text))])],1)])]}}])})},a=[],i={name:"custom-breadcrumbs",props:{routes:{type:Array,required:!0},className:{type:String,required:!1}}},n=i,c=(s("24a3"),s("2877")),u=s("6544"),o=s.n(u),d=(s("a15b"),s("5530")),l=(s("abd3"),s("ade3")),m=s("1c87"),b=s("58df"),p=Object(b["a"])(m["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(l["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),s=e.tag,r=e.data;return t("li",[t(s,Object(d["a"])(Object(d["a"])({},r),{},{attrs:Object(d["a"])(Object(d["a"])({},r.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=s("80d2"),h=Object(v["i"])("v-breadcrumbs__divider","li"),f=s("7560"),g=Object(b["a"])(f["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(d["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,s=[],r=0;r<this.items.length;r++){var a=this.items[r];s.push(a.text),e?t.push(this.$scopedSlots.item({item:a})):t.push(this.$createElement(p,{key:s.join("."),props:a},[a.text])),r<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),_=s("132d"),y=Object(c["a"])(n,r,a,!1,null,"52cbc403",null);e["a"]=y.exports;o()(y,{VBreadcrumbs:g,VIcon:_["a"]})}}]);
//# sourceMappingURL=chunk-5452392a.ade416dd.js.map