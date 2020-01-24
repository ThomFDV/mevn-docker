import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import {
  MdButton,
  MdField,
  MdCard,
  MdRipple
} from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdRipple);
Vue.use(MdField);
Vue.use(MdCard);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
