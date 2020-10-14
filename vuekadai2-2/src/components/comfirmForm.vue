<template>
    <div>
        <div class="field">
            <label class="label">-性別ー</label>
            <p>{{ gender }}</p>
        </div>
        <div class="field">
            <label class="label">-生年月日-</label>
            <p>{{ birthDate }}</p>
        </div>
        <div class="field">
            <label class="label">-現在、生命保険に加入されていますか？-</label>
            <p>{{ lifeInsurance }}</p>
        </div>
        <div class="field">
            <label class="label">-現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</label>
            <p>{{ now }}</p>
        </div>
        <div class="field">
            <label class="label">-過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？-</label>
            <p>{{ past }}</p>
        </div>
        <div class="field">
            <label class="label">-ご相談内容-</label>
            <p>{{ consult }}</p>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-left is-small is-primary" @click="backButton">＜ 前へ戻る</button>
            </div>
            <div class="control">
                <button class="button is-right is-small is-primary">送信 ＞</button>
            </div>
        </div> 
    </div>      
</template>

<script>
export default {
    computed: {
        gender() {
            return this.$store.state.gender
        },
        birthDate() {
            return this.$store.state.birthDate
        },
        lifeInsurance() {
            return this.$store.state.lifeInsurance
        },
        now() {
            return this.$store.state.now
        },
        past() {
            return this.$store.state.past
        },
        consult() {
            return this.$store.state.consult
        }
    },
    methods: {
        backButton() {
            this.$emit("form-click", "consultForm");
        },
        consultInput() {
            this.$store.state.consult = this.text
        }
    }
}
</script>

