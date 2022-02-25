import { mount, createLocalVue } from "@vue/test-utils";
import ListPageComp from "../../src/pages/listPage.vue";
const localVue = createLocalVue()
import Vuex from 'vuex'
import links from '../../src/store/links'
localVue.use(Vuex)

import VueRouter from 'vue-router'
localVue.use(VueRouter)
const router = new VueRouter()
import {
    Icon,
    Row,
    Col,
    Input,
    Button,
    Pagination,
    Dialog,
    Select,
    Option
} from 'element-ui';
localVue.use(Icon);
localVue.use(Row);
localVue.use(Col);
localVue.use(Input);
localVue.use(Button);
localVue.use(Pagination);
localVue.use(Dialog);
localVue.use(Select);
localVue.use(Option);

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe("ListPageComp", () => {
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
                }
            }
        })
        wrapper = mount(ListPageComp, {
            localVue,
            store,
            router,
        })
    })
    it("calls the sortBy('date') method on ListPageComp", async () => {
        wrapper.vm.sortBy('date')
        expect(wrapper.vm._data.linkList[0].name).toBe('test1')
    });
    it("calls the sortBy('mostVoted') method on ListPageComp", async () => {
        wrapper.vm.sortBy('mostVoted')
        expect(wrapper.vm._data.linkList[0].name).toBe('test2')
    });
    it("calls the sortBy('lessVoted') method on ListPageComp", async () => {
        wrapper.vm.sortBy('lessVoted')
        expect(wrapper.vm._data.linkList[0].name).toBe('test1')
    });
    it("calls the deleteLink() method on ListPageComp", async () => {
        wrapper.vm.deleteLink(wrapper.vm._data.linkList[2])
        expect(wrapper.vm._data.deletingLink.name).toBe('test3')
    });
    it("calls the deleteLink() watch on ListPageComp", async () => {
        wrapper.vm.$options.watch.deletedLink.call(wrapper.vm)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
    });

})
