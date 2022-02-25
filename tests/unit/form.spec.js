import { mount, createLocalVue } from "@vue/test-utils";
import FormComp from "../../src/components/formPage/form.vue";
const localVue = createLocalVue()

import Vuex from 'vuex'
import links from '../../src/store/links'
localVue.use(Vuex)

import VueRouter from 'vue-router'
localVue.use(VueRouter)
const router = new VueRouter()
import {
    Form,
    FormItem,
    Input,
    Button,
} from 'element-ui';
localVue.use(Form);
localVue.use(FormItem);
localVue.use(Input);
localVue.use(Button);


describe("FormComp", () => {
    let wrapper
    let store
    let state = {
        links: [
            {
                name: "test1",
                link: "testlink",
                point: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
            {
                name: "test2",
                link: "testlink",
                point: 1,
                createdAt: '2022-02-24T10:08:33.214Z',
                updatedAt: '2022-02-24T10:08:33.214Z',
            },
            {
                name: "test3",
                link: "testlink",
                point: 0,
                createdAt: '2022-02-24T10:07:33.214Z',
                updatedAt: '2022-02-24T10:07:33.214Z',
            },
        ]
    }
    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                links: {
                    state,
                    getters: links.getters,
                    mutations : links.mutations
                }
            }
        })
        wrapper = mount(FormComp, {
            localVue,
            store,
            router,
        })
    })
    it("calls the submitForm method with true validate and new link", async () => {
        wrapper.setData({
            newLink: {
                name: "test1",
                link: "testlink1",
                point: 0,
                createdAt: null,
                updatedAt: null,
            }
        })
        wrapper.vm.submitForm('newLink')
        expect(wrapper.vm._data.message).toBe(wrapper.vm._data.newLink.name + ' added')

    });
    it("calls the submitForm method with true validate and exist link", async () => {
        wrapper.setData({
            newLink: {
                name: "test1",
                link: "testlink",
                point: 0,
                createdAt: null,
                updatedAt: null,
            }
        })
        wrapper.vm.submitForm('newLink')
        expect(wrapper.vm._data.message).toBe('Please add a link that does not exist!')

    });
    it("calls the submitForm method with false validate", async () => {
        wrapper.setData({
            newLink: {
                name: "",
                link: "",
                point: 0,
                createdAt: null,
                updatedAt: null,
            }
        })
        wrapper.vm.submitForm('newLink')
        expect(wrapper.vm._data.message).toBe('Link name and link cannot be left blank!')

    });
})
