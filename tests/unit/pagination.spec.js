import { mount, createLocalVue } from "@vue/test-utils";
import PaginationComp from "../../src/components/listPage/pagination";
const localVue = createLocalVue()
import Vuex from 'vuex'
import links from '../../src/store/links'
localVue.use(Vuex)

import {
    Pagination,
} from 'element-ui';
localVue.use(Pagination);

describe("PaginationComp", () => {
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
            {
                name: "test4",
                link: "testlink",
                point: 0,
                createdAt: '2022-02-24T10:07:33.214Z',
                updatedAt: '2022-02-24T10:07:33.214Z',
            },

            {
                name: "test5",
                link: "testlink",
                point: 0,
                createdAt: '2022-02-24T10:07:33.214Z',
                updatedAt: '2022-02-24T10:07:33.214Z',
            },
            {
                name: "test6",
                link: "testlink",
                point: 0,
                createdAt: '2022-02-24T10:07:33.214Z',
                updatedAt: '2022-02-24T10:07:33.214Z',
            },]
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
        wrapper = mount(PaginationComp, {
            localVue,
            store,
        })
    })
    it("calls the handleCurrentChange() method on PaginationComp", async () => {
        wrapper.vm.handleCurrentChange(2)
        expect(wrapper.emitted().pageNumber[0][0]).toBe(2)

    });

})
