export default {
  // Providers
  setting: {
    permission: 'notification.providers.manage',
    activated: true,
    path: '/notificaciones/configuracion',
    name: 'notification.admin.providers',
    layout: () => import('layouts/master'),
    page: () => import('modules/qnotification/_pages/admin/setting/index'),
    title: 'notification.cms.sidebar.adminProvider',
    icon: 'fa-light fa-bell-plus',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
  notification: {
    permission: 'notification.notifications.manage',
    activated: true,
    path: '/notifications/panel',
    name: 'notification.admin.notification',
    crud: import('modules/qnotification/_crud/notifications'),
    layout: () => import('layouts/master'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    title: 'notification.cms.sidebar.adminPanel',
    icon: 'fa-light fa-bell',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
  notificationTemplates: {
    permission: 'notification.notification-templates.manage',
    activated: true,
    path: '/notifications/notification-templates',
    name: 'notification.admin.notification-templates',
    crud: import('modules/qnotification/_crud/notificationTemplates'),
    layout: () => import('layouts/master'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    title: 'Notification Templates',
    icon: 'fa-light fa-list',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
   notificationEvents: {
    permission: 'notification.notification-events.manage',
    activated: true,
    path: '/notifications/notification-events',
    name: 'notification.admin.notification-events',
    crud: import('modules/qnotification/_crud/notificationEvents'),
    layout: () => import('layouts/master'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    title: 'Notification Events',
    icon: 'fa-light fa-list',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  },
  notificationEventLogs: {
    permission: 'notification.notification-event-logs.manage',
    activated: true,
    path: '/notifications/notification-event-logs',
    name: 'notification.admin.notification-event-logs',
    crud: import('modules/qnotification/_crud/notificationEventLogs'),
    layout: () => import('layouts/master'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    title: 'Notification Event Logs',
    icon: 'fa-light fa-list',
    authenticated: true,
    subHeader: {
      refresh: true,
    }
  }
}
