<template>
  <n-space vertical>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered>
        <DashboardHeader />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="min-height: 90vh"
        >
          <n-menu :inverted="inverted" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
        </n-layout-sider>
        <n-layout style="min-height: 90vh" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered> <DashboardFooter /> </n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { NConfigProvider, NMenu, NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace } from 'naive-ui';

// layouts components
import DashboardFooter from '@/components/layouts/dashboard/Footer.vue';
import DashboardHeader from '@/components/layouts/dashboard/Header.vue';

@Options({
  name: 'DashboardLayout',
  components: {
    NLayout,
    DashboardHeader,
    DashboardFooter,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NSpace,
    NMenu,
  },
})
export default class extends Vue {
  inverted: boolean = false;

  menuOptions = [
    {
      label: 'Hear the Wind Sing',
      key: 'hear-the-wind-sing',
      icon: '',
    },
    {
      label: 'Pinball 1973',
      key: 'pinball-1973',
      icon: '',
      disabled: false,
      children: [
        {
          label: 'Rat',
          key: 'rat',
        },
      ],
    },
    {
      label: 'A Wild Sheep Chase',
      key: 'a-wild-sheep-chase',
      disabled: false,
      icon: '',
    },
    {
      label: 'Dance Dance Dance',
      key: 'Dance Dance Dance',
      icon: '',
      children: [
        {
          type: 'group',
          label: 'People',
          key: 'people',
          children: [
            {
              label: 'Narrator',
              key: 'narrator',
              icon: '',
            },
            {
              label: 'Sheep Man',
              key: 'sheep-man',
              icon: '',
            },
          ],
        },
        {
          label: 'Beverage',
          key: 'beverage',
          icon: '',
          children: [
            {
              label: 'Whisky',
              key: 'whisky',
            },
          ],
        },
        {
          label: 'Food',
          key: 'food',
          children: [
            {
              label: 'Sandwich',
              key: 'sandwich',
            },
          ],
        },
        {
          label: 'The past increases. The future recedes.',
          key: 'the-past-increases-the-future-recedes',
        },
      ],
    },
  ];
}
</script>
