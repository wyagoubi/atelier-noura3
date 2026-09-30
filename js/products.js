const PRODUCTS=[
{id:"bag-01",name:"حقيبة Atelier",category:"حقائب",price:2800,description:"حقيبة قماشية مصنوعة يدويًا بتفاصيل ناعمة."},
{id:"acc-01",name:"إكسسوار زهري",category:"إكسسوارات",price:700,description:"إكسسوار قماشي بسيط وأنيق."},
{id:"dress-01",name:"قطعة يومية",category:"ملابس",price:4200,description:"قطعة مريحة بتصميم هادئ."},
{id:"skirt-01",name:"تنورة Noura",category:"تنورات",price:3500,description:"تنورة مصنوعة بعناية ولمسة أنثوية."},
{id:"bag-02",name:"حقيبة صغيرة",category:"حقائب",price:2200,description:"حقيبة عملية للاستخدام اليومي."},
{id:"acc-02",name:"ربطة شعر قماشية",category:"إكسسوارات",price:500,description:"قطعة قماشية خفيفة بألوان مختلفة."}
];
function money(n){return new Intl.NumberFormat("ar-DZ").format(n)+" دج"}
function productById(id){return PRODUCTS.find(p=>p.id===id)}