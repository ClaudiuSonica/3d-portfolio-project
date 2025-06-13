<template>
  <div ref="contentContainer" :style="{ display: 'none' }" class="content-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps, onBeforeUnmount, onMounted, ref, watch} from 'vue';
import {CSS3DObject} from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const props = defineProps({
  position: {
    type: Object,
    default: () => ({x: 0, y: 0, z: 0})
  },
  rotation: {
    type: Object,
    default: () => ({x: 0, y: 0, z: 0})
  },
  scale: {
    type: Number,
    default: 1
  },
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 500
  },
  visible: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['loaded', 'click']);

// Reference to the content container
const contentContainer = ref<HTMLElement | null>(null);

// CSS3D object
let css3DObject: CSS3DObject | null = null;

// Create CSS3D object
const createCSS3DObject = (width = props.width, height = props.height) => {
  if (!contentContainer.value) return null;

  // Clone the content container to use in the 3D object
  const element = contentContainer.value.cloneNode(true) as HTMLElement;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.style.display = 'block';
  element.style.background = 'rgba(0, 0, 0, 0.8)';
  element.style.borderRadius = '10px';
  element.style.padding = '20px';
  element.style.color = 'white';
  element.style.overflow = 'auto';

  // Create CSS3D object
  const object = new CSS3DObject(element);

  // Set position, rotation, and scale
  object.position.set(props.position.x, props.position.y, props.position.z);
  object.rotation.set(props.rotation.x, props.rotation.y, props.rotation.z);
  object.scale.set(props.scale, props.scale, props.scale);

  // Add click event listener
  element.addEventListener('click', (event) => {
    emit('click', event);
  });

  return object;
};

// Calculate responsive dimensions based on screen size
const getResponsiveDimensions = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Base size on the smaller dimension
  const baseDimension = Math.min(width, height);

  // Scale content based on screen size
  let contentWidth, contentHeight;

  if (width < 768) {
    // Mobile
    contentWidth = Math.min(width * 0.9, 500);
    contentHeight = Math.min(height * 0.7, 600);
  } else if (width < 1200) {
    // Tablet / Small Desktop
    contentWidth = Math.min(width * 0.7, 700);
    contentHeight = Math.min(height * 0.8, 700);
  } else {
    // Large Desktop
    contentWidth = Math.min(width * 0.6, 800);
    contentHeight = Math.min(height * 0.8, 800);
  }

  return {width: contentWidth, height: contentHeight};
};

// Initialize the CSS3D object
onMounted(() => {
  // Wait a bit for the slot content to be rendered
  setTimeout(() => {
    // Get responsive dimensions
    const dimensions = getResponsiveDimensions();

    // Create CSS3D object with responsive dimensions
    css3DObject = createCSS3DObject(dimensions.width, dimensions.height);

    if (css3DObject) {
      emit('loaded', css3DObject);
    }

    // Add window resize listener
    window.addEventListener('resize', handleResize);
  }, 100);
});

// Handle window resize
const handleResize = () => {
  if (!css3DObject) return;

  // Get new dimensions
  const dimensions = getResponsiveDimensions();

  // Update CSS3D object element
  const element = css3DObject.element as HTMLElement;
  element.style.width = `${dimensions.width}px`;
  element.style.height = `${dimensions.height}px`;
};

// Clean up
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

// Watch for changes in props
watch(() => props.position, (newPosition) => {
  if (css3DObject) {
    css3DObject.position.set(newPosition.x, newPosition.y, newPosition.z);
  }
}, {deep: true});

watch(() => props.rotation, (newRotation) => {
  if (css3DObject) {
    css3DObject.rotation.set(newRotation.x, newRotation.y, newRotation.z);
  }
}, {deep: true});

watch(() => props.scale, (newScale) => {
  if (css3DObject) {
    css3DObject.scale.set(newScale, newScale, newScale);
  }
});

watch(() => props.visible, (newVisible) => {
  if (css3DObject) {
    css3DObject.visible = newVisible;
  }
});
</script>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>
