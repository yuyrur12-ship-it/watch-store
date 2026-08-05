// تغيير اسم المتجر تلقائياً

const storeTitle = document.getElementById("storeName");

if (storeTitle && typeof STORE !== "undefined") {
    storeTitle.textContent = STORE.name;
}
