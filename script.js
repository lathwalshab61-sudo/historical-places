/* ============================================================
   HISTORICAL PLACES IN PUNJAB — JAVASCRIPT
   ============================================================ */

'use strict';

/* ============================================================
   DATA — All places, festivals, blogs
   ============================================================ */

const DATA = {
  featured: [
    {
      id: 'golden-temple',
      title: 'GOLDEN TEMPLE, AMRITSAR',
      desc: 'The holiest shrine of Sikhism, a symbol of peace and spiritual beauty.',
      img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=640&q=80',
      category: 'Gurudwara',
      location: 'Amritsar, Punjab',
      timings: '24 Hours (Langar: 6AM–10PM)',
      entry: 'Free Entry',
      fullDesc: 'Sri Harmandir Sahib, colloquially known as the Golden Temple, is the preeminent spiritual site of Sikhism and is located in Amritsar, Punjab, India. Construction of the temple was started by the fifth Sikh Guru, Guru Arjan Dev ji in 1581 CE. The temple is built around a man-made pool (sarovar) called the Amrit Sarovar, completed in 1577 by Guru Ram Das. The temple is open to all people regardless of religion, gender, or social status.',
      highlights: ['24/7 Open Shrine', 'Sacred Amrit Sarovar', 'Free Langar Daily', 'Akal Takht nearby', 'Night view illumination']
    },
    {
      id: 'jallianwala-bagh',
      title: 'JALLIANWALA BAGH, AMRITSAR',
      desc: 'A poignant memorial of the 1919 massacre, tracing the path of sacrifice.',
      img: 'https://images.unsplash.com/photo-1545126913-b7d4f1fb6547?w=640&q=80',
      category: 'Historical Memorial',
      location: 'Amritsar, Punjab',
      timings: '6:30AM – 7:30PM',
      entry: '₹5 per person',
      fullDesc: "Jallianwala Bagh is a public garden in Amritsar, Punjab, notable for the Jallianwala Bagh massacre that occurred there in 1919. On 13 April 1919, troops of the British Indian Army commanded by Colonel Reginald Dyer opened fire on an unarmed gathering of at least 1,000 men, women, and children. The garden is now a national memorial. Bullet marks on the walls and the Martyr's Well remain visible as reminders of this tragic event.",
      highlights: ['Eternal Flame', "Martyr's Well", 'Bullet-marked walls', 'Sound & Light Show', 'Museum of Sacrifice']
    },
    {
      id: 'qila-mubarak',
      title: 'QILA MUBARAK COMPLEX, PATIALA',
      desc: 'Step into the royal past, explore palaces, museums, and unparalleled architecture.',
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=640&q=80',
      category: 'Fort & Palace',
      location: 'Patiala, Punjab',
      timings: '10AM – 5PM (Closed Mon)',
      entry: '₹20 per person',
      fullDesc: "Qila Mubarak, meaning 'Auspicious Fort', is a magnificent architectural complex in Patiala, built in 1763 by Baba Ala Singh, the founder of the Patiala state. The complex includes the Qila Androon (inner fort), Darbar Hall, and Darbara Sahib Gurudwara. The fort showcases a blend of Punjabi and Mughal architectural styles. It served as the seat of the Patiala royal family for over two centuries.",
      highlights: ['Mughal Architecture', 'Darbar Hall', 'Sheesh Mahal Gallery', 'Royal Artifacts', 'Traditional Paintings']
    },
    {
      id: 'virasat-e-khalsa',
      title: 'VIRASAT-E-KHALSA, ANANDPUR SAHIB',
      desc: 'An immersive journey through 500 years of Sikh history and culture.',
      img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=640&q=80',
      category: 'Museum',
      location: 'Anandpur Sahib, Punjab',
      timings: '9AM – 4:30PM (Closed Mon)',
      entry: '₹200 per adult',
      fullDesc: "Virasat-e-Khalsa (Heritage of Khalsa) is a magnificent museum and cultural complex located in Anandpur Sahib, designed by renowned architect Moshe Safdie. Inaugurated in 2011, it celebrates 500 years of Sikh heritage and culture across ten breathtaking galleries. The museum houses thousands of artifacts, manuscripts, paintings, and interactive exhibits depicting the life of Gurus, Punjabi traditions, and the founding of the Khalsa Panth.",
      highlights: ['World-Class Architecture', '10 Heritage Galleries', 'Interactive Exhibits', 'Sikh Manuscript Collection', 'Panoramic Views']
    }
  ],

  forts: [
    {
      id: 'gobindgarh-fort',
      title: 'Gobindgarh Fort',
      location: 'Amritsar, Punjab',
      desc: 'A 300-year-old historic fort that served as the treasury of Maharaja Ranjit Singh. Now transformed into a heritage entertainment hub.',
      img: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=480&q=80',
      badge: 'UNESCO Listed',
      rating: '4.5',
      category: 'Fort',
      location_full: 'Amritsar, Punjab',
      timings: '10AM – 8PM',
      entry: '₹150 per adult',
      fullDesc: 'Gobindgarh Fort, built in the early 19th century, served as the main armoury and treasury of Maharaja Ranjit Singh. Today it has been transformed into a vibrant heritage destination featuring museums, cultural shows, and colonial-era cannons.',
      highlights: ['Heritage Walk', 'Sikh Museum', 'Cultural Shows', 'HistoriCity Zone', 'Laser Show']
    },
    {
      id: 'bathinda-fort',
      title: 'Qila Mubarak, Bathinda',
      location: 'Bathinda, Punjab',
      desc: 'One of the oldest forts in India, dating back to around 90-110 CE. Razia Sultana, the first female ruler of Delhi, was imprisoned here.',
      img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=480&q=80',
      badge: 'Historic',
      rating: '4.2',
      category: 'Fort',
      timings: '8AM – 6PM',
      entry: '₹5 per person',
      fullDesc: "Qila Mubarak in Bathinda is one of the oldest surviving forts in India, believed to have been build during the Kushana period. Notably, Razia Sultana, the first and only female ruler of Delhi Sultanate, was imprisoned here in 1240 CE.",
      highlights: ['Ancient Ramparts', "Razia Sultana's Prison", 'Sikh Gurdwara inside', 'Panoramic Views']
    },
    {
      id: 'anandpur-sahib-fort',
      title: 'Anandgarh Fort, Anandpur Sahib',
      location: 'Anandpur Sahib, Punjab',
      desc: 'Built by Guru Gobind Singh Ji, this fort complex is closely linked to the founding of the Khalsa and numerous historic Sikh battles.',
      img: 'https://images.unsplash.com/photo-1561361058-c24e021e2979?w=480&q=80',
      badge: 'Sikh Heritage',
      rating: '4.7',
      category: 'Fort',
      timings: 'Open All Day',
      entry: 'Free',
      fullDesc: 'The fort complex at Anandpur Sahib, which includes Anandgarh, Lohgarh, Fatehgarh, and Holgarh, was built by Guru Gobind Singh Ji. It was the seat from which the Khalsa Panth was established in 1699.',
      highlights: ['Sacred Battlefield', 'Khalsa Founding Site', 'Heritage Structures', 'Hola Mohalla Festival Ground']
    }
  ],

  gurudwaras: [
    {
      id: 'darbar-sahib',
      title: 'Sri Darbar Sahib (Golden Temple)',
      location: 'Amritsar, Punjab',
      desc: 'The holiest shrine in Sikhism housed in gold, surrounded by the sacred Amrit Sarovar. Visited by over 100,000 devotees daily.',
      img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=480&q=80',
      badge: '5th Sacred Takhta',
      rating: '5.0',
      category: 'Gurudwara',
      timings: '24 Hours',
      entry: 'Free',
      fullDesc: 'Sri Harmandir Sahib (Golden Temple) is the premier Sikh spiritual site. The gold-plated structure, surrounded by the sacred Amrit Sarovar, welcomes over 100,000 pilgrims and tourists daily, serving free langar (community meal) to all.',
      highlights: ['Golden Architecture', 'Free Langar 24/7', 'Sacred Sarovar Bath', 'Akal Takht', 'Sikh Museum']
    },
    {
      id: 'takht-damdama-sahib',
      title: 'Takht Sri Damdama Sahib',
      location: 'Bathinda, Punjab',
      desc: 'One of five Takhts (seats of temporal authority) in Sikhism, located in Talwandi Sabo, where Guru Gobind Singh Ji stayed for nine months.',
      img: 'https://images.unsplash.com/photo-1609766856923-7da6a9793e41?w=480&q=80',
      badge: 'Sikh Takht',
      rating: '4.8',
      category: 'Gurudwara',
      timings: '4AM – 10PM',
      entry: 'Free',
      fullDesc: 'Takht Sri Damdama Sahib is one of five Takhts in Sikhism, located in Talwandi Sabo (Bathinda district). Guru Gobind Singh Ji visited here in 1706 and completed re-compiling the Guru Granth Sahib Ji here, adding hymns of Guru Tegh Bahadur Ji.',
      highlights: ['One of Five Takhts', 'Guru Granth Sahib re-compilation site', 'University of Sikhism', 'Sarovars & Divan Hall']
    },
    {
      id: 'gurudwara-ber-sahib',
      title: 'Gurudwara Ber Sahib',
      location: 'Sultanpur Lodhi, Punjab',
      desc: 'Where Guru Nanak Dev Ji received divine enlightenment while bathing in the Kali Bein river — marking the beginning of Sikhism.',
      img: 'https://images.unsplash.com/photo-1573048617078-ee7a618c8c01?w=480&q=80',
      badge: 'Enlightenment Site',
      rating: '4.9',
      category: 'Gurudwara',
      timings: '4AM – 10PM',
      entry: 'Free',
      fullDesc: 'Gurudwara Ber Sahib marks the spot where Guru Nanak Dev Ji meditated and received divine enlightenment at the Kali Bein river. The Ber (jujube) tree under which he meditated is still present, venerated by devotees worldwide.',
      highlights: ['Spiritual Enlightenment Site', 'Ancient Ber Tree', 'Kali Bein River', 'Serene Atmosphere']
    }
  ],

  museums: [
    {
      id: 'virasat-khalsa-museum',
      title: 'Virasat-e-Khalsa Museum',
      location: 'Anandpur Sahib, Punjab',
      desc: 'World-class museum celebrating 500 years of Sikh history across ten breathtaking galleries designed by Moshe Safdie.',
      img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=480&q=80',
      badge: 'World Class',
      rating: '4.9',
      category: 'Museum',
      timings: '9AM – 4:30PM (Closed Mon)',
      entry: '₹200 Adults / ₹100 Students',
      fullDesc: 'Virasat-e-Khalsa is one of the most architecturally stunning and educationally rich museums in India. Designed by architect Moshe Safdie, the museum features ten elaborate galleries showcasing the heritage of the Sikh faith over five centuries.',
      highlights: ['10 Heritage Galleries', 'Interactive Technology', 'Sikh Manuscript Vault', 'Iconic Architecture', 'Panoramic Terraces']
    },
    {
      id: 'partition-museum',
      title: 'Partition Museum',
      location: 'Amritsar, Punjab',
      desc: "The world's first museum dedicated to the 1947 Partition of India, housed in the historic Town Hall of Amritsar.",
      img: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=480&q=80',
      badge: 'Unique in World',
      rating: '4.7',
      category: 'Museum',
      timings: '10AM – 5PM (Closed Mon)',
      entry: '₹50 per person',
      fullDesc: "The Partition Museum in Amritsar is the world's first museum dedicated to the Partition of India in 1947. Located in the historic Town Hall building, it preserves testimonies, artifacts, and documents of one of history's largest human migrations.",
      highlights: ['World\'s First Partition Museum', 'Oral History Archive', 'Interactive Galleries', 'Personal Testimonies', 'Historic Town Hall Building']
    },
    {
      id: 'central-sikh-museum',
      title: 'Central Sikh Museum',
      location: 'Amritsar, Punjab',
      desc: 'Located within the Golden Temple complex, housing priceless artifacts, paintings of Sikh Gurus, and historic arms.',
      img: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=480&q=80',
      badge: 'Sacred Heritage',
      rating: '4.6',
      category: 'Museum',
      timings: '8AM – 5PM',
      entry: 'Free',
      fullDesc: 'The Central Sikh Museum, located inside the Golden Temple complex, documents Sikh history through paintings, photographs, and artifacts. The collection includes portraits of all ten Sikh Gurus, historic weaponry, and documents of Sikh martyrdom.',
      highlights: ['Guru Portraits Gallery', 'Historic Weaponry', 'Sikh Martyrdom Exhibit', 'Rare Manuscripts', 'Free Entry']
    }
  ],

  sites: [
    {
      id: 'wagah-border',
      title: 'Wagah Border Ceremony',
      location: 'Amritsar, Punjab',
      desc: 'The iconic India-Pakistan border ceremony — a breathtaking display of military pride, patriotism, and pageantry at sunset.',
      img: 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=480&q=80',
      badge: 'Must-See',
      rating: '4.8',
      category: 'Attraction',
      timings: 'Ceremony: 45 min before sunset',
      entry: 'Free',
      fullDesc: "The Wagah Border Ceremony, also known as the 'Beating Retreat', is a daily military practice that has been taking place since 1959. The ceremony involves the synchronized closing of the international border gate and lowering of each country's flag by soldiers of both nations.",
      highlights: ['Daily Flag Ceremony', 'Patriotic Atmosphere', 'Crowd of Thousands', 'Photography Permitted', 'Indo-Pakistan Border Experience']
    },
    {
      id: 'kali-bein',
      title: 'Kali Bein River, Sultanpur Lodhi',
      location: 'Kapurthala, Punjab',
      desc: 'The sacred rivulet where Guru Nanak Dev Ji received divine enlightenment in 1499 CE, now revitalized by an environmental movement.',
      img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80',
      badge: 'Spiritual Significance',
      rating: '4.5',
      category: 'Sacred Site',
      timings: 'Always Open',
      entry: 'Free',
      fullDesc: "Kali Bein is a 160 km holy rivulet that flows through Hoshiarpur and Kapurthala districts of Punjab. The river holds immense significance in Sikhism as it is where Guru Nanak Dev Ji went missing for three days and returned with the divine message 'There is no Hindu, there is no Muslim.'",
      highlights: ['Spiritual Significance', 'Guru Nanak Enlightenment Site', 'Eco-restoration Project', 'Scenic Ghats']
    },
    {
      id: 'kapurthala-palace',
      title: 'Jagatjit Palace, Kapurthala',
      location: 'Kapurthala, Punjab',
      desc: 'A breathtaking French châteauesque palace built by Maharaja Jagatjit Singh after his visit to Versailles, now a prestigious school.',
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=480&q=80',
      badge: 'French Architecture',
      rating: '4.6',
      category: 'Palace',
      timings: '10AM – 5PM',
      entry: 'External View Only',
      fullDesc: "Jagatjit Palace in Kapurthala is a spectacular example of French-colonial architecture in India. Built around 1900 after Maharaja Jagatjit Singh visited France and was enchanted by the Palace of Versailles. The palace now houses Sainik School Kapurthala.",
      highlights: ['French Baroque Architecture', 'Versailles-Inspired Gardens', 'Heritage Photo Spot', 'Unique in India']
    }
  ],

  festivals: [
    { name: 'Baisakhi', date: 'April 13–14', icon: '🎊', desc: 'Celebrating the Punjabi New Year and the founding of the Khalsa Panth in 1699. Vibrant bhangra, gidda, and processions.', location: 'Anandpur Sahib & Amritsar' },
    { name: 'Hola Mohalla', date: 'Day after Holi', icon: '⚔️', desc: 'Warriors\' festival at Anandpur Sahib with gatka (Sikh martial art) displays, kirtan, and magnificent processions of Nihang Singhs.', location: 'Anandpur Sahib' },
    { name: 'Gurpurab', date: 'As per Sikh Calendar', icon: '🪷', desc: 'Celebrations marking the birth and martyrdom anniversaries of the Sikh Gurus with Nagar Kirtan processions and prayers.', location: 'All across Punjab' },
    { name: 'Lohri', date: 'January 13', icon: '🔥', desc: 'Winter harvest festival celebrated with bonfires, folk songs, bhangra, gidda, and traditional Punjabi foods like til and gur.', location: 'All across Punjab' },
    { name: 'Kila Raipur Sports Festival', date: 'February', icon: '🏇', desc: 'Famous as the "Rural Olympics", featuring unique rural sports like bullock-cart races, kabaddi, and traditional Punjabi games.', location: 'Ludhiana, Punjab' },
    { name: 'Rose Festival, Chandigarh', date: 'February/March', icon: '🌹', desc: 'Celebrated at the Zakir Hussain Rose Garden with cultural events, competitions, and exhibitions of rare rose varieties.', location: 'Chandigarh' }
  ],

  blog: [
    {
      title: "A Pilgrim's guide to the Golden Temple: Everything you need to know",
      excerpt: 'From the ethereal early morning prayers to the free langar that feeds hundreds of thousands, the Golden Temple experience is one that stays with you forever. Here\'s your complete guide to making the most of your visit.',
      tag: 'Spiritual',
      date: 'Feb 15, 2026',
      img: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=480&q=80'
    },
    {
      title: 'Top 10 Hidden Historical Gems of Punjab You Must Visit',
      excerpt: 'Beyond the Golden Temple and Jallianwala Bagh lies a treasure trove of lesser-explored historical sites — from a French château in Kapurthala to the oldest fort in India in Bathinda.',
      tag: 'Travel Guide',
      date: 'Jan 28, 2026',
      img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=480&q=80'
    },
    {
      title: 'Experiencing Hola Mohalla at Anandpur Sahib: A Festival Like No Other',
      excerpt: 'Thousands of Nihang warriors on horseback, the thunderous beat of drums, acrobatic displays of Gatka — Hola Mohalla at Anandpur Sahib is a visual spectacle unlike any festival in the world.',
      tag: 'Festivals',
      date: 'Jan 10, 2026',
      img: 'https://images.unsplash.com/photo-1561361058-c24e021e2979?w=480&q=80'
    }
  ]
};

/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */

/** Create HTML element with attributes */
function el(tag, attrs = {}, ...children) {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') element.className = v;
    else if (k === 'html') element.innerHTML = v;
    else if (k === 'text') element.textContent = v;
    else element.setAttribute(k, v);
  });
  children.forEach(c => { if (c) element.appendChild(c); });
  return element;
}

/** Show a toast notification */
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/** Animate counting numbers */
function animateCount(el, target) {
  const isLarge = target >= 1000;
  let start = 0;
  const duration = 1800;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    if (isLarge) {
      el.textContent = current >= 1000
        ? (current / 1000).toFixed(1).replace('.0', '') + 'K+'
        : current + '+';
    } else {
      el.textContent = current + '+';
    }
    if (progress < 1) requestAnimationFrame(step);
    else {
      el.textContent = isLarge
        ? (target / 1000).toFixed(0) + 'K+'
        : target + '+';
    }
  };
  requestAnimationFrame(step);
}

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

/** Render Featured Destination Cards */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = '';
  DATA.featured.forEach((item, i) => {
    const card = el('div', { class: 'dest-card animate-on-scroll' });
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <img class="dest-card-img" src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x340/0d2137/c8a951?text=${encodeURIComponent(item.title)}'"/>
      <div class="dest-card-overlay"></div>
      <div class="dest-card-body">
        <h3 class="dest-card-title">${item.title}</h3>
        <p class="dest-card-desc">${item.desc}</p>
        <button class="dest-card-btn" data-id="${item.id}" data-type="featured">
          VIEW DETAILS <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;
    card.querySelector('.dest-card-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(item);
    });
    card.addEventListener('click', () => openModal(item));
    grid.appendChild(card);
  });
}

/** Render a standard Place Card */
function createPlaceCard(item, delay = 0) {
  const card = el('div', { class: 'place-card animate-on-scroll' });
  card.style.transitionDelay = `${delay}s`;
  const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '½' : '');
  card.innerHTML = `
    <div class="place-card-img-wrap">
      <img class="place-card-img" src="${item.img}" alt="${item.title}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/480x200/0d2137/c8a951?text=${encodeURIComponent(item.title)}'"/>
      <span class="place-card-badge">${item.badge}</span>
    </div>
    <div class="place-card-body">
      <h3 class="place-card-title">${item.title}</h3>
      <p class="place-card-location"><i class="fas fa-map-marker-alt"></i>${item.location}</p>
      <p class="place-card-desc">${item.desc}</p>
      <div class="place-card-footer">
        <div class="place-card-rating">
          <span class="stars">${stars}</span>
          <span>${item.rating}</span>
        </div>
        <span class="place-card-link">View Details <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openModal(item));
  return card;
}

/** Render all grid sections */
function renderGrids() {
  const sections = [
    { gridId: 'fortsGrid', data: DATA.forts },
    { gridId: 'gurudwarasGrid', data: DATA.gurudwaras },
    { gridId: 'museumsGrid', data: DATA.museums },
    { gridId: 'sitesGrid', data: DATA.sites }
  ];
  sections.forEach(({ gridId, data }) => {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    data.forEach((item, i) => {
      grid.appendChild(createPlaceCard(item, i * 0.1));
    });
  });
}

/** Render Festivals */
function renderFestivals() {
  const grid = document.getElementById('festivalsGrid');
  if (!grid) return;
  DATA.festivals.forEach((f, i) => {
    const card = el('div', { class: 'festival-card animate-on-scroll' });
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="festival-icon">${f.icon}</div>
      <h3 class="festival-name">${f.name}</h3>
      <p class="festival-date"><i class="fas fa-calendar"></i> ${f.date} &nbsp;|&nbsp; ${f.location}</p>
      <p class="festival-desc">${f.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/** Render Blog */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  DATA.blog.forEach((post, i) => {
    const card = el('div', { class: 'blog-card animate-on-scroll' });
    card.style.transitionDelay = `${i * 0.12}s`;
    card.innerHTML = `
      <div class="blog-card-img-wrap">
        <img class="blog-card-img" src="${post.img}" alt="${post.title}" loading="lazy"
          onerror="this.src='https://via.placeholder.com/480x200/0d2137/c8a951?text=Blog'"/>
      </div>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span class="blog-card-tag">${post.tag}</span>
          <span class="blog-card-date"><i class="fas fa-calendar-alt"></i> ${post.date}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <span class="blog-card-read-more">Read More <i class="fas fa-arrow-right"></i></span>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   MODAL
   ============================================================ */

function openModal(item) {
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalImg').src = item.img;
  document.getElementById('modalImg').alt = item.title;
  document.getElementById('modalImg').onerror = function () {
    this.src = `https://via.placeholder.com/680x280/0d2137/c8a951?text=${encodeURIComponent(item.title)}`;
  };
  document.getElementById('modalCategory').textContent = item.category || '';
  document.getElementById('modalTitle').textContent = item.title || '';
  document.getElementById('modalLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${item.location || item.location_full || ''}`;
  document.getElementById('modalTimings').innerHTML = `<i class="fas fa-clock"></i> ${item.timings || ''}`;
  document.getElementById('modalEntry').innerHTML = `<i class="fas fa-ticket-alt"></i> ${item.entry || ''}`;
  document.getElementById('modalDesc').textContent = item.fullDesc || item.desc || '';

  const highlightsEl = document.getElementById('modalHighlights');
  highlightsEl.innerHTML = '';
  (item.highlights || []).forEach(h => {
    const chip = el('span', { class: 'highlight-chip', text: h });
    highlightsEl.appendChild(chip);
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.getElementById('modalShareBtn').addEventListener('click', () => {
  const title = document.getElementById('modalTitle').textContent;
  if (navigator.share) {
    navigator.share({ title, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link copied to clipboard!');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================================
   SCROLL ANIMATION (Intersection Observer)
   ============================================================ */

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ============================================================
   STATS COUNTER ANIMATION
   ============================================================ */

function initStatsCounter() {
  const statSection = document.querySelector('.stats-section');
  if (!statSection) return;
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      document.querySelectorAll('.stat-number[data-target]').forEach(el => {
        animateCount(el, parseInt(el.dataset.target));
      });
    }
  }, { threshold: 0.4 });
  observer.observe(statSection);
}

/* ============================================================
   SIDEBAR TOGGLE
   ============================================================ */

function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = window.innerWidth <= 768 ? 'hidden' : '';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) closeSidebar();
    else openSidebar();
  });
  closeBtn?.addEventListener('click', closeSidebar);
  overlay?.addEventListener('click', closeSidebar);

  // Handle desktop vs mobile sidebar state
  function checkSidebarState() {
    if (window.innerWidth > 768) {
      // On desktop: sidebar always visible via CSS flex
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  }
  window.addEventListener('resize', checkSidebarState);
}

/* ============================================================
   NAVBAR ACTIVE ON SCROLL
   ============================================================ */

function initNavActive() {
  const sections = ['home', 'forts', 'gurudwaras', 'museums', 'sites', 'plan', 'blog'];
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[data-section="${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */

function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('mobileNavMenu');

  toggle?.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.className = menu.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* ============================================================
   SEARCH FUNCTIONALITY
   ============================================================ */

const allPlaces = [
  ...DATA.featured,
  ...DATA.forts,
  ...DATA.gurudwaras,
  ...DATA.museums,
  ...DATA.sites
];

function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchBtn = document.getElementById('searchBtn');

  function performSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      searchDropdown.classList.remove('active');
      searchDropdown.innerHTML = '';
      return;
    }
    const results = allPlaces.filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.location || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    ).slice(0, 6);

    searchDropdown.innerHTML = '';
    if (results.length === 0) {
      searchDropdown.innerHTML = '<div class="search-item"><i class="fas fa-search"></i> No results found.</div>';
    } else {
      results.forEach(item => {
        const div = el('div', { class: 'search-item' });
        div.innerHTML = `<i class="fas fa-map-marker-alt"></i><div><strong>${item.title}</strong><br><small style="color:#888">${item.location || ''}</small></div>`;
        div.addEventListener('click', () => {
          openModal(item);
          searchDropdown.classList.remove('active');
          searchInput.value = '';
        });
        searchDropdown.appendChild(div);
      });
    }
    searchDropdown.classList.add('active');
  }

  searchInput?.addEventListener('input', () => performSearch(searchInput.value));
  searchBtn?.addEventListener('click', () => performSearch(searchInput.value));

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchDropdown.classList.remove('active');
      searchInput.value = '';
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!searchInput?.contains(e.target) && !searchDropdown?.contains(e.target)) {
      searchDropdown?.classList.remove('active');
    }
  });
}

/* ============================================================
   STICKY NAVBAR ON SCROLL + BACK TO TOP
   ============================================================ */

function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      navbar?.classList.add('scrolled');
      backToTop?.classList.add('visible');
    } else {
      navbar?.classList.remove('scrolled');
      backToTop?.classList.remove('visible');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   CITY SIDEBAR LINKS
   ============================================================ */

function initCityLinks() {
  document.querySelectorAll('.sidebar-link[data-city]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      const city = link.dataset.city;
      const cityName = link.textContent.trim();
      showToast(`Showing places in ${cityName}`);
      // Optionally scroll to featured section
      document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ============================================================
   TRIP PLANNER FORM
   ============================================================ */

function initPlannerForm() {
  const form = document.getElementById('plannerForm');
  const successEl = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('planFormSubmit');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('tripName').value.trim();
    const email = document.getElementById('tripEmail').value.trim();
    const duration = document.getElementById('tripDuration').value;
    const interest = document.getElementById('tripInterest').value;

    if (!name || !email || !duration || !interest) {
      showToast('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
      form.style.display = 'none';
      successEl.style.display = 'flex';
      successEl.style.flexDirection = 'column';
      successEl.style.alignItems = 'center';
      showToast(`Thank you, ${name}! Your itinerary request has been sent.`);
    }, 1500);
  });
}

/* ============================================================
   HERO SLIDESHOW (Subtle Ken Burns Effect)
   ============================================================ */

function initHeroEffect() {
  const heroImg = document.getElementById('heroImg');
  if (!heroImg) return;

  const heroImages = [
    'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&q=85',
    'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200&q=85',
    'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=85',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1200&q=85'
  ];

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % heroImages.length;
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity 1s ease';
    setTimeout(() => {
      heroImg.src = heroImages[idx];
      heroImg.style.opacity = '1';
    }, 1000);
  }, 6000);
}

/* ============================================================
   INIT — Run everything on DOM Ready
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderGrids();
  renderFestivals();
  renderBlog();

  // Small delay so animations observe correctly
  requestAnimationFrame(() => {
    initScrollAnimations();
    initStatsCounter();
    initNavActive();
    initMobileNav();
    initSearch();
    initScrollEffects();
    initSidebar();
    initCityLinks();
    initPlannerForm();
    initHeroEffect();
  });

  console.log('%c🪷 Historical Places in Punjab — Loaded Successfully!', 'color: #c8a951; font-weight: bold; font-size: 1.1rem;');
});
