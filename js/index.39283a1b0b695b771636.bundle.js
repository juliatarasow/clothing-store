(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[826],{434:()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}var t=document.getElementById("root");t.insertAdjacentHTML("beforeend",'\n    <div class="cart">\n    <i class="fas fa-cart-plus"></i>\n    <span>0</span>\n    </div>\n    '),fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return e})).then((function(n){var c,r=function(t){if(Array.isArray(t))return e(t)}(c=new Set(n.map((function(e){return e.category}))))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?e(t,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=r.pop();r.splice(1,0,a),r.forEach((function(e){var c=document.createElement("div");c.className="categories";var r=document.createElement("h2");r.innerText=e,c.appendChild(r);var a=document.createElement("div");a.className="product",n.filter((function(t){return t.category===e})).forEach((function(e){var t,n,c,r,o;a.insertAdjacentHTML("beforeend",(n=(t=e).id,c=t.image,r=t.title,o=t.price,'\n        <div class="product__card">\n            <img src='.concat(c,' alt="product').concat(n,'">\n            <div>\n                <h3>').concat(r,"</h3>\n                <p>").concat(o,'$</p>\n                <button class="addbutton" data-id=').concat(n,'>Add to Cart</button>\n            </div>\n            <div class="icons" >\n                <i class="far fa-eye" data-id=').concat(n,"></i>\n            </div>\n\n        </div>\n    ")))})),c.appendChild(a),t.appendChild(c)})),document.querySelectorAll("i.far").forEach((function(e){e.addEventListener("click",(function(e){var c=e.target.dataset.id;console.log(c);var r,a,o,i,d,s,l,u=n.find((function(e){return e.id==c}));t.insertAdjacentHTML("beforeend",(a=(r=u).id,o=r.image,i=r.title,d=r.price,s=r.category,l=r.description,'\n    <section id="myModal" class="modal">\n        <section class="modal__content">\n            <span class="close">&times;</span>\n            <div class="image">\n                <img src='.concat(o,' alt="product').concat(a,'">\n            </div>\n            <div class="details">\n                <h3>').concat(i,"</h3>\n                <p><b>Category :</b> ").concat(s," </p>\n                <p><b>Price :</b> ").concat(d,"$ </p>\n                <p><b>Description :</b> ").concat(l,' </p>\n                <button class="add_cart">Add to Cart</button>\n            </div>\n        </section>\n    </section> \n    ')));var p=document.querySelector(".modal");p.style.display="block",p.addEventListener("click",(function(e){switch(e.target.className){case"close":case"modal":p.style.display="none",t.removeChild(e.currentTarget)}}))}))}));var o=[];document.querySelectorAll(".addbutton").forEach((function(e){e.addEventListener("click",(function(t){if("Added"!=e.innerText){var c=t.target.dataset.id,r=n.find((function(e){return e.id==c}));o.push(r),o.length&&(document.querySelector(".cart").style.display="block",document.querySelector(".cart > span").innerText=o.length),e.innerText="Added",e.style.backgroundColor="black",e.style.color="white",e.style.border="none"}else alert("Item already in cart!")}))})),document.querySelector(".cart").addEventListener("click",(function(e){t.insertAdjacentHTML("beforeend",cartModal(o));var n=document.querySelector(".cart_modal");n.style.display="block",n.addEventListener("click",(function(e){switch(e.target.className){case"close":case"cart_modal":n.style.display="none",t.removeChild(e.currentTarget)}}))}))}))}},e=>{"use strict";e(e.s=434)}]);