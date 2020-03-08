<template>
  <div>
    <div v-for="item in content" :key="item.id">
      <h1 v-if="item.type == 'heading'">{{ item.value }}</h1>
      <span v-if="item.type == 'paragraph'" v-html="item.value"></span>
      <cld-image 
        v-if="item.type == 'image'" 
        :cloudName="$context.cloudName"
        :publicId="item.value" 
        width="300" 
        crop="scale" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostExtraContent',
  props: ['content']
}
</script>