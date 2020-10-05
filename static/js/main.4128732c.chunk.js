(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,a,t){e.exports={Button:"Button_Button__J3ibe"}},24:function(e,a,t){e.exports={App:"App_App__1334I"}},25:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(20),o=t.n(c),l=t(10),i=t(3),s=t(4),u=t(6),m=t(5),h=t(7),g=t.n(h),p=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={initialValue:""},e.handelChange=function(a){e.setState({initialValue:a.target.value})},e.handelSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.initialValue)},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:g.a.Searchbar},n.a.createElement("form",{onSubmit:this.handelSubmit,className:g.a.SearchForm},n.a.createElement("button",{type:"submit",className:g.a.SearchFormButton},n.a.createElement("span",{className:g.a.SearchFormButtonLabel},"Search")),n.a.createElement("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",onChange:this.handelChange,autoFocus:!0,placeholder:"Search images and photos"})))}}]),t}(r.Component),d=t(21),f=t.n(d),I=function(e,a){return f.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=17529185-ee1c09177ccec717363f5cb46&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},_=t(8),b=t.n(_);function y(e){var a=e.newImage,t=e.openingModalWindow;return n.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){var a=e.id,r=e.webformatURL,c=e.tags,o=e.largeImageURL;return n.a.createElement("li",{key:a,className:b.a.ImageGalleryItem},n.a.createElement("img",{src:r,alt:c,"data-source":o,className:b.a.ImageGalleryItemImage,onClick:t}))})))}var S=t(22),v=t.n(S);function E(e){var a=e.uploadTheFollowingPictures;return n.a.createElement("button",{type:"button",onClick:a,className:v.a.Button},"Load more")}var w=t(23),F=t.n(w),L=(t(68),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(F.a,{type:"Circles",color:"#00BFFF",height:80,width:80})}}]),t}(n.a.Component)),O=t(9),j=t.n(O);function M(e){var a=e.closeModal,t=e.largeImage;return n.a.createElement("div",{className:j.a.Overlay,onClick:a},n.a.createElement("div",{className:j.a.Modal},n.a.createElement("img",{src:t,alt:"",className:j.a.ItemImage})))}var N=t(24),G=t.n(N),x=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={pictures:[],searchQuery:"",page:1,error:null,isLoading:!1,isLargeImageURL:""},e.fetchPictures=function(){var a=e.state,t=a.searchQuery,r=a.page;e.setState({isLoading:!0}),console.log(""),I(t,r).then((function(a){return e.setState((function(e){return{pictures:[].concat(Object(l.a)(e.pictures),Object(l.a)(a)),page:e.page+1}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({isLoading:!1})}))},e.ModalWindow=function(a){var t=e.state.pictures;a.preventDefault(),console.log(a.target.dataset.source),console.log(t),e.setState({isLargeImageURL:a.target.dataset.source})},e.exitFromTheModal=function(a){a.preventDefault(),e.setState({isLargeImageURL:""})},e.changeTheSearchStatus=function(a){e.setState({searchQuery:a,pictures:[],page:1})},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,a){var t=a.searchQuery,r=this.state.searchQuery,n=a.page,c=this.state.page;t!==r&&this.fetchPictures(),n!==c&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.pictures,t=e.error,r=e.isLoading,c=e.isLargeImageURL;return n.a.createElement("div",{className:G.a.App},n.a.createElement(p,{onSubmit:this.changeTheSearchStatus}),t&&n.a.createElement("p",null,"ERROR"),r&&n.a.createElement(L,null),a.length>0&&n.a.createElement(y,{newImage:a,openingModalWindow:this.ModalWindow}),a.length>0&&!r&&n.a.createElement(E,{uploadTheFollowingPictures:this.fetchPictures}),c&&n.a.createElement(M,{closeModal:this.exitFromTheModal,largeImage:c}))}}]),t}(r.Component);o.a.render(n.a.createElement(x,null),document.querySelector("#root"))},7:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2W4sv",SearchForm:"Searchbar_SearchForm__wR6gz",SearchFormButton:"Searchbar_SearchFormButton__3Jf-I",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel___3xw9",SearchFormInput:"Searchbar_SearchFormInput__2iZyE"}},8:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__1nLxH",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__1gO2V",ImageGalleryItem:"ImageGallery_ImageGalleryItem__18ezD",ItemImage:"ImageGallery_ItemImage__26WXA"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__27vdr",Modal:"Modal_Modal__2RVQ2",ItemImage:"Modal_ItemImage__25N2w"}}},[[25,1,2]]]);
//# sourceMappingURL=main.4128732c.chunk.js.map