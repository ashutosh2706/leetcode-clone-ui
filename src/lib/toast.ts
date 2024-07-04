import Swal from "sweetalert2";

export const SuccessToast = Swal.mixin({
    icon: 'success',
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    background: '#a5dc86',
    iconColor: 'white',
    color: 'white'
});


export const ErrorToast = Swal.mixin({
    icon: 'error',
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    background: '#f27474',
    iconColor: 'white',
    color: 'white'
});


export const WarningToast = Swal.mixin({
    icon: 'warning',
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    background: '#f8bb86',
    iconColor: 'white',
    color: 'white'
});


export const InfoToast = Swal.mixin({
    icon: 'info',
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    background: '#3fc3ee',
    iconColor: 'white',
    color: 'white'
});