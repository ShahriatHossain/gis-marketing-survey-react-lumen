import { RouteModel } from "../models/Common";

export const ROUTES = <RouteModel[]>[
    { path: '/admin/surveys', breadcrumb: 'Surveys' },
    { path: '/admin/new-survey', root: '/admin/surveys', rootBreadcrumb: 'Surveys', breadcrumb: 'New Survey' },
    { path: '/admin/edit-survey/', root: '/admin/surveys', rootBreadcrumb: 'Surveys', breadcrumb: 'Edit Survey' },
    { path: '/admin/question-types', breadcrumb: 'Question Types' },
    { path: '/admin/new-question-type', root: '/admin/question-types', rootBreadcrumb: 'Question Types', breadcrumb: 'New Question Type' },
    { path: '/admin/edit-question-type/', root: '/admin/question-types', rootBreadcrumb: 'Question Types', breadcrumb: 'Edit Question Type' },
    { path: '/admin/questions', breadcrumb: 'Questions' },
    { path: '/admin/new-question', root: '/admin/questions', rootBreadcrumb: 'Questions',  breadcrumb: 'New Question' },
    { path: '/admin/edit-question/', root: '/admin/questions', rootBreadcrumb: 'Questions', breadcrumb: 'Edit Question' },
    { path: '/admin/multichoices', breadcrumb: 'Multichoices' },
    { path: '/admin/new-multichoice', root: '/admin/multichoices', rootBreadcrumb: 'Multichoices', breadcrumb: 'New Multichoice' },
    { path: '/admin/edit-multichoice/', root: '/admin/multichoices', rootBreadcrumb: 'Multichoices', breadcrumb: 'Edit Multichoice' },
    { path: '/admin/customers', breadcrumb: 'Customers' },
    { path: '/admin/new-customer', root: '/admin/customers', rootBreadcrumb: 'Customers', breadcrumb: 'New Customer' },
    { path: '/admin/edit-customer/', root: '/admin/customers', rootBreadcrumb: 'Customers', breadcrumb: 'Edit Customer' },
    { path: '/admin/users', breadcrumb: 'Users' },
    { path: '/admin/new-user', root: '/admin/users', rootBreadcrumb: 'Users', breadcrumb: 'New User' },
    { path: '/admin/edit-user/', root: '/admin/users', rootBreadcrumb: 'Users', breadcrumb: 'Edit User' },

];