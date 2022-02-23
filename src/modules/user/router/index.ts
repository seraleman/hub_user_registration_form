export default {
  name: 'form',
  component: () =>
    import(/* webpackChunkName: "FormPage" */ '../pages/userPage.vue'),
  children: [],
}
