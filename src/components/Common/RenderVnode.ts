import { defineComponent } from "vue";
import RenderVNode from '../../common/renderVNode';

const RenderVNode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => {
      return props.vNode;
    }
  }
})

export default RenderVNode;