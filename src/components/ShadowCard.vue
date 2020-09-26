<template>
  <div class="shadowCard">
    <slot></slot>
  </div>
</template>

<style scoped>
.shadowCard {
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  color: #333;
  background: #fff;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease-in-out;
}

.shadowCard:hover {
  transform: scale(1.1);
}
</style>
