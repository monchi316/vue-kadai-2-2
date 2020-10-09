<template>
    <div>
        <div class="field">
            <label class="label">-ご相談内容-</label>
        </div>       
        <div class="field">
            <div class="field">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-left is-small is-primary" @click="buttonClick1">＜ 前へ戻る</button>
                </div>
                <div class="control">
                    <button class="button is-right is-small is-primary" @click="buttonClick2">次へ進む ＞</button>
                </div>
            </div> 
        </div>      
    </div>
</template>

<script>
export default {
    methods: {
        buttonClick1() {
            this.$emit("form-click", "Form2");
        }
    }
}
</script>

