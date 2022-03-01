import { RouteModel } from "../models/Common";

export const ROUTES = <RouteModel[]>[
    { path: '/admin/surveys', breadcrumb: 'Surveys' },
    { path: '/admin/new-survey', breadcrumb: 'New Survey' },
    { path: '/admin/edit-survey/', breadcrumb: 'Edit Survey' },
    { path: '/admin/business-types', breadcrumb: 'Business Types' },
    { path: '/admin/new-business-type', breadcrumb: 'New Business Type' },
    { path: '/admin/edit-business-type/', breadcrumb: 'Edit Business Type' },
    { path: '/admin/question-types', breadcrumb: 'Questions' },
    { path: '/admin/new-question-type', breadcrumb: 'New Question Type' },
    { path: '/admin/edit-question-type/', breadcrumb: 'Edit Question Type' },
    { path: '/admin/questions', breadcrumb: 'Questions' },
    { path: '/admin/new-question', breadcrumb: 'New Question' },
    { path: '/admin/edit-question/', breadcrumb: 'Edit Question' },
    { path: '/admin/multichoices', breadcrumb: 'Multichoices' },
    { path: '/admin/new-multichoice', breadcrumb: 'New Multichoice' },
    { path: '/admin/edit-multichoice/', breadcrumb: 'Edit Multichoice' },
    { path: '/admin/customers', breadcrumb: 'Customers' },
    { path: '/admin/new-customer', breadcrumb: 'New Customer' },
    { path: '/admin/edit-customer/', breadcrumb: 'Edit Customer' },

];