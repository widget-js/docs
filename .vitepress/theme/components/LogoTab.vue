<script setup lang="ts">
import { ref } from 'vue'

interface TabItem {
  logo: string
  title: string
  key?: string
}

const props = defineProps<{
  tabs: TabItem[]
  defaultActive?: number
}>()

const activeIndex = ref(props.defaultActive ?? 0)

const setActive = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="logo-tab-wrapper">
    <div class="logo-tab-header" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.key ?? index"
        class="logo-tab-item"
        :class="{ active: activeIndex === index }"
        role="tab"
        :aria-selected="activeIndex === index"
        @click="setActive(index)"
      >
        <img v-if="tab.logo" :src="tab.logo" :alt="tab.title" class="logo-tab-logo" />
        <span class="logo-tab-title">{{ tab.title }}</span>
      </button>
    </div>
    <div class="logo-tab-content">
      <slot :name="tabs[activeIndex]?.key ?? activeIndex" :index="activeIndex">
        <slot v-if="tabs.length > 0" />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.logo-tab-wrapper {
  margin: 1.25rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.logo-tab-header {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 8px;
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
}

.logo-tab-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.logo-tab-item:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.logo-tab-item.active {
  background-color: var(--vp-c-brand);
  color: #fff;
  box-shadow: 0 2px 8px rgba(var(--vp-c-brand-rgb), 0.3);
}

.logo-tab-item.active:hover {
  background-color: var(--vp-c-brand-hover);
}

.logo-tab-logo {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  object-fit: contain;
}

.logo-tab-content {
  padding: 20px;
  background-color: var(--vp-c-bg);
}

.logo-tab-content :deep(.vp-doc pre) {
  margin: 0;
}
</style>
