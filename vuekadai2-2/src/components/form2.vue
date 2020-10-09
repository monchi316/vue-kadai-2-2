<template>
    <div>
        <div class="field">
            <label class="label">以下にお答え下さい</label>
        </div>       
        <div class="field">
            <div class="field">
                <label class="label">現在、生命保険に加入されていますか</label>
            <input type="radio" id="join" name="join" @click= "show1 = !show1">
            <label class="radio" for="join">はい</label>
            <input type="radio" id="join" name="join" @click= "show1 = !show1">
            <label class="radio" for="join">いいえ</label>
            </div>
            <transition name="fade">
                <div class="field" v-if="!show1">
                <label class="label">現在入院中ですか、または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？</label>
                <input type="radio" id="now" name="now" @click= "show2 = !show2">
                <label class="radio" for="now">はい</label>
                <input type="radio" id="now" name="now" @click= "show2 = !show2">
                <label class="radio" for="now">いいえ</label>
                </div>
            </transition>          
            <transition name="fade">
                <div class="field" v-if="!show2">
                <label class="label">過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</label>
                <input type="radio" id="past" name="past">
                <label class="radio" for="past">はい</label>
                <input type="radio" id="past" name="past">
                <label class="radio" for="past">いいえ</label>
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
            show1: true,
            show2: true
        }
    },
    methods: {
        buttonClick1() {
            this.$emit("form-click", "Form1");
        },
        buttonClick2() {
            this.$emit("form-click", "Form3");
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
