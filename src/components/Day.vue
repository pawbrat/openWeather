<template>
  <div>
    {{msg.name}}
  </div>
</template>

<script>
export default {
  name: 'Day',
  props: {
    msg: Object
  }
}
</script>
