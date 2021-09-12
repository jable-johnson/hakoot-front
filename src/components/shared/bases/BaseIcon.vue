<template>
  <component :is="iconComponent" class="inline-block fill-current" style="height: 1em; width: 1em; vertical-align: -0.125em" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

// const icons = {
//   'home': require('../assets/icons/icon-home.svg').default,
//   'user': require('../assets/icons/icon-user.svg').default,
//   'key': require('../assets/icons/icon-key.svg').default,
// }

const icons: any = {};
const requireComponents = require.context('@/assets/icons/', false, /.svg$/);
requireComponents.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/icon-(.+)\.svg$/, '$1');
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});

@Options({
  components: {},
  directives: {},
})
export default class BaseIcon extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  name!: string;

  mounted() {
    console.log('cacsacasasccccccccccccccccccccccccccccc');
  }

  get iconComponent() {
    return icons[this.name];
  }
}
</script>
