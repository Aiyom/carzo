const cars = [
  {
    id: 1,
    name: "Lamborghini Huracan Evo",
    type: "Luxury",
    area: "Downtown Dubai",
    price: 2150,
    rating: 4.98,
    seats: 2,
    transmission: "Auto",
    delivery: true,
    noDeposit: false,
    driver: true,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 2,
    name: "Audi RS Q8",
    type: "SUV",
    area: "Dubai Marina",
    price: 1450,
    rating: 4.94,
    seats: 5,
    transmission: "Auto",
    delivery: true,
    noDeposit: false,
    driver: true,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 3,
    name: "Tesla Model Y Performance",
    type: "Electric",
    area: "Business Bay",
    price: 620,
    rating: 4.91,
    seats: 5,
    transmission: "Auto",
    delivery: true,
    noDeposit: true,
    driver: false,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 4,
    name: "BMW X6 M",
    type: "SUV",
    area: "Palm Jumeirah",
    price: 980,
    rating: 4.88,
    seats: 5,
    transmission: "Auto",
    delivery: true,
    noDeposit: true,
    driver: true,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 5,
    name: "Porsche 911 Carrera",
    type: "Luxury",
    area: "DXB Airport",
    price: 1320,
    rating: 4.96,
    seats: 4,
    transmission: "Auto",
    delivery: true,
    noDeposit: false,
    driver: false,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 6,
    name: "BMW i7",
    type: "Electric",
    area: "Downtown Dubai",
    price: 890,
    rating: 4.9,
    seats: 5,
    transmission: "Auto",
    delivery: false,
    noDeposit: true,
    driver: true,
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 7,
    name: "Mercedes-Benz V-Class",
    type: "Family",
    area: "DXB Airport",
    price: 720,
    rating: 4.89,
    seats: 7,
    transmission: "Auto",
    delivery: true,
    noDeposit: true,
    driver: true,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 8,
    name: "Toyota Sienna Hybrid",
    type: "Family",
    area: "Dubai Marina",
    price: 460,
    rating: 4.84,
    seats: 7,
    transmission: "Auto",
    delivery: true,
    noDeposit: true,
    driver: false,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 9,
    name: "Kia Carnival",
    type: "Family",
    area: "Business Bay",
    price: 390,
    rating: 4.82,
    seats: 8,
    transmission: "Auto",
    delivery: true,
    noDeposit: true,
    driver: true,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=82",
  },
  {
    id: 10,
    name: "Hyundai Staria",
    type: "Family",
    area: "Downtown Dubai",
    price: 430,
    rating: 4.86,
    seats: 8,
    transmission: "Auto",
    delivery: true,
    noDeposit: false,
    driver: true,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=82",
  },
];

const dubaiCenter = { lat: 25.2048, lng: 55.2708 };
let googleMapsLoader = null;
let activeLocationForm = null;
let activeGoogleMap = null;
let activeGoogleMarker = null;
let activeGeocoder = null;

const translations = {
  en: {
    navCars: "Cars",
    navHosts: "Become a host",
    navSupport: "Support",
    signIn: "Sign in",
    eyebrow: "Dubai car sharing",
    headline: "Find the right car for every Dubai plan.",
    subhead: "Book vetted cars across Dubai, from airport-ready SUVs to weekend supercars.",
    location: "Location",
    from: "From",
    until: "Until",
    search: "Search",
    filters: "Filters",
    reset: "Reset",
    carType: "Car type",
    all: "All",
    luxury: "Luxury",
    suv: "SUV",
    family: "Family",
    electric: "Electric",
    maxPrice: "Max daily price",
    delivery: "Delivery available",
    noDeposit: "No deposit",
    withDriver: "With driver option",
    availableCars: "Available cars",
    recommended: "Recommended",
    priceLow: "Price: low to high",
    topRated: "Top rated",
    day: "day",
    seats: "seats",
    bookNow: "Book now",
    hostEyebrow: "For Dubai hosts",
    hostTitle: "Turn idle cars into booked days.",
    supportMetric: "Guest support",
    payoutMetric: "Fast payouts",
    trustMetric: "Average rating",
    listCar: "List your car",
    footerLine: "Marketplace MVP for premium peer-to-peer car rentals.",
    detailsCopy: "Premium insurance options, verified hosts, and delivery windows designed around Dubai traffic.",
    pickup: "Pickup",
    gearbox: "Gearbox",
    category: "Category",
    fullName: "Full name",
    phone: "Phone",
    email: "Email",
    deliveryAddress: "Delivery address",
    comment: "Comment",
    optional: "optional",
    sendRequest: "Send request",
    requestSent: "Request saved. Your email app is opening to send it.",
    requestSubject: "Carzo booking request",
    chooseOnMap: "Choose on map",
    chooseLocation: "Choose delivery point",
    locationPicked: "Delivery point selected",
    googleMapHint: "Zoom, move the map, then click the delivery point.",
    googleApiMissing: "Add a Google Maps API key in index.html to select a point inside the map.",
    pickedPoint: "Picked point",
    openGoogleMaps: "Open Google Maps",
  },
  ar: {
    navCars: "السيارات",
    navHosts: "أضف سيارتك",
    navSupport: "الدعم",
    signIn: "دخول",
    eyebrow: "مشاركة السيارات في دبي",
    headline: "اختر السيارة المناسبة لكل مشوار في دبي.",
    subhead: "احجز سيارات موثوقة في دبي، من سيارات المطار العائلية إلى السيارات الرياضية لعطلة نهاية الأسبوع.",
    location: "الموقع",
    from: "من",
    until: "إلى",
    search: "بحث",
    filters: "الفلاتر",
    reset: "إعادة",
    carType: "نوع السيارة",
    all: "الكل",
    luxury: "فاخرة",
    suv: "دفع رباعي",
    family: "عائلية",
    electric: "كهربائية",
    maxPrice: "أعلى سعر يومي",
    delivery: "التوصيل متاح",
    noDeposit: "بدون تأمين",
    withDriver: "خيار مع سائق",
    availableCars: "السيارات المتاحة",
    recommended: "موصى بها",
    priceLow: "السعر من الأقل",
    topRated: "الأعلى تقييما",
    day: "يوم",
    seats: "مقاعد",
    bookNow: "احجز الآن",
    hostEyebrow: "لأصحاب السيارات في دبي",
    hostTitle: "حوّل أيام التوقف إلى حجوزات.",
    supportMetric: "دعم الضيوف",
    payoutMetric: "مدفوعات سريعة",
    trustMetric: "متوسط التقييم",
    listCar: "أضف سيارتك",
    footerLine: "نسخة أولية لسوق تأجير السيارات الفاخرة بين الأفراد.",
    detailsCopy: "خيارات تأمين مميزة، ملاك موثقون، ومواعيد توصيل تناسب حركة دبي.",
    pickup: "الاستلام",
    gearbox: "القير",
    category: "الفئة",
    fullName: "الاسم الكامل",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    deliveryAddress: "عنوان التوصيل",
    comment: "ملاحظة",
    optional: "اختياري",
    sendRequest: "إرسال الطلب",
    requestSent: "تم حفظ الطلب. سيتم فتح تطبيق البريد لإرساله.",
    requestSubject: "طلب حجز من Carzo",
    chooseOnMap: "اختر من الخريطة",
    chooseLocation: "اختر نقطة التوصيل",
    locationPicked: "تم اختيار نقطة التوصيل",
    googleMapHint: "كبّر الخريطة وحرّكها ثم اضغط على نقطة التوصيل.",
    googleApiMissing: "أضف مفتاح Google Maps API في index.html لاختيار نقطة داخل الخريطة.",
    pickedPoint: "النقطة المختارة",
    openGoogleMaps: "افتح خرائط Google",
  },
};

const state = {
  language: "en",
  type: "All",
  maxPrice: 1800,
  delivery: false,
  noDeposit: false,
  driver: false,
  sort: "recommended",
  location: "Dubai Marina",
};

const elements = {
  html: document.documentElement,
  carGrid: document.querySelector("#carGrid"),
  priceRange: document.querySelector("#priceRange"),
  priceValue: document.querySelector("#priceValue"),
  typeFilters: document.querySelector("#typeFilters"),
  deliveryFilter: document.querySelector("#deliveryFilter"),
  depositFilter: document.querySelector("#depositFilter"),
  driverFilter: document.querySelector("#driverFilter"),
  sortInput: document.querySelector("#sortInput"),
  locationInput: document.querySelector("#locationInput"),
  searchSummary: document.querySelector("#searchSummary"),
  languageToggle: document.querySelector("#languageToggle"),
  themeToggle: document.querySelector("#themeToggle"),
  bookingDialog: document.querySelector("#bookingDialog"),
  bookingContent: document.querySelector("#bookingContent"),
};

const t = (key) => translations[state.language][key] || key;

function setInitialDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const afterTomorrow = new Date(today);
  afterTomorrow.setDate(today.getDate() + 3);
  document.querySelector("#fromInput").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#untilInput").value = afterTomorrow.toISOString().slice(0, 10);
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  elements.html.lang = state.language;
  elements.html.dir = state.language === "ar" ? "rtl" : "ltr";
  elements.languageToggle.textContent = state.language === "en" ? "AR" : "EN";
}

function getFilteredCars() {
  const filtered = cars.filter((car) => {
    const matchesType = state.type === "All" || car.type === state.type;
    const matchesPrice = car.price <= state.maxPrice;
    const matchesDelivery = !state.delivery || car.delivery;
    const matchesDeposit = !state.noDeposit || car.noDeposit;
    const matchesDriver = !state.driver || car.driver;
    return matchesType && matchesPrice && matchesDelivery && matchesDeposit && matchesDriver;
  });

  return filtered.sort((a, b) => {
    if (state.sort === "priceLow") return a.price - b.price;
    if (state.sort === "rating") return b.rating - a.rating;
    return b.rating * 100 - b.price / 100 - (a.rating * 100 - a.price / 100);
  });
}

function renderCars() {
  const filteredCars = getFilteredCars();
  elements.searchSummary.textContent = `${state.location} · ${filteredCars.length} ${state.language === "ar" ? "سيارات" : "cars"}`;

  elements.carGrid.innerHTML = filteredCars
    .map(
      (car) => `
        <article class="car-card">
          <img src="${car.image}" alt="${car.name}" loading="lazy">
          <div class="car-body">
            <div class="car-title">
              <h3>${car.name}</h3>
              <span class="rating">★ ${car.rating}</span>
            </div>
            <div class="car-meta">
              <span>${car.area}</span>
              <span>${car.seats} ${t("seats")}</span>
            </div>
            <div class="pill-row">
              <span>${car.type}</span>
              <span>${car.transmission}</span>
              ${car.delivery ? `<span>${t("delivery")}</span>` : ""}
              ${car.noDeposit ? `<span>${t("noDeposit")}</span>` : ""}
            </div>
            <div class="booking-price">
              <span><strong>${car.price.toLocaleString("en-US")} AED</strong> <small>/ ${t("day")}</small></span>
              <button class="primary-button" type="button" data-book="${car.id}">${t("bookNow")}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function syncTypeButtons() {
  document.querySelectorAll("[data-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.type === state.type);
  });
}

function setType(type) {
  state.type = type;
  syncTypeButtons();
  renderCars();
}

function openBooking(carId) {
  const car = cars.find((item) => item.id === Number(carId));
  if (!car) return;
  const fromDate = document.querySelector("#fromInput").value;
  const untilDate = document.querySelector("#untilInput").value;

  elements.bookingContent.innerHTML = `
    <div class="booking-layout">
      <img src="${car.image}" alt="${car.name}">
      <div class="booking-details">
        <div>
          <p class="eyebrow">${car.area}</p>
          <h2>${car.name}</h2>
        </div>
        <p>${t("detailsCopy")}</p>
        <div class="spec-list">
          <span><small>${t("category")}</small><strong>${car.type}</strong></span>
          <span><small>${t("pickup")}</small><strong>${car.delivery ? t("delivery") : car.area}</strong></span>
          <span><small>${t("gearbox")}</small><strong>${car.transmission}</strong></span>
          <span><small>${t("seats")}</small><strong>${car.seats}</strong></span>
        </div>
        <form class="booking-form" data-booking-form data-car-id="${car.id}">
          <div class="form-row">
            <label>
              <span>${t("fullName")}</span>
              <input name="name" autocomplete="name" required>
            </label>
            <label>
              <span>${t("phone")}</span>
              <input name="phone" type="tel" autocomplete="tel" required>
            </label>
          </div>
          <div class="form-row">
            <label>
              <span>${t("email")}</span>
              <input name="email" type="email" autocomplete="email" required>
            </label>
            <label class="address-label">
              <span>${t("deliveryAddress")} (${t("optional")})</span>
              <div class="address-control">
                <input name="address" autocomplete="street-address" value="${car.delivery ? state.location : ""}">
                <button class="map-button" type="button" data-toggle-location-map aria-label="${t("chooseOnMap")}" title="${t("chooseOnMap")}">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>
                </button>
              </div>
            </label>
          </div>
          <div class="location-map" data-location-map hidden>
            <div class="location-map-head">
              <div>
                <strong>${t("chooseLocation")}</strong>
                <small>${t("googleMapHint")}</small>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Dubai" target="_blank" rel="noreferrer">${t("openGoogleMaps")}</a>
            </div>
            <div class="google-map-canvas" data-google-map>
              <iframe
                title="Google Map Dubai"
                src="https://www.google.com/maps?q=Dubai&output=embed"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p class="map-help" data-map-help>${t("googleApiMissing")}</p>
            <p class="map-picked" data-map-picked></p>
          </div>
          <div class="form-row">
            <label>
              <span>${t("from")}</span>
              <input name="from" type="date" value="${fromDate}" required>
            </label>
            <label>
              <span>${t("until")}</span>
              <input name="until" type="date" value="${untilDate}" required>
            </label>
          </div>
          <label>
            <span>${t("comment")} (${t("optional")})</span>
            <textarea name="comment" rows="3"></textarea>
          </label>
          <div class="booking-price">
            <span><strong>${car.price.toLocaleString("en-US")} AED</strong> <small>/ ${t("day")}</small></span>
            <button class="secondary-button" type="submit">${t("sendRequest")}</button>
          </div>
          <p class="form-status" data-form-status></p>
        </form>
      </div>
    </div>
  `;
  elements.bookingDialog.showModal();
}

function getGoogleMapsApiKey() {
  return document.querySelector('meta[name="google-maps-api-key"]')?.content.trim() || "";
}

function loadGoogleMapsApi() {
  if (window.google?.maps) return Promise.resolve(window.google.maps);
  if (googleMapsLoader) return googleMapsLoader;

  const key = getGoogleMapsApiKey();
  if (!key) return Promise.reject(new Error("missing-google-maps-key"));

  googleMapsLoader = new Promise((resolve, reject) => {
    const callbackName = `initCarzoGoogleMap${Date.now()}`;
    window[callbackName] = () => {
      delete window[callbackName];
      resolve(window.google.maps);
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=${callbackName}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("google-maps-load-failed"));
    document.head.appendChild(script);
  });

  return googleMapsLoader;
}

function openLocationMap(form) {
  const mapPanel = form.querySelector("[data-location-map]");
  mapPanel.hidden = !mapPanel.hidden;
  if (mapPanel.hidden) return;

  activeLocationForm = form;
  loadGoogleMapsApi()
    .then(() => initGoogleMapPicker(form))
    .catch(() => {
      form.querySelector("[data-map-help]").textContent = t("googleApiMissing");
    });
}

function initGoogleMapPicker(form) {
  const mapNode = form.querySelector("[data-google-map]");
  const helpNode = form.querySelector("[data-map-help]");
  mapNode.innerHTML = "";
  helpNode.textContent = t("googleMapHint");

  activeGeocoder = new google.maps.Geocoder();
  activeGoogleMap = new google.maps.Map(mapNode, {
    center: dubaiCenter,
    zoom: 12,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  activeGoogleMarker = new google.maps.Marker({
    map: activeGoogleMap,
    position: dubaiCenter,
    draggable: true,
  });

  activeGoogleMap.addListener("click", (event) => setGoogleMapPoint(event.latLng));
  activeGoogleMarker.addListener("dragend", (event) => setGoogleMapPoint(event.latLng));

  const addressInput = form.querySelector('input[name="address"]');
  if (addressInput.value) {
    activeGeocoder.geocode({ address: addressInput.value }, (results, status) => {
      if (status === "OK" && results[0]) setGoogleMapPoint(results[0].geometry.location, results[0].formatted_address);
    });
  }
}

function setGoogleMapPoint(latLng, knownAddress = "") {
  if (!activeLocationForm) return;
  activeGoogleMarker.setPosition(latLng);
  activeGoogleMap.panTo(latLng);

  const addressInput = activeLocationForm.querySelector('input[name="address"]');
  const pickedNode = activeLocationForm.querySelector("[data-map-picked]");
  const status = activeLocationForm.querySelector("[data-form-status]");
  const fallback = `${latLng.lat().toFixed(6)}, ${latLng.lng().toFixed(6)}`;

  const applyAddress = (address) => {
    addressInput.value = address || fallback;
    pickedNode.textContent = `${t("pickedPoint")}: ${addressInput.value}`;
    status.textContent = t("locationPicked");
  };

  if (knownAddress) {
    applyAddress(knownAddress);
    return;
  }

  activeGeocoder.geocode({ location: latLng }, (results, geocodeStatus) => {
    applyAddress(geocodeStatus === "OK" && results[0] ? results[0].formatted_address : fallback);
  });
}

function submitBooking(form) {
  const car = cars.find((item) => item.id === Number(form.dataset.carId));
  if (!car) return;

  const formData = new FormData(form);
  const request = {
    car: car.name,
    price: `${car.price} AED / ${t("day")}`,
    location: state.location,
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    from: formData.get("from"),
    until: formData.get("until"),
    comment: formData.get("comment"),
    createdAt: new Date().toISOString(),
  };

  const savedRequests = JSON.parse(localStorage.getItem("carzoBookingRequests") || "[]");
  savedRequests.push(request);
  localStorage.setItem("carzoBookingRequests", JSON.stringify(savedRequests));

  const body = Object.entries(request)
    .map(([key, value]) => `${key}: ${value || "-"}`)
    .join("\n");
  const mailto = `mailto:bookings@carzo.ae?subject=${encodeURIComponent(t("requestSubject"))}&body=${encodeURIComponent(body)}`;

  form.querySelector("[data-form-status]").textContent = t("requestSent");
  window.location.href = mailto;
}

function resetFilters() {
  state.type = "All";
  state.maxPrice = 1800;
  state.delivery = false;
  state.noDeposit = false;
  state.driver = false;
  elements.priceRange.value = state.maxPrice;
  elements.priceValue.textContent = state.maxPrice;
  elements.deliveryFilter.checked = false;
  elements.depositFilter.checked = false;
  elements.driverFilter.checked = false;
  syncTypeButtons();
  renderCars();
}

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.location = elements.locationInput.value;
  renderCars();
  document.querySelector("#cars").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", (event) => {
  const typeButton = event.target.closest("[data-type]");
  if (typeButton) setType(typeButton.dataset.type);

  const bookButton = event.target.closest("[data-book]");
  if (bookButton) openBooking(bookButton.dataset.book);

  const mapToggle = event.target.closest("[data-toggle-location-map]");
  if (mapToggle) {
    const form = mapToggle.closest("[data-booking-form]");
    openLocationMap(form);
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-booking-form]");
  if (!form) return;
  event.preventDefault();
  submitBooking(form);
});

elements.priceRange.addEventListener("input", (event) => {
  state.maxPrice = Number(event.target.value);
  elements.priceValue.textContent = state.maxPrice;
  renderCars();
});

elements.deliveryFilter.addEventListener("change", (event) => {
  state.delivery = event.target.checked;
  renderCars();
});

elements.depositFilter.addEventListener("change", (event) => {
  state.noDeposit = event.target.checked;
  renderCars();
});

elements.driverFilter.addEventListener("change", (event) => {
  state.driver = event.target.checked;
  renderCars();
});

elements.sortInput.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCars();
});

document.querySelector("#resetFilters").addEventListener("click", resetFilters);

elements.languageToggle.addEventListener("click", () => {
  state.language = state.language === "en" ? "ar" : "en";
  translatePage();
  renderCars();
});

elements.themeToggle.addEventListener("click", () => {
  elements.html.classList.toggle("dark");
});

document.querySelector("#closeDialog").addEventListener("click", () => {
  elements.bookingDialog.close();
});

setInitialDates();
translatePage();
syncTypeButtons();
renderCars();
