<template>
  <div>
    <keep-alive>
      <component :is="selectedComponent" v-on:form-click="selectedComponent=$event"></component>    
    </keep-alive>   
  </div> 
</template>

<script>
import userDateForm from './components/userDateForm.vue';
import lifeInsuranceForm from './components/lifeInsuranceForm.vue';
import consultForm from './components/consultForm.vue';
import comfirmForm from './components/comfirmForm.vue';

export default {
  components: {
    userDateForm,
    lifeInsuranceForm,
    consultForm,
    comfirmForm
  },
  data () {
    return {
      selectedComponent: 'userDateForm',
    }
  }
  
}
</script>