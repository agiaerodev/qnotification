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
        apiRoute: 'apiRoutes.qnotification.notificationTemplates',
        create: {
          title: 'New Notification Template',
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
              name: 'title', label: 'Title', field: 'title', 
         
            },
             {
              name: 'event', label: 'Event', field: 'event', 
              format: (val, row) => row.notificationEvent?.name ?? '-'
            },
            {
              name: 'provider',
              label: 'provider',
              field: 'provider',
              align: 'left',
              sortable: true,
            },
            {
              name: 'layout',
              label: 'Layout',
              field: 'layout',
              align: 'left',
              sortable: true,
            },
            {
              name: 'contentView',
              label: 'Content View',
              field: 'contentView',
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
          requestParams: {
            include: 'notificationEvent'
          },
        },

        update: {
          title: 'Update Notification Template',
          requestParams: {},
        },
        delete: true,
        formLeft: {
          id: { value: '' },
          title: {
            value: null,
            type: 'input',
            props: {
              label: 'Title',
              rules: [
                (val) => !!val || this.$tr('isite.cms.message.fieldRequired'),
              ],
            },
          },
          eventId: {
            value: [],
            type: 'select',
            props: {
              label: 'Event *',
              rules: [
                val => !!val?.length || this.$tr('isite.cms.message.fieldRequired')
              ],
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qnotification.notificationEvents',
              select: {
                label: 'name',
                id: 'id'
              }
            }
          },
          subject: {
            value: '',
            type: 'input',
            isTranslatable: false,
            props: {
              type: 'textarea',
              label: 'Subject',
            },
          },
         body: {
            value: '',
            type: 'html',
            isTranslatable: false,
            props: {
              label: 'Body',
            },
          }
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
          provider: {
            value: null,
            type: 'select',
            required: true,
            props: {
              label: 'Provider*',
              options: [
                { label: 'Email', value: 'email' },
                { label: 'SMS', value: 'sms' },
                { label: 'Push', value: 'push' },
                { label: 'Broadcast', value: 'broadcast' },
              ],
              clearable: true,
            },
          },          
            layout: {
            value: null,
            type: 'input',
            props: {
              label: 'Layout',
              rules: [
                (val) => !!val || this.$tr('isite.cms.message.fieldRequired'),
              ],
            },
          },
          contentView: {
            value: null,
            type: 'input',
            props: {
              label: `Content View*`,
              rules: [
                (val) => !!val || this.$tr('isite.cms.message.fieldRequired'),
              ],
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
