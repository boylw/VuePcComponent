import WInput from "@/components/baseComponent/w-input.vue";
import WFromitem from "@/components/baseComponent/w-formitem.vue";
import WButton from "@/components/baseComponent/w-button.vue";
import WFrom from "@/components/baseComponent/w-form.vue";
import WDialog from "@/components/baseComponent/w-dialog.vue";
import WUpload from "@/components/baseComponent/w-upload.vue";
import WHeader from "@/components/baseComponent/w-header.vue";
import WSlider from "@/components/baseComponent/w-slider.vue";
import WCheckbox from "@/components/baseComponent/w-checkbox.vue";
import WCheckboxGroup from "@/components/baseComponent/w-checkbox-group.vue";
import WSelect from "@/components/baseComponent/w-select.vue";
import WOption from "@/components/baseComponent/w-option.vue";
import WTable from "@/components/baseComponent/w-table.vue";
import WTableHeader from "@/components/baseComponent/w-table-header.vue";
import WTableHeaderItem from "@/components/baseComponent/w-table-header-item.vue";
import WTableBody from "@/components/baseComponent/w-table-body.vue";
import WPagination from "@/components/baseComponent/w-pagination.vue";
import WPanel from "@/components/baseComponent/w-panel.vue";
import WBaseCard from "@/components/baseComponent/w-base-card.vue";
import WDetailCard from "@/components/baseComponent/w-detail-card.vue";
import wListTab from "@/components/baseComponent/w-list-tab.vue";

export default {
    install : (Vue) => {
        Vue.component('WInput',WInput);
        Vue.component('WFromitem',WFromitem);
        Vue.component('WButton',WButton);
        Vue.component('WFrom',WFrom);
        Vue.component('WDialog',WDialog);
        Vue.component('WUpload',WUpload);
        Vue.component('WHeader',WHeader);
        Vue.component('WSlider',WSlider);
        Vue.component('WCheckbox',WCheckbox);
        Vue.component('WCheckboxGroup',WCheckboxGroup);
        Vue.component('WSelect',WSelect);
        Vue.component('WOption',WOption);
        Vue.component('WTable',WTable);
        Vue.component('WTableHeader',WTableHeader);
        Vue.component('WTableHeaderItem',WTableHeaderItem);
        Vue.component('WTableBody',WTableBody);
        Vue.component('WPagination',WPagination);
        Vue.component('WPanel',WPanel);
        Vue.component('WBaseCard',WBaseCard);
        Vue.component('WDetailCard',WDetailCard);
        Vue.component('wListTab',wListTab);
    }
} 