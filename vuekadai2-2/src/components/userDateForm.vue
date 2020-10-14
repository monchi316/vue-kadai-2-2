<template>
    <div>
        <div class="field">
            <label class="label">お客様の情報を入力して下さい</label>
        </div>
        <div class="field">
            <label class="label">-性別-</label>
            <input v-model="radio" type="radio" id="male" name="sex" value="男" @change="radioClick">
            <label class="radio" for="male">男</label>
            <input v-model="radio" type="radio" id="female" name="sex" value="女" @change="radioClick">
            <label class="radio" for="female">女</label>
        </div>
        <div class="field">
            <label class="label">-生年月日-</label>
            <input v-model="date" type="date" @change="dateClick">
        </div>                                              
        <div class="control">
            <button class="button is-small is-primary" @click="nextButton">次へ進む ＞</button>
        </div>
    </div>    
</template>

<script>
export default {
    methods: {
        nextButton() {
            this.$emit("form-click", "lifeInsuranceForm");
        },
        radioClick() {
            this.$store.commit('gender', this.radio)
        },
        dateClick() {
            this.$store.commit('birthDate', this.date)
        }
    }
}
</script>
