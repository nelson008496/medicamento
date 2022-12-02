<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="~assets/med7.jpg" >
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Medicacao</div>
          <div class="text-subtitle1">atraves deste aplicativo voce podera fazer o controle dos teus horarios de medicacao de erros</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="~assets/med6.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Agendas</div>
          <div class="text-subtitle1">receba notificacoes dos teus horarios de medicacao e cuide da sua saude</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="~assets/medico2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Pessoal Medico</div>
          <div class="text-subtitle1">Consulte se com os medicos mais especializados e ao seu dispor</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="full-width q-pt-md">
               <q-btn label="Comecar" color="primary" class="full-width" flat :to="{ name: 'login' }" rounded />
            </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PageInicial',
  setup () {
    return {
      slide: ref('first')
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
