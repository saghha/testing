<template>
    <div id="container" class="stilo">
        <div id="contacts">
            <div id="contacts--contact">
                <p>{{ mail }}</p>
                <p>{{ phone }}</p>
            </div>
            <div id="contacts--social">
                <div></div>
                <div></div>
                <div></div>
            </div>
            </div>
            <div id="mentions">
            <p>{{ mention }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data () {
        return {
            mail: 'example@mail.com',
            phone: '+56963021525',
            mention: 'Good Luck'
        }
    }
}
</script>
<style scoped>
    body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}
.stilo {
    clear: both;
    position: relative;
    top: 56vh;
}
#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#17a2b8;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>