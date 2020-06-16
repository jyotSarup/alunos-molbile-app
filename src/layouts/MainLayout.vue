<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Alunos
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer></Footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  components: { Footer :  require("../components/Footer.vue").default }
}
</script>
