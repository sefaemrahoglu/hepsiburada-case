import { mount, createLocalVue } from "@vue/test-utils";
import DeleteDialogComp from "../../src/components/listPage/DeleteDialog.vue";
const localVue = createLocalVue()

import {
    Row,
    Col,
    Button,
    Dialog,
} from 'element-ui';
localVue.use(Row);
localVue.use(Col);
localVue.use(Button);
localVue.use(Dialog);


describe("DeleteDialogComp", () => {
    let wrapper
    beforeEach(() => {
        wrapper = mount(DeleteDialogComp, {
            localVue,
            propsData : {
                isDialogOpen :true,
                deletingLink : {
                    name: "test1",
                    link: "testlink",
                    point: 0,
                    createdAt: null,
                    updatedAt: null,
                }
            }
        })
    })
    it("calls the handleClose() method on DeleteDialogComp", async () => {
        wrapper.vm.handleClose()
        expect(wrapper.emitted().isDialogOpen[0][0]).toBe(false)

    });

})
