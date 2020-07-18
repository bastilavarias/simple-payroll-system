<template>
  <p class="font-weight-bold pl-0">
    <span class="mr-1"> {{ title }}: </span>
    <span class="font-weight-regular text-capitalize"><slot></slot></span>
  </p>
</template>

<script>
export default {
  name: "payslip-information-label",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
