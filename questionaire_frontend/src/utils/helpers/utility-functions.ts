import $ from 'jquery';
import 'bootstrap';
import bootstrap, { Modal } from 'bootstrap';

export const hideBootstrapModal = (modalId: string) => {
    const myModalEl = document.getElementById(modalId);
    const modal = Modal.getInstance(<any>myModalEl)

    modal && modal.hide();

    $("[class*='modal-backdrop fade show']").remove();

}

export const isEmpty = (value: any) => value.trim() === '';

export const validateEmail = (email: string) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email.match(mailformat) ? true : false;
}