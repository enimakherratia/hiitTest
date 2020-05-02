export const childRoutes = [
  {
    path: 'page1',
    loadChildren: () =>
      import('./page1/page1.module').then(m => m.Page1Module),
    data: { icon: 'insert_drive_file', text: 'Page1' }
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('./page2/page2.module').then(m => m.Page2Module),
    data: { icon: 'insert_drive_file', text: 'Page2' }
  },


];
