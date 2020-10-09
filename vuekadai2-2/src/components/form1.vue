<template>
    <div>
        <div class="field">
            <label class="label">お客様の情報を入力して下さい</label>
        </div>
        <div class="field">
            <label class="label">-性別-</label>
            <input type="radio" id="male" name="sex">
            <label class="radio" for="male">男</label>
            <input type="radio" id="female" name="sex">
            <label class="radio" for="female">女</label>
        </div>
        <div class="field">
            <label class="label">-生年月日-</label>
            <input type="date">
        </div>                                              
        <div class="control">
            <button class="button is-small is-primary" @click="buttonClick">次へ進む ＞</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        buttonClick() {
            this.$emit("form-click", "Form2");
        }
    }
}
</script>
