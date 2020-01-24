<template>
<div class="container">
    <h1>Loading <span>.</span><span>.</span><span>.</span></h1>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.container{
    h1{
        text-align: center;
        color: white;
        font-weight: 300;

        span{
            &:nth-child(1){
            animation: show 3s linear infinite 0s;
        }
           &:nth-child(2){
            animation: show 3s linear infinite 500ms;
        }
        &:nth-child(3){
            animation: show 3s linear infinite 1.5ms;
        }
        }
        @keyframes show {
            from{
                opacity: 0;
            }
            to{
                opacity: 1;
            }
        }
    }
}
</style>
