<template>
  <div>
    <keep-alive>
      <component :is="selectedComponent" v-on:form-click="selectedComponent=$event"></component>    
    </keep-alive>   
  </div> 
</template>

<script>
import Form1 from './components/form1.vue';
import Form2 from './components/form2.vue';
import Form3 from './components/form3.vue';
import Form4 from './components/form4.vue';

export default {
  components: {
    Form1,
    Form2,
    Form3,
    Form4
  },
  data () {
    return {
      selectedComponent: 'Form1',
    }
  }
  
}
</script>