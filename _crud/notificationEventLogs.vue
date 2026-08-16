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
        apiRoute: 'apiRoutes.qnotification.notificationEventLogs',

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
              name: 'event', label: 'Event', field: 'event', 
              format: (val, row) => row.notificationEvent?.name ?? '-'
            },
              {
              name: 'template', label: 'Template', field: 'template', 
              format: (val, row) => row.template?.title ?? '-'
            },
              {
              name: 'recipient', label: 'Recipient', field: 'recipient', 
   
            },
              {
              name: 'provider', label: 'Provider', field: 'provider', 
   
            },
            {
              name: 'subject', label: 'Subject', field: 'subject', 
   
            },
            /*
            {
              name: 'body', label: 'Body', field: 'body', 
   format: (val, row) => JSON.stringify(row.body) ?? '-'
            },*/
              {
              name: 'statusId', label: 'Status', field: 'template', 
              format: (val, row) => row.eventStatus?.name ?? '-'
            },
          
            {
              name: 'sentAt',
              label: 'Sent At',
              field: 'sentAt',
              format: (val) => (val ? this.$trd(val) : '-'),
              align: 'left',
              sortable: true,
            },
          /*  {
              name: 'actions',
              label: this.$tr('isite.cms.form.actions'),
              align: 'center',
            },*/
          ],
          actions: [
            
          ],
          filters: {},
          requestParams: {
            include: 'notificationEvent,template,eventStatus'
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
