import { defineComponent } from "vue";

const RenderVNode = defineComponent({
  props: {
    VNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.VNode;
  }
})

export default RenderVNode;