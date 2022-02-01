import Swal from "sweetalert2"

function alertBox(title:any, icon:any, position:any = 'top-end') {
  return Swal.fire({
    title: title,
    icon: icon,
    position: position,
    timerProgressBar: true,
    timer: 4000,
    showConfirmButton: false,
    toast: true
  })
}


export default alertBox;