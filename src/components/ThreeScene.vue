<template>
  <div ref="sceneContainer" class="three-scene">
    <!-- Custom cursor -->
    <div ref="customCursor" class="custom-cursor"></div>

    <!-- Navigation UI Overlay -->
    <div class="navigation-ui">
      <div class="section-indicator">{{ currentPlanet || 'Solar System' }}</div>
      <div class="controls-help">
        <p>Mouse drag to look around</p>
        <p>Click on planets to explore</p>
      </div>
    </div>

    <!-- Info Panel for displaying content -->
    <div v-if="showInfoPanel" :class="{ 'info-panel-visible': showInfoPanel }" class="info-panel">
      <div class="info-panel-header">
        <h2>{{ currentPlanet }}</h2>
        <button class="close-button" @click="closeInfoPanel">×</button>
      </div>
      <div class="info-panel-content">
        <div v-if="currentPlanet === 'Sun'" class="planet-content">
          <h3>Welcome to My Portfolio</h3>
          <p>I'm Claudiu Sonica, a Full Stack Developer passionate about creating engaging web experiences.</p>
          <p>Explore the planets in this solar system to learn more about me and my work.</p>
          <ul class="planet-guide">
            <li><span class="planet-name mercury">Mercury</span>: Skills & Technologies</li>
            <li><span class="planet-name venus">Venus</span>: About Me</li>
            <li><span class="planet-name earth">Earth</span>: Featured Projects</li>
            <li><span class="planet-name mars">Mars</span>: Work Experience</li>
            <li><span class="planet-name jupiter">Jupiter</span>: Contact Information</li>
          </ul>
        </div>
        <div v-else-if="currentPlanet === 'Mercury'" class="planet-content">
          <h3>Skills & Technologies</h3>
          <div class="skills-container">
            <div class="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>JavaScript/TypeScript</li>
                <li>Vue.js</li>
                <li>React</li>
                <li>HTML5/CSS3</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>PHP/Laravel</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div class="skill-category">
              <h4>Tools & Others</h4>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>Three.js</li>
                <li>Responsive Design</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
        <div v-else-if="currentPlanet === 'Venus'" class="planet-content">
          <h3>About Me</h3>
          <p>I'm a dedicated Full Stack Developer with a passion for creating robust and captivating web
            experiences.</p>
          <p>My journey in web development began with a spark of curiosity that quickly turned into a full-blown
            passion. From mastering coding fundamentals to conquering complex systems, every challenge has enriched my
            expertise.</p>
          <p>Today, I blend creativity with technical prowess to build solutions that are both functional and
            delightful.</p>
          <div class="about-links">
            <a
                class="about-link"
                download="ClaudiuSonica_CV.pdf"
                href="/files/ClaudiuSonicaCv.pdf"
            >
              Download CV
            </a>

            <a class="about-link" href="https://github.com/ClaudiuSonica" target="_blank">GitHub</a>
            <a class="about-link" href="https://www.linkedin.com/in/claudiu-sonica-395aab218/"
               target="_blank">LinkedIn</a>
          </div>
        </div>
        <div v-else-if="currentPlanet === 'Earth'" class="planet-content">
          <h3>Featured Projects</h3>
          <div class="projects-grid">
            <div class="project-card">
              <h4>Einsys.eu</h4>
              <p>A turnkey web application for managing transport bids and back-office workflows. Features a built-in
                CRM for invoice generation, seamless integration with Xero & QuickBooks, Kanban-style task boards for
                operations, and an interactive map view to monitor driver routes and shipments in real time.
              </p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>MySQL</span>
                <span>Javascript</span>
                <span>Bootstrap</span>
                <span>Docker</span>
              </div>
              <div class="project-links">
                <a href="https://go.einsys.eu/" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-card">
              <h4>Wipest LandingPage</h4>
              <p>A polished marketing site for a smart pest-control service, complete with service overviews and
                pricing. Behind the scenes, it includes a custom CRM to capture leads, schedule appointments, and follow
                up with clients—turning every site visit into a potential booking.
              </p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>Blade</span>
                <span>MySQL</span>
                <span>Docker</span>
              </div>
              <div class="project-links">
                <a href="https://sdk-web.stage.hypen.ro/" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-card">
              <h4>Wipest Dashboard</h4>
              <p>An analytics-driven control center delivering live metrics and actionable insights for ULE, NB-IoT, and
                LoRaWAN devices. Automatically spins up Kanban tasks based on sensor data, plots optimized field routes
                on a map, and updates box status in real time. Includes an internal storefront for ordering devices and
                consumables, plus a fully automated reporting & invoicing engine tied to a REST API backend that also
                powers mobile-app device actions (install, remove, firmware updates, battery changes, and more).
              </p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>Blade</span>
                <span>MySQL</span>
                <span>Docker</span>
                <span>Postman</span>
                <span>REST API</span>
                <span>Stripe</span>
              </div>
              <div class="project-links">
                <a href="https://stage.sdk-dashboard.hypen.ro/" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-card">
              <h4>Volunteers Factory</h4>
              <p>A centralized portal for volunteer coordination: assign and track tasks with deadlines, award
                achievement badges and certificates automatically, and generate on-demand reports. Built-in analytics
                reveal engagement trends and project impact, helping nonprofits recognize contributions and streamline
                their outreach.</p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>Blade</span>
                <span>MySQL</span>
                <span>Docker</span>
              </div>
              <div class="project-links">
                <a href="https://volunteersfactory.ro/" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-card">
              <h4>Hand of Help</h4>
              <p>The official site for the Hand of Help Foundation, connecting donors and volunteers with social
                programs in Botoșani. Prominent “Donează Acum” buttons simplify online giving, while dedicated sign-up
                forms recruit mentors and volunteers. Detailed project pages showcase initiatives—from youth camps to
                family support—and transparent reporting highlights real-world outcomes.</p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>Blade</span>
                <span>MySQL</span>
                <span>Docker</span>
              </div>
              <div class="project-links">
                <a href="https://handofhelp.ro/" target="_blank">Live Demo</a>
              </div>
            </div>
            <div class="project-card">
              <h4>Timvo</h4>
              <p>An all-in-one business hub for Belgian freelancers and small teams. Log hours with one-click timers,
                manage tasks and Gantt charts, then dispatch Peppol-compliant e-invoices automatically. Built-in
                bookkeeping dashboards, receipt scanning, and accountant exports keep finances tidy. Invite teammates,
                validate timesheets, and integrate via REST API or popular CRM and payment tools—so you spend less time
                on admin and more on growing your business.
              </p>
              <div class="project-tags">
                <span>Laravel 10</span>
                <span>Javascript</span>
                <span>Blade</span>
                <span>MySQL</span>
                <span>Docker</span>
                <span>Postman</span>
                <span>REST API</span>
                <span>Stripe</span>
                <span>Peppol</span>
              </div>
              <div class="project-links">
                <a href="https://stage.timvo.hypen.ro/" target="_blank">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="currentPlanet === 'Mars'" class="planet-content">
          <h3>Work Experience</h3>
          <div class="experience-timeline">
            <div class="experience-item">
              <div class="experience-date">2024 (APR) - PRESENT</div>
              <div class="experience-details">
                <h4>Full Stack Developer</h4>
                <p class="experience-company">Freelancer</p>
                <ul>
                  <li>Designed and implemented arhitectural projects for different CRMs.</li>
                  <li>Optimized overall database schemes for improved speed, security and flexibility.</li>
                  <li>Implemented external APIs and developed internal ones for better data integration.</li>
                </ul>
              </div>
            </div>
            <div class="experience-item">
              <div class="experience-date">2024 (JAN) - 2024 (APR)</div>
              <div class="experience-details">
                <h4>Junior Full Stack Developer</h4>
                <p class="experience-company">Materom</p>
                <ul>
                  <li>Implemented dashboard for real time data.</li>
                  <li>Refactored legacy code to use Vue 3 and Laravel 10.</li>
                  <li>Optimized database queries for better performance.</li>
                </ul>
              </div>
            </div>
            <div class="experience-item">
              <div class="experience-date">2023 (OCT) - 2023 (DEC)</div>
              <div class="experience-details">
                <h4>Intern Front End Developer</h4>
                <p class="experience-company">Ddroidd</p>
                <ul>
                  <li>Worked on a platform for managing the courses available on the firm network.</li>
                  <li>Implemented RESTful APIs for management of courses and lessons.</li>
                </ul>
              </div>
            </div>
            <div class="experience-item">
              <div class="experience-date">2021 - 2023</div>
              <div class="experience-details">
                <h4>Volunteer Frontend Developer</h4>
                <p class="experience-company">Asociația pentru Oportunități și cariere</p>
                <ul>
                  <li>I've implemented figma designs</li>
                  <li>Worked close to other volunteers for finding propper solutions</li>
                  <li>Collaborated with scrappers team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="currentPlanet === 'Jupiter'" class="planet-content">
          <h3>Contact Me</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

          <form class="contact-form" @submit.prevent="submitContactForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" v-model="contactForm.name" required type="text">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="contactForm.email" required type="email">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="contactForm.message" required rows="4"></textarea>
            </div>
            <button class="submit-button" type="submit">Send Message</button>
          </form>

          <div class="contact-info">
            <div class="contact-item">
              <strong>Email:</strong> csonica95@gmail.com
            </div>
            <div class="contact-item">
              <strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/claudiu-sonica-395aab218/" target="_blank">Claudiu Sonica</a>
            </div>
            <div class="contact-item">
              <strong>GitHub:</strong>
              <a href="https://github.com/ClaudiuSonica" target="_blank">ClaudiuSonica</a>
            </div>
          </div>
        </div>
        <div v-else class="planet-content">
          <h3>{{ currentPlanet }}</h3>
          <p>Information about this celestial body is still being discovered...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

// Reference to the container element
const sceneContainer = ref<HTMLElement | null>(null);
const customCursor = ref<HTMLElement | null>(null);

// Current planet and UI state
const currentPlanet = ref<string | null>(null);
const showInfoPanel = ref(false);

// Contact form data
const contactForm = reactive({
  name: '',
  email: '',
  message: ''
});

// Performance indicator
const performanceLevel = ref('high'); // 'low', 'medium', or 'high'

// Three.js variables
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls;
let animationFrameId: number;
let raycaster: THREE.Raycaster;
let mouse: THREE.Vector2;

// Solar system objects
let sun: THREE.Mesh;
let planets: { [key: string]: THREE.Object3D } = {};
let orbits: THREE.Line[] = [];
let stars: THREE.Points;

// Texture loader
const textureLoader = new THREE.TextureLoader();

// Planet data
const planetData = [
  {
    name: 'Mercury',
    radius: 0.4,
    distance: 5,
    color: 0xE5E5E5,
    speed: 0.01,
    tilt: 0.034,
    texturePath: '/textures/planets/mercury.jpg',
    bumpPath: '/textures/planets/mercury-bump.jpg',
    bumpScale: 0.002,
    hasAtmosphere: false
  },
  {
    name: 'Venus',
    radius: 0.6,
    distance: 7,
    color: 0xF5DEB3,
    speed: 0.007,
    tilt: 0.001,
    texturePath: '/textures/planets/venus.jpg',
    bumpPath: '/textures/planets/venus-bump.jpg',
    bumpScale: 0.005,
    hasAtmosphere: true,
    atmosphereColor: 0xf9d71c,
    atmosphereOpacity: 0.2
  },
  {
    name: 'Earth',
    radius: 0.65,
    distance: 10,
    color: 0x6B93D6,
    speed: 0.005,
    tilt: 0.41,
    texturePath: '/textures/planets/earth.jpg',
    bumpPath: '/textures/planets/earth-bump.jpg',
    specularPath: '/textures/planets/earth-specular.jpg',
    cloudPath: '/textures/planets/earth-clouds.jpg',
    bumpScale: 0.05,
    hasAtmosphere: true,
    atmosphereColor: 0x001eff,
    atmosphereOpacity: 0.1,
  },
  {
    name: 'Mars',
    radius: 0.5,
    distance: 13,
    color: 0xE27B58,
    speed: 0.003,
    tilt: 0.44,
    texturePath: '/textures/planets/mars.jpg',
    bumpPath: '/textures/planets/mars-bump.jpg',
    bumpScale: 0.01,
    hasAtmosphere: false
  },
  {
    name: 'Jupiter',
    radius: 1.2,
    distance: 18,
    color: 0xC88B3A,
    speed: 0.002,
    tilt: 0.05,
    texturePath: '/textures/planets/jupiter.jpg',
    bumpScale: 0.02,
    hasAtmosphere: false
  }
];

// Detect performance level
const detectPerformance = () => {
  // Check if running on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Get device pixel ratio
  const pixelRatio = window.devicePixelRatio || 1;

  // Simple performance detection based on device and pixel ratio
  if (isMobile || pixelRatio < 1) {
    performanceLevel.value = 'low';
  } else if (pixelRatio < 2) {
    performanceLevel.value = 'medium';
  } else {
    performanceLevel.value = 'high';
  }

  console.log(`Detected performance level: ${performanceLevel.value}`);
};

// Initialize the Three.js scene
const initThreeJS = () => {
  if (!sceneContainer.value) return;

  // Detect performance level
  detectPerformance();

  // Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000005); // Almost black

  // Create camera
  const aspectRatio = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 15, 30);

  // Create renderer
  renderer = new THREE.WebGLRenderer({
    antialias: performanceLevel.value !== 'low',
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Adjust pixel ratio based on performance level
  let pixelRatio = window.devicePixelRatio || 1;
  switch (performanceLevel.value) {
    case 'low':
      pixelRatio = Math.min(pixelRatio, 1);
      break;
    case 'medium':
      pixelRatio = Math.min(pixelRatio, 1.5);
      break;
    case 'high':
      pixelRatio = Math.min(pixelRatio, 2);
      break;
  }
  renderer.setPixelRatio(pixelRatio);

  // Enable shadows based on performance
  renderer.shadowMap.enabled = performanceLevel.value !== 'low';
  renderer.shadowMap.type = performanceLevel.value === 'high'
      ? THREE.PCFSoftShadowMap
      : THREE.BasicShadowMap;

  sceneContainer.value.appendChild(renderer.domElement);

  // Add orbit controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.minDistance = 5;
  controls.maxDistance = 50;
  controls.enablePan = false;

  // Initialize raycaster for object selection
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Create solar system
  createStarfield();
  createSun();
  createPlanets();

  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  // Add event listeners
  window.addEventListener('resize', onWindowResize);
  window.addEventListener('click', onMouseClick);

  // Start animation loop
  animate();
};

// Create starfield background
const createStarfield = () => {
  // Determine star count based on performance
  let starCount;
  switch (performanceLevel.value) {
    case 'low':
      starCount = 1000;
      break;
    case 'medium':
      starCount = 3000;
      break;
    case 'high':
      starCount = 5000;
      break;
    default:
      starCount = 3000;
  }

  const starGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i += 3) {
    // Random positions in a sphere
    const radius = 100 + Math.random() * 900; // Between 100 and 1000
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    starPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    starPositions[i + 2] = radius * Math.cos(phi);
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

  const starMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });

  stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
};

// Create the sun
const createSun = () => {
  // Sun geometry with more segments for better quality and larger size
  const sunGeometry = new THREE.SphereGeometry(3, 64, 64);

  // Load sun texture if performance allows
  let sunMaterial;

  if (performanceLevel.value !== 'low') {
    // Load sun texture with error handling
    try {
      const sunTexture = textureLoader.load(
          '/textures/planets/sun.jpg',
          () => console.log('Sun texture loaded!'),
          undefined,
          err => console.error('Sun load error', err)
      );

      // Create enhanced material with emissive map for glow effect
      sunMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFA500,
        emissive: 0xFFA500,
        emissiveIntensity: 1.2,
        roughness: 0.5,
        metalness: 0.0
      });
    } catch (error) {
      console.error('Error setting up sun texture:', error);
      // Fallback material
      sunMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFA500,
        emissive: 0xFFA500,
        emissiveIntensity: 1.2,
        roughness: 0.5,
        metalness: 0.0
      });
    }
  } else {
    // Fallback to basic material for low performance
    sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFA500,
      emissive: 0xFFA500,
      emissiveIntensity: 1.2,
      roughness: 0.5,
      metalness: 0.0
    });
  }

  sun = new THREE.Mesh(sunGeometry, sunMaterial);
  sun.userData = {name: 'Sun', type: 'planet'};
  scene.add(sun);

  // Add sun light with better quality settings
  const sunLight = new THREE.PointLight(0xFFFFFF, 2, 100);
  sunLight.position.set(0, 0, 0);

  // Add shadow settings based on performance
  if (performanceLevel.value === 'high') {
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 50;
    sunLight.shadow.bias = -0.001;
  } else if (performanceLevel.value === 'medium') {
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
  }

  scene.add(sunLight);

  // Add ambient light to ensure sun is visible
  const ambientLight = new THREE.AmbientLight(0x555555);
  scene.add(ambientLight);

  // Add enhanced sun glow with better quality
  if (performanceLevel.value !== 'low') {
    // Inner glow (brighter and larger)
    const innerGlow = createGlow(3.2, 0xFFA500, 0.7);
    sun.add(innerGlow);

    // Outer glow (larger radius)
    const outerGlow = createGlow(4.5, 0xFF5500, 0.5);
    sun.add(outerGlow);

    // Add corona effect with improved visuals
    if (performanceLevel.value === 'high') {
      const coronaGeometry = new THREE.SphereGeometry(6, 64, 64);
      const coronaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          glowColor: {value: new THREE.Color(0xFF8800)},
          viewVector: {value: new THREE.Vector3()}
        },
        vertexShader: `
          uniform vec3 viewVector;
          varying float intensity;
          void main() {
            vec3 vNormal = normalize(normalMatrix * normal);
            vec3 vNormel = normalize(normalMatrix * viewVector);
            intensity = pow(0.4 - dot(vNormal, vNormel), 2.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() {
            vec3 glow = glowColor * intensity;
            gl_FragColor = vec4(glow, 0.4 * intensity);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
      sun.add(corona);

      // Add solar flares (small random spikes)
      addSolarFlares(sun, 20);
    }
  }
};

// Add solar flares to the sun
const addSolarFlares = (sunMesh, count) => {
  const flareGroup = new THREE.Group();

  for (let i = 0; i < count; i++) {
    // Create a random flare
    const height = 0.5 + Math.random() * 1.5;
    const width = 0.1 + Math.random() * 0.3;

    const flareGeometry = new THREE.ConeGeometry(width, height, 8);
    const flareMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xFFA500),
      transparent: true,
      opacity: 0.6 + Math.random() * 0.4
    });

    const flare = new THREE.Mesh(flareGeometry, flareMaterial);

    // Position randomly on sun surface
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;

    const radius = 3; // Sun radius
    flare.position.x = radius * Math.sin(theta) * Math.cos(phi);
    flare.position.y = radius * Math.sin(theta) * Math.sin(phi);
    flare.position.z = radius * Math.cos(theta);

    // Point away from center
    flare.lookAt(0, 0, 0);
    flare.rotateX(Math.PI);

    // Add random animation data
    flare.userData = {
      pulseFactor: 0.2 + Math.random() * 0.3,
      pulseSpeed: 0.5 + Math.random() * 1.5
    };

    flareGroup.add(flare);
  }

  sunMesh.add(flareGroup);
  sunMesh.userData.flares = flareGroup;
};

// Create planets
const createPlanets = () => {
  planetData.forEach(planet => {
    // Create planet geometry with more segments for better quality
    const planetGeometry = new THREE.SphereGeometry(planet.radius, 64, 32);

    // Create materials based on available textures
    let planetMaterial;

    // Create initial material with enhanced properties
    planetMaterial = new THREE.MeshStandardMaterial({
      color: planet.color,
      metalness: 0.2,
      roughness: 0.7,
      envMapIntensity: 0.5
    });

    // Create planet mesh with initial material
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);

    // Check if we have a texture path and apply textures
    if (planet.texturePath) {
      try {
        // Load texture with error handling
        textureLoader.load(
            planet.texturePath,
            // onLoad callback
            (loadedTexture) => {
              console.log(`Texture loaded successfully for ${planet.name}`);

              // Enhance texture settings
              loadedTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
              loadedTexture.encoding = THREE.sRGBEncoding;

              // Apply texture to the material
              if (planetMesh.material) {
                planetMesh.material.map = loadedTexture;
                planetMesh.material.needsUpdate = true;
              }
            },
            // onProgress callback (not used)
            undefined,
            // onError callback
            (err) => {
              console.error(`Error loading texture for ${planet.name}:`, err);
              // Apply a procedural texture as fallback
              applyProceduralTexture(planetMesh, planet);
            }
        );

        // Load and apply bump map and specular map for high performance mode
        if (planet.bumpPath && planet.specularPath && performanceLevel.value === 'high') {
          // Convert to MeshPhongMaterial for bump and specular maps
          // Apply the phong material
          planetMesh.material = new THREE.MeshPhongMaterial({
            color: planet.color,
            bumpScale: planet.bumpScale || 0.05,
            specular: new THREE.Color(0x333333),
            shininess: 25
          });

          // Load bump map
          textureLoader.load(
              planet.bumpPath,
              (bumpMap) => {
                if (planetMesh.material && planetMesh.material instanceof THREE.MeshPhongMaterial) {
                  planetMesh.material.bumpMap = bumpMap;
                  planetMesh.material.needsUpdate = true;
                }
              },
              undefined,
              (err) => console.error(`Error loading bump map for ${planet.name}:`, err)
          );

          // Load specular map
          textureLoader.load(
              planet.specularPath,
              (specularMap) => {
                if (planetMesh.material && planetMesh.material instanceof THREE.MeshPhongMaterial) {
                  planetMesh.material.specularMap = specularMap;
                  planetMesh.material.needsUpdate = true;
                }
              },
              undefined,
              (err) => console.error(`Error loading specular map for ${planet.name}:`, err)
          );
        }
      } catch (error) {
        console.error(`Error setting up textures for ${planet.name}:`, error);
        // Apply a procedural texture as fallback
        applyProceduralTexture(planetMesh, planet);
      }
    } else {
      // Apply a procedural texture if no texture path
      applyProceduralTexture(planetMesh, planet);
    }

    planetMesh.castShadow = true;
    planetMesh.receiveShadow = true;

    // Create planet container for orbit
    const planetContainer = new THREE.Object3D();
    planetContainer.add(planetMesh);

    // Position planet
    planetMesh.position.x = planet.distance;

    // Add tilt
    planetMesh.rotation.x = planet.tilt;

    // Add atmosphere with enhanced visuals
    if (planet.hasAtmosphere && performanceLevel.value !== 'low') {
      // Create a more realistic atmosphere
      const atmosphereGeometry = new THREE.SphereGeometry(planet.radius * 1.15, 64, 32);
      const atmosphereMaterial = new THREE.MeshPhongMaterial({
        color: planet.atmosphereColor || 0x88ccff,
        transparent: true,
        opacity: planet.atmosphereOpacity || 0.3,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
      });

      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      planetMesh.add(atmosphere);

      // Add a subtle glow effect for atmosphere
      if (performanceLevel.value === 'high') {
        const atmosphereGlow = createGlow(
            planet.radius * 1.3,
            planet.atmosphereColor || 0x88ccff,
            0.3
        );
        planetMesh.add(atmosphereGlow);
      }
    }

    // Add clouds for Earth with enhanced visuals
    if (planet.name === 'Earth' && planet.cloudPath && performanceLevel.value !== 'low') {
      const cloudGeometry = new THREE.SphereGeometry(planet.radius * 1.02, 64, 32);

      try {
        const cloudTexture = textureLoader.load(
            planet.cloudPath,
            (texture) => {
              console.log('Earth cloud texture loaded successfully');
            },
            undefined,
            (err) => console.error('Error loading Earth cloud texture:', err)
        );

        const cloudMaterial = new THREE.MeshPhongMaterial({
          map: cloudTexture,
          transparent: true,
          opacity: 0.8,
          side: THREE.DoubleSide,
          blending: THREE.CustomBlending,
          blendSrc: THREE.SrcAlphaFactor,
          blendDst: THREE.OneMinusSrcAlphaFactor
        });

        const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
        planetMesh.add(clouds);

        // Store clouds reference for animation
        planetMesh.userData = {clouds: clouds};
      } catch (error) {
        console.error('Error setting up Earth clouds:', error);
      }
    }

    // Add rings for gas giants (Jupiter)
    if (planet.name === 'Jupiter' && performanceLevel.value !== 'low') {
      addPlanetRings(planetMesh, planet.radius * 1.8, planet.radius * 2.5, 0xA89F7E, 0.6);
    }

    // Store reference with enhanced data
    planetContainer.userData = {
      name: planet.name,
      type: 'planet',
      orbitSpeed: planet.speed,
      rotationSpeed: 0.01 + Math.random() * 0.01,
      originalPosition: new THREE.Vector3(planet.distance, 0, 0),
      selected: false
    };
    planets[planet.name] = planetContainer;

    // Add to scene
    scene.add(planetContainer);

    // Create orbit with enhanced visuals
    createOrbit(planet.distance);
  });
};

// Apply a procedural texture to a planet as a fallback
const applyProceduralTexture = (planetMesh, planet) => {
  // Create a canvas for the procedural texture
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  // Fill with base color
  ctx.fillStyle = `#${planet.color.toString(16).padStart(6, '0')}`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add some noise/variation based on planet type
  const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixelData.data;

  for (let i = 0; i < data.length; i += 4) {
    // Add random noise
    const noise = Math.random() * 30 - 15;
    data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // G
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // B

    // Add some patterns based on planet name
    if (planet.name === 'Jupiter') {
      // Add horizontal bands
      const y = Math.floor(i / 4 / canvas.width);
      if (y % 20 < 10) {
        data[i] = Math.min(255, data[i] * 1.2);
        data[i + 1] = Math.min(255, data[i + 1] * 1.1);
      }
    } else if (planet.name === 'Mars') {
      // Add reddish craters
      if (Math.random() > 0.995) {
        for (let j = 0; j < 100; j++) {
          const x = (i / 4) % canvas.width + Math.floor(Math.random() * 10 - 5);
          const y = Math.floor(i / 4 / canvas.width) + Math.floor(Math.random() * 10 - 5);
          if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
            const idx = (y * canvas.width + x) * 4;
            if (idx >= 0 && idx < data.length) {
              data[idx] = Math.min(255, data[idx] * 1.5);
              data[idx + 1] = Math.min(255, data[idx + 1] * 0.8);
              data[idx + 2] = Math.min(255, data[idx + 2] * 0.8);
            }
          }
        }
      }
    }
  }

  ctx.putImageData(pixelData, 0, 0);

  // Create texture from canvas
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // Apply to material
  if (planetMesh.material) {
    planetMesh.material.map = texture;
    planetMesh.material.needsUpdate = true;
  }
};

// Add rings to a planet (for gas giants)
const addPlanetRings = (planetMesh, innerRadius, outerRadius, color, opacity) => {
  // Create ring geometry
  const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 64);

  // Adjust vertices to make a flat ring
  const pos = ringGeometry.attributes.position;
  const v3 = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v3.fromBufferAttribute(pos, i);
    ringGeometry.attributes.uv.setXY(i, v3.length() < (innerRadius + outerRadius) / 2 ? 0 : 1, 1);

    // Adjust the z-coordinate to create a slight tilt
    pos.setZ(i, pos.getZ(i) + (Math.random() * 0.05 - 0.025));
  }

  // Create ring material
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: opacity,
    side: THREE.DoubleSide
  });

  // Create mesh and add to planet
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);

  // Rotate ring to be perpendicular to orbit
  ring.rotation.x = Math.PI / 2;

  // Add some random rotation for visual interest
  ring.rotation.y = Math.random() * 0.2 - 0.1;

  planetMesh.add(ring);

  // Store reference for animation
  planetMesh.userData = planetMesh.userData || {};
  planetMesh.userData.ring = ring;
};

// Create orbit visualization
const createOrbit = (radius: number) => {
  const orbitGeometry = new THREE.BufferGeometry();
  const orbitPoints = [];

  // Create circle points
  for (let i = 0; i <= 100; i++) {
    const angle = (i / 100) * Math.PI * 2;
    orbitPoints.push(
        new THREE.Vector3(
            Math.cos(angle) * radius,
            0,
            Math.sin(angle) * radius
        )
    );
  }

  orbitGeometry.setFromPoints(orbitPoints);

  const orbitMaterial = new THREE.LineBasicMaterial({
    color: 0x444444,
    transparent: true,
    opacity: 0.3
  });

  const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
  // Remove the rotation to keep orbits horizontal

  orbits.push(orbit);
  scene.add(orbit);
};

// Create glow effect
const createGlow = (radius: number, color: number, opacity: number) => {
  const glowGeometry = new THREE.SphereGeometry(radius, 32, 32);
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: {value: new THREE.Color(color)},
      viewVector: {value: new THREE.Vector3()}
    },
    vertexShader: `
      uniform vec3 viewVector;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize(normalMatrix * normal);
        vec3 vNormel = normalize(normalMatrix * viewVector);
        intensity = pow(0.6 - dot(vNormal, vNormel), 2.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float intensity;
      void main() {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4(glow, ${opacity});
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  return new THREE.Mesh(glowGeometry, glowMaterial);
};

// Handle mouse click for planet selection
const onMouseClick = (event: MouseEvent) => {
  // 1) calc normalized device coords
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // 2) only test against our planet containers + sun
  const hitList = [...Object.values(planets), sun];
  const intersects = raycaster.intersectObjects(hitList, true);
  if (!intersects.length) return;

  // 3) climb up to the top-level container in hitList
  let picked = intersects[0].object;
  while (picked.parent && !hitList.includes(picked as any)) {
    picked = picked.parent!;
  }
  if (!picked) return;

  // 4) mark selection & show panel
  currentPlanet.value = picked.userData.name;
  showInfoPanel.value = true;
  Object.values(planets).forEach(p => p.userData && (p.userData.selected = false));
  if (picked.userData) picked.userData.selected = true;

  // 5) pick the actual Mesh (for the Sun it's `sun` itself)
  const planetMesh = picked === sun
      ? sun
      : (picked.children[0] as THREE.Mesh);

  // 6) world-position comes from the mesh, not the empty container
  const planetPosition = new THREE.Vector3();
  planetMesh.getWorldPosition(planetPosition);

  // 7) compute a comfortable zoom (min 5 units, or ~8× the radius)
  const planetRadius = (planetMesh.geometry.parameters.radius as number) || 1;
  const zoomDist = Math.max(planetRadius * 8, 5);
  const zoomHeight = planetRadius * 2;
  const zoomAngle = Math.PI / 4;               // 45°
  const orbitAngle = picked.rotation.y;

  const offset = new THREE.Vector3(
      Math.cos(orbitAngle + zoomAngle) * zoomDist,
      zoomHeight,
      Math.sin(orbitAngle + zoomAngle) * zoomDist
  );

  // 8) animate & highlight
  animateCameraMove(planetPosition, offset, planetMesh.rotation.x);
  highlightSelectedPlanet(picked);
};

// Highlight the selected planet with a subtle glow effect
const highlightSelectedPlanet = (planetObj) => {
  // Remove highlight from all planets first
  Object.values(planets).forEach(planet => {
    const planetMesh = planet.children[0];
    if (planetMesh) {
      // Remove any existing highlight effect
      const existingHighlight = planetMesh.children.find(child => child.userData && child.userData.isHighlight);
      if (existingHighlight) {
        planetMesh.remove(existingHighlight);
      }
    }
  });

  // Also check the sun
  if (sun) {
    const existingHighlight = sun.children.find(child => child.userData && child.userData.isHighlight);
    if (existingHighlight) {
      sun.remove(existingHighlight);
    }
  }

  // Add highlight to the selected planet
  if (planetObj) {
    const planetMesh = planetObj.children[0] || planetObj; // Handle both planet container and sun

    // Create a highlight effect based on the planet
    let highlightColor, highlightSize;

    if (planetObj === sun) {
      highlightColor = 0xFFAA00;
      highlightSize = 3.5;
    } else {
      // Use a color based on the planet's material or a default
      if (planetMesh.material && planetMesh.material.color) {
        highlightColor = planetMesh.material.color.getHex();
      } else {
        highlightColor = 0xFFFFFF;
      }

      // Size based on planet radius
      const planetRadius = planetMesh.geometry.parameters.radius || 1;
      highlightSize = planetRadius * 1.3;
    }

    // Create the highlight glow
    const highlight = createGlow(highlightSize, highlightColor, 0.4);
    highlight.userData = {isHighlight: true};

    // Add to the planet mesh
    planetMesh.add(highlight);

    // Add a pulsing animation to the highlight
    highlight.userData.pulseAnimation = {
      initialScale: 1,
      targetScale: 1.2,
      speed: 0.5,
      time: 0
    };
  }
};

// Animate camera movement to focus on a planet
const animateCameraMove = (target: THREE.Vector3, offset: THREE.Vector3, planetTilt?: number) => {
  // Disable controls during animation
  controls.enabled = false;

  // Store original camera position and target
  const startPosition = camera.position.clone();
  const startTarget = controls.target.clone();
  const startUpVector = camera.up.clone();

  // Calculate new camera position
  const endPosition = new THREE.Vector3().copy(target).add(offset);

  // Calculate new up vector based on planet tilt if provided
  let endUpVector;
  if (planetTilt !== undefined) {
    // Create an up vector that aligns with the planet's rotation axis
    // For a planet with tilt, the up vector should be tilted accordingly
    endUpVector = new THREE.Vector3(
        Math.sin(planetTilt),
        Math.cos(planetTilt),
        0
    ).normalize();
  } else {
    // Default up vector (world up)
    endUpVector = new THREE.Vector3(0, 1, 0);
  }

  // Animation parameters
  const duration = 1500; // ms - longer for smoother animation
  const startTime = Date.now();

  // Animation function
  function animateCamera() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Enhanced ease function (quintic ease in-out for smoother acceleration/deceleration)
    let ease;
    if (progress < 0.5) {
      ease = 16 * Math.pow(progress, 5);
    } else {
      ease = 1 - Math.pow(-2 * progress + 2, 5) / 2;
    }

    // Interpolate camera position
    camera.position.lerpVectors(startPosition, endPosition, ease);

    // Interpolate controls target
    controls.target.lerpVectors(startTarget, target, ease);

    // Interpolate camera up vector
    camera.up.copy(startUpVector).lerp(endUpVector, ease).normalize();

    // Update controls
    controls.update();

    // Continue animation if not complete
    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    } else {
      // Re-enable controls when animation completes
      controls.enabled = true;

      // Emit an event or set a flag to indicate animation completion
      cameraAnimationComplete();
    }
  }

  // Start animation
  animateCamera();
};

// Function to handle camera animation completion
const cameraAnimationComplete = () => {
  // You could trigger additional effects here when camera reaches its destination

  // For example, add a subtle camera shake for dramatic effect
  if (performanceLevel.value === 'high') {
    addCameraShake(0.05, 500);
  }
};

// Add subtle camera shake effect
const addCameraShake = (intensity: number, duration: number) => {
  const originalPosition = camera.position.clone();
  const startTime = Date.now();

  function shakeCamera() {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;

    if (progress < 1) {
      // Calculate shake amount (decreases over time)
      const shakeAmount = intensity * (1 - progress);

      // Apply random offset to camera position
      camera.position.x = originalPosition.x + (Math.random() - 0.5) * shakeAmount;
      camera.position.y = originalPosition.y + (Math.random() - 0.5) * shakeAmount;
      camera.position.z = originalPosition.z + (Math.random() - 0.5) * shakeAmount;

      // Continue shaking
      requestAnimationFrame(shakeCamera);
    } else {
      // Reset to original position when done
      camera.position.copy(originalPosition);
    }
  }

  // Start shake animation
  shakeCamera();
};

// Close info panel
const closeInfoPanel = () => {
  showInfoPanel.value = false;
  currentPlanet.value = null;

  // Reset selection state for all planets
  Object.values(planets).forEach(planet => {
    if (planet.userData) {
      planet.userData.selected = false;

      // Reset any position changes from floating animation
      if (planet.userData.originalPosition) {
        planet.position.y = planet.userData.originalPosition.y;
      }
    }
  });

  // Remove highlight from all planets
  Object.values(planets).forEach(planet => {
    const planetMesh = planet.children[0];
    if (planetMesh) {
      // Remove any existing highlight effect
      const existingHighlight = planetMesh.children.find(child => child.userData && child.userData.isHighlight);
      if (existingHighlight) {
        planetMesh.remove(existingHighlight);
      }
    }
  });

  // Also remove highlight from sun
  if (sun) {
    const existingHighlight = sun.children.find(child => child.userData && child.userData.isHighlight);
    if (existingHighlight) {
      sun.remove(existingHighlight);
    }
  }

  // Reset camera to an overview position that shows the entire solar system
  const overviewPosition = new THREE.Vector3(0, 25, 40);
  // Pass undefined for planetTilt to use default up vector (0,1,0)
  animateCameraMove(new THREE.Vector3(0, 0, 0), overviewPosition, undefined);

  // Add a subtle visual effect to indicate transition back to overview
  if (performanceLevel.value !== 'low') {
    // Flash the stars briefly
    if (stars && stars.material) {
      const originalSize = (stars.material as THREE.PointsMaterial).size;
      const originalOpacity = (stars.material as THREE.PointsMaterial).opacity;

      // Increase size and opacity briefly
      (stars.material as THREE.PointsMaterial).size = originalSize * 2;
      (stars.material as THREE.PointsMaterial).opacity = 1;

      // Reset after a short delay
      setTimeout(() => {
        if (stars && stars.material) {
          (stars.material as THREE.PointsMaterial).size = originalSize;
          (stars.material as THREE.PointsMaterial).opacity = originalOpacity;
        }
      }, 300);
    }
  }
};

// Handle contact form submission
const submitContactForm = () => {
  console.log('Form submitted:', contactForm);
  // Here you would typically send the form data to a server

  // Reset form
  contactForm.name = '';
  contactForm.email = '';
  contactForm.message = '';

  // Show confirmation
  alert('Thank you for your message! I will get back to you soon.');
};

// Animation loop
const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  // Update controls
  controls.update();

  // Get current time for animations
  const time = Date.now() * 0.001;

  // Animate sun with enhanced effects
  if (sun) {
    // Rotate sun with subtle variations
    sun.rotation.y += 0.001;

    // Add subtle wobble to sun rotation
    sun.rotation.x = Math.sin(time * 0.2) * 0.01;

    // Animate solar flares if they exist
    if (sun.userData && sun.userData.flares) {
      const flares = sun.userData.flares.children;

      flares.forEach(flare => {
        if (flare.userData) {
          // Pulse the flares
          const pulseFactor = Math.sin(time * flare.userData.pulseSpeed) * flare.userData.pulseFactor + 1;
          flare.scale.set(pulseFactor, pulseFactor, pulseFactor);

          // Randomly rotate flares for more dynamic effect
          flare.rotation.z += (Math.random() - 0.5) * 0.01;
        }
      });
    }

    // Animate sun corona if it exists (on high performance)
    if (performanceLevel.value === 'high' && sun.children.length > 2) {
      const corona = sun.children[2];
      // Update the viewVector uniform to create dynamic glow effect
      if (corona.material && corona.material.uniforms) {
        corona.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(camera.position, corona.position);

        // Pulse the corona slightly
        const coronaPulse = Math.sin(time * 0.3) * 0.1 + 1;
        corona.scale.set(coronaPulse, coronaPulse, coronaPulse);
      }
    }

    // Animate sun glow effects
    sun.children.forEach(child => {
      // Check if this is a glow effect
      if (child.material && child.material.type === 'ShaderMaterial' && !child.userData?.isHighlight) {
        // Update the viewVector uniform if it exists
        if (child.material.uniforms && child.material.uniforms.viewVector) {
          child.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(camera.position, child.position);
        }

        // Add subtle pulsing to the glow
        const glowPulse = Math.sin(time * 0.4) * 0.1 + 1;
        child.scale.set(glowPulse, glowPulse, glowPulse);
      }
    });
  }

  // Update planets with enhanced animations
  Object.values(planets).forEach(planet => {
    // Orbit around sun - adjust speed if selected
    if (planet.userData) {
      // Slow down orbit if this planet is selected
      const orbitSpeedMultiplier = planet.userData.selected ? 0.2 : 1.0;
      if (planet.userData.orbitSpeed) {
        planet.rotation.y += planet.userData.orbitSpeed * orbitSpeedMultiplier;
      }

      // If selected, add subtle floating motion
      if (planet.userData.selected) {
        // Get original position
        const originalPos = planet.userData.originalPosition || new THREE.Vector3(0, 0, 0);

        // Add subtle floating motion on y-axis
        const floatOffset = Math.sin(time * 0.5) * 0.2;
        planet.position.y = originalPos.y + floatOffset;
      }
    }

    // Get the planet mesh
    const planetMesh = planet.children[0];

    if (planetMesh && planet.userData && planet.userData.rotationSpeed) {
      // Rotate planet - adjust speed if selected
      const rotationSpeedMultiplier = planet.userData.selected ? 1.5 : 1.0;
      planetMesh.rotation.y += planet.userData.rotationSpeed * rotationSpeedMultiplier;

      // Animate clouds for Earth if they exist
      if (planetMesh.userData && planetMesh.userData.clouds) {
        // Rotate clouds at a slightly different speed for realism
        planetMesh.userData.clouds.rotation.y += planet.userData.rotationSpeed * 1.2;
      }

      // Animate rings if they exist
      if (planetMesh.userData && planetMesh.userData.ring) {
        // Add subtle wobble to rings
        planetMesh.userData.ring.rotation.z = Math.sin(time * 0.2) * 0.05;
      }

      // Animate atmospheres and other effects
      planetMesh.children.forEach(child => {
        // Check if this is an atmosphere (has transparent material)
        if (child.material && child.material.transparent && !child.userData?.isHighlight) {
          // Subtle pulsing effect for atmosphere
          const pulseFactor = Math.sin(time * 0.5) * 0.05 + 1; // 5% pulsing
          child.scale.set(pulseFactor, pulseFactor, pulseFactor);

          // Subtle opacity variation
          if (child.material.opacity) {
            const originalOpacity = child.material.userData?.originalOpacity || 0.2;
            child.material.opacity = originalOpacity * (0.9 + Math.sin(time) * 0.1);

            // Store original opacity if not already stored
            if (!child.material.userData) {
              child.material.userData = {originalOpacity: child.material.opacity};
            }
          }
        }

        // Animate highlight effects
        if (child.userData && child.userData.isHighlight) {
          if (child.userData.pulseAnimation) {
            const pulseAnim = child.userData.pulseAnimation;

            // Update animation time
            pulseAnim.time += 0.016; // Approximately 60fps

            // Calculate scale based on sine wave
            const scale = pulseAnim.initialScale +
                Math.sin(pulseAnim.time * pulseAnim.speed) *
                (pulseAnim.targetScale - pulseAnim.initialScale);

            // Apply scale
            child.scale.set(scale, scale, scale);

            // Update viewVector for shader-based highlights
            if (child.material && child.material.uniforms && child.material.uniforms.viewVector) {
              child.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(camera.position, child.position);
            }
          }
        }
      });
    }
  });

  // Animate stars with enhanced effects
  if (stars) {
    // Slowly rotate stars with subtle variations
    stars.rotation.y = time * 0.05;
    stars.rotation.x = Math.sin(time * 0.3) * 0.1;

    // Add subtle pulsing to stars
    const starMaterial = stars.material as THREE.PointsMaterial;
    if (starMaterial) {
      starMaterial.size = 0.1 + Math.sin(time * 0.5) * 0.02;
    }
  }

  // Render scene
  renderer.render(scene, camera);
};

// Handle window resize
const onWindowResize = () => {
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};

// Track mouse movement for custom cursor
const updateCursorPosition = (e: MouseEvent) => {
  if (customCursor.value) {
    customCursor.value.style.left = `${e.clientX}px`;
    customCursor.value.style.top = `${e.clientY}px`;
  }
};

// Store interactive elements for cleanup
let interactiveElements: NodeListOf<Element> | null = null;

// Event handlers for hover effects
const handleMouseEnter = () => {
  if (customCursor.value) {
    customCursor.value.classList.add('hovering');
  }
};

const handleMouseLeave = () => {
  if (customCursor.value) {
    customCursor.value.classList.remove('hovering');
  }
};

// Custom cursor functions
const initCustomCursor = () => {
  if (!customCursor.value || !sceneContainer.value) return;

  // Add hover effect for interactive elements
  const addHoverEffect = () => {
    // Find all interactive elements
    interactiveElements = document.querySelectorAll('button, a, .close-button, .submit-button');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
  };

  // Add event listeners
  window.addEventListener('mousemove', updateCursorPosition);

  // Initial position
  customCursor.value.style.opacity = '0';
  setTimeout(() => {
    if (customCursor.value) {
      customCursor.value.style.opacity = '1';
    }
    addHoverEffect();
  }, 1000);
};

// Lifecycle hooks
onMounted(() => {
  initThreeJS();
  initCustomCursor();
});

onBeforeUnmount(() => {
  // Clean up resources
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  // Clean up event listeners
  window.removeEventListener('resize', onWindowResize);
  window.removeEventListener('click', onMouseClick);
  window.removeEventListener('mousemove', updateCursorPosition);

  // Clean up interactive element event listeners
  if (interactiveElements) {
    interactiveElements.forEach(element => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    });
  }

  // Dispose of Three.js objects
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      if (object.geometry) object.geometry.dispose();

      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    }
  });

  // Dispose renderer
  if (renderer) {
    renderer.dispose();
    if (sceneContainer.value) {
      sceneContainer.value.removeChild(renderer.domElement);
    }
  }
});
</script>

<style scoped>
.three-scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Navigation UI Overlay */
.navigation-ui {
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 20px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-indicator {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.controls-help {
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.3s ease;
  opacity: 0.7;
}

.controls-help:hover {
  opacity: 1;
}

.controls-help p {
  margin: 5px 0;
}

/* Info Panel */
.info-panel {
  position: absolute;
  top: 50%;
  right: -400px;
  transform: translateY(-50%);
  width: 380px;
  max-height: 80vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  color: white;
  z-index: 20;
  overflow: hidden;
  transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: all;
}

.info-panel-visible {
  right: 20px;
}

.info-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.info-panel-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.close-button {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.info-panel-content {
  padding: 20px;
  overflow-y: auto;
  max-height: calc(80vh - 60px);
}

.info-panel-content::-webkit-scrollbar {
  display: none;
}

/* Planet Content Styles */
.planet-content h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: #f0f0f0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 8px;
}

.planet-content p {
  margin-bottom: 15px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}

.planet-guide {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.planet-guide li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.planet-name {
  display: inline-block;
  width: 80px;
  font-weight: bold;
  margin-right: 10px;
}

.mercury {
  color: #E5E5E5;
}

.venus {
  color: #F5DEB3;
}

.earth {
  color: #6B93D6;
}

.mars {
  color: #E27B58;
}

.jupiter {
  color: #C88B3A;
}

/* Skills Section */
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.skill-category h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #f0f0f0;
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* About Links */
.about-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.about-link {
  display: inline-block;
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}

.about-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 15px;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s, background 0.2s;
}

.project-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.project-card h4 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.project-card p {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.project-tags span {
  background: rgba(255, 255, 255, 0.1);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-links a {
  color: #6B93D6;
  text-decoration: none;
  font-size: 0.9rem;
}

.project-links a:hover {
  text-decoration: underline;
}

/* Experience Timeline */
.experience-timeline {
  margin-top: 15px;
}

.experience-item {
  display: flex;
  margin-bottom: 20px;
  position: relative;
}

.experience-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 60px;
  top: 30px;
  bottom: -20px;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.experience-date {
  width: 120px;
  font-weight: bold;
  color: #C88B3A;
}

.experience-details {
  flex: 1;
}

.experience-details h4 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.experience-company {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  font-style: italic;
}

.experience-details ul {
  padding-left: 20px;
  margin: 8px 0 0;
}

.experience-details li {
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* Contact Form */
.contact-form {
  margin: 20px 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.4);
}

.submit-button {
  background: linear-gradient(to right, #6B93D6, #9B59B6);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: transform 0.2s, opacity 0.2s;
}

.submit-button:hover {
  transform: translateY(-2px);
}

.submit-button:active {
  transform: translateY(0);
  opacity: 0.9;
}

.contact-info {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-item {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.contact-item a {
  color: #6B93D6;
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

/* Custom cursor styles */
.custom-cursor {
  position: fixed;
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.2s, height 0.2s, border-color 0.2s;
  mix-blend-mode: difference;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
  0 0 20px rgba(255, 255, 255, 0.3),
  0 0 30px rgba(255, 255, 255, 0.1);
}

.custom-cursor::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

.custom-cursor.hovering {
  width: 40px;
  height: 40px;
  border-color: rgba(250, 204, 21, 0.8);
  box-shadow: 0 0 15px rgba(250, 204, 21, 0.5),
  0 0 30px rgba(250, 204, 21, 0.3),
  0 0 45px rgba(250, 204, 21, 0.1);
}

/* Hide default cursor when custom cursor is active */
.three-scene {
  cursor: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-indicator {
    font-size: 1.2rem;
    padding: 8px 15px;
  }

  .controls-help {
    font-size: 0.8rem;
    padding: 8px 12px;
  }

  .info-panel {
    width: 90%;
    max-width: 380px;
    right: -100%;
  }

  .info-panel-visible {
    right: 5%;
  }

  /* Hide custom cursor on mobile devices */
  .custom-cursor {
    display: none;
  }
}
</style>

<style scoped>
.three-scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Navigation UI Overlay */
.navigation-ui {
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 20px;
  pointer-events: none; /* Allow clicks to pass through to the 3D scene */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-indicator {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.controls-help {
  background: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.8);
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: opacity 0.3s ease;
  opacity: 0.7;
}

.controls-help:hover {
  opacity: 1;
}

.controls-help p {
  margin: 5px 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-indicator {
    font-size: 1.2rem;
    padding: 8px 15px;
  }

  .controls-help {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}
</style>
