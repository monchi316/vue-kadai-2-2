<template>
    <div>
        <div class="field">
            <label class="label">-ご相談内容-</label>
        </div>       
        <div class="field">
            <div class="field">
                <textarea v-model="text" name="" id="" cols="30" rows="10" @change="consultInput"></textarea>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-left is-small is-primary" @click="backButton">＜ 前へ戻る</button>
                </div>
                <div class="control">
                    <button class="button is-right is-small is-primary" @click="nextButton">次へ進む ＞</button>
                </div>
            </div> 
        </div>      
    </div>
</template>

<script>
export default {
    methods: {
        backButton() {
            this.$emit("form-click", "lifeInsuranceForm");
        },
        nextButton() {
            this.$emit("form-click", "comfirmForm");
        },
        consultInput() {
            this.$store.commit('consult', this.text)
        }
    }
}
</script>

