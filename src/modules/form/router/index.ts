export default {
  name: 'form',
  component: () =>
    import(/* webpackChunkName: "FormPage" */ '../pages/FormPage.vue'),
  children: [],
}
