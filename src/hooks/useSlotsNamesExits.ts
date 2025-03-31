import { Comment, computed, reactive, Text, useSlots, type VNode, } from 'vue';

// 组合式Hooks
// 如果slotsName是字符串，返回一个computed，如果slotsName是数组，返回一个对象，对象的key是slotsName的元素，值是computed
const useSlotsNamesExits = (slotsName: string | string[] = 'default') => {
  const slots = useSlots();
  const checkSlot = (slotName: string) => {
    const slotsValue = slots[slotName]?.();
    
    // 检查插槽是否存在且不为空
    const checkSlotHas = (slotContent: VNode) => {
      // 判断是否是注释节点 或者空节点
      if (slotContent.type === Comment) {
        return false;
      }
      // 如果是数组节点 判断是否为空数组
      if (Array.isArray(slotContent.children) && !slotContent.children.length) {
        return false;
      }
      // 判断是否是文本节点
      if (slotContent.type !== Text) {
        return true;
      }
      // 判断是否是字符串节点 判断是否为空字符串
      if (typeof slotContent.children === 'string') {
        return slotContent.children.trim() !== '';
      }
      // 递归判断
      if (slotsValue && slotsValue?.length) {
        const result = slotsValue.some((slotContent: VNode) => {
          return checkSlotHas(slotContent);
        });
        return result;
      }
      return false;
    };

    if (slotsValue && slotsValue?.length) {
      const result = slotsValue.some((slotContent: VNode) => {
        return checkSlotHas(slotContent);
      });
      return result;
    }
    return false;
  }
  // slot 不是数组，只有一个
  if (!Array.isArray(slotsName)) {
    return computed(() => checkSlot(slotsName));
  } else {
    // slot 是数组
    const slotsExist = reactive<any>({});
    slotsName.forEach((slotName: string) => {
      const exist = computed(() => checkSlot(slotName));
      slotsExist[slotName] = exist;
    });
    return slotsExist;
  }
}
export default useSlotsNamesExits;


