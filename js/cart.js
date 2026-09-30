const CART_KEY="atelier_noura_cart";
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||"[]")}catch{return[]}}
function saveCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartCount()}
function addToCart(id){const cart=getCart();const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart(cart);alert("تمت إضافة المنتج إلى السلة");}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==id));renderCart()}
function changeQty(id,delta){const cart=getCart();const item=cart.find(x=>x.id===id);if(item){item.qty+=delta;if(item.qty<1)cart.splice(cart.indexOf(item),1)}saveCart(cart);renderCart()}
function cartTotal(){return getCart().reduce((sum,x)=>{const p=productById(x.id);return sum+(p?p.price*x.qty:0)},0)}
function updateCartCount(){const el=document.getElementById("cartCount");if(el)el.textContent=getCart().reduce((s,x)=>s+x.qty,0)}
function renderCart(){const el=document.getElementById("cartView");if(!el)return;const cart=getCart();if(!cart.length){el.innerHTML='<div class="info-box"><p>السلة فارغة حاليًا.</p><a class="btn" href="products.html">تصفحي المنتجات</a></div>';return}el.innerHTML=cart.map(x=>{const p=productById(x.id);return `<div class="cart-row"><div class="mini-img"></div><div><strong>${p.name}</strong><div>${p.category}</div></div><div><button class="filter" onclick="changeQty('${p.id}',-1)">−</button> ${x.qty} <button class="filter" onclick="changeQty('${p.id}',1)">+</button></div><div class="price">${money(p.price*x.qty)}<br><button class="filter" onclick="removeFromCart('${p.id}')">حذف</button></div></div>`}).join("")+`<div class="cart-total"><h2>الإجمالي: ${money(cartTotal())}</h2><a class="btn" href="checkout.html">متابعة الطلب</a></div>`}
