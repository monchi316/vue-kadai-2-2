<template>
    <div>
        <div class="field">
            <label class="label">以下にお答え下さい</label>
        </div>       
        <div class="field">
            <div class="field">
                <label class="label">現在、生命保険に加入されていますか</label>
            <input v-model="radio" value="はい" type="radio" id="hoken" name="hoken" @click= "nowShow = !nowShow" @change="lifeInsuranceClick">
            <label class="radio" for="hoken">はい</label>
            <input v-model="radio" value="いいえ" type="radio" id="hoken" name="hoken" @click= "nowShow = !nowShow" @change="lifeInsuranceClick">
            <label class="radio" for="hoken">いいえ</label>
            </div>
            <transition name="fade">
                <div class="field" v-if="!nowShow">
                <label class="label">現在入院中ですか、または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</label>
                <input v-model="radio" value="はい" type="radio" id="jikkin" name="jikkin" @click= "pastShow = !pastShow" @change="nowClick">
                <label class="radio" for="jikkin">はい</label>
                <input v-model="radio" value="いいえ" type="radio" id="jikkin" name="jikkin" @click= "pastShow = !pastShow" @change="nowClick">
                <label class="radio" for="jikkin">いいえ</label>
                </div>
            </transition>          
            <transition name="fade">
                <div class="field" v-if="!pastShow">
                <label class="label">過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</label>
                <input v-model="radio" value="はい" type="radio" id="kako" name="kako" @change="pastClick">
                <label class="radio" for="kako">はい</label>
                <input v-model="radio" value="いいえ" type="radio" id="kako" name="kako" @change="pastClick">
                <label class="radio" for="kako">いいえ</label>
                </div>
            </transition>            
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
    data(){
        return {
            nowShow: true,
            pastShow: true
        }
    },
    methods: {
        buttonClick1() {
            this.$emit("form-click", "Form1");
        },
        buttonClick2() {
            this.$emit("form-click", "Form3");
        },
        lifeInsuranceClick() {
            this.$store.state.lifeInsurance = this.radio
        },
        nowClick() {
            this.$store.state.now = this.radio
        },
        pastClick() {
            this.$store.state.past = this.radio
        }
    }
}
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 0.5s;
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-leave {
        opacity: 1;
    }
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>
