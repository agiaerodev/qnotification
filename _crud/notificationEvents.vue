<template>
</template>
<script>


export default {
  data() {
    return {
      crudId: this.$uid()
    };
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        apiRoute: 'apiRoutes.qnotification.notificationEvents',
        create: {
          title: 'New Notification Event',
        },
        read: {
          columns: [
            {
              name: 'id',
              label: this.$tr('isite.cms.form.id'),
              field: 'id',
              sortable: true,
              align: 'left',
            },
             {
              name: 'name', 
              label: 'Name', 
              field: 'name', 
               align: 'left',
              sortable: true,
            },
            {
              name: 'description',
              label: 'Description',
              field: 'description',
              align: 'left',
              sortable: true,
            },
              {
              name: 'context',
              label: 'Context',
              field: 'context',
              format: (val) => (val ? val : '-'),
              align: 'left',
              sortable: true,
            },
            {
              name: 'status',
              label: this.$tr('isite.cms.form.status'),
              field: 'status',
              align: 'left',
              asStatus: true,
            },
            {
              name: 'createdAt',
              label: this.$tr('isite.cms.form.createdAt'),
              field: 'createdAt',
              format: (val) => (val ? this.$trd(val) : '-'),
              align: 'left',
              sortable: true,
            },
            {
              name: 'actions',
              label: this.$tr('isite.cms.form.actions'),
              align: 'center',
            },
          ],
          actions: [
            
          ],
          filters: {},
          requestParams: {},
        },

        update: {
          title: 'Update Notification Template',
          requestParams: {},
        },
        delete: true,
        formLeft: {
          id: { value: '' },
          name: {
            value: '',
            type: 'input',
            isTranslatable: false,
            props: {
              label: 'Name',
            },
          },
         description: {
            value: '',
            type: 'input',
            isTranslatable: false,
            props: {
              type: 'textarea',
              label: 'Description',
            },
          },
        },
        formRight: {
          status: {
            value: true,
            type: 'select',
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.status')}:*`,
              options: [
                { label: this.$tr('isite.cms.label.enabled'), value: true },
                { label: this.$tr('isite.cms.label.disabled'), value: false },
              ],
              clearable: true,
            },
          },
          iconClass: {
            value: null,
            type: 'input',
            props: {
              label: 'Icon Class',
            },
          },    
              context: {
            value: null,
            type: 'input',
            props: {
              label: 'Context',
            },
          },    
        },
    
      };
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    },
  },
  methods: {
    /* maps value to array  */
    mapMultipleValue(field, fieldName){

    }
  },
};
</script>
