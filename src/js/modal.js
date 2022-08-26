(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    if (!!refs.openModalBtn) {
      refs.openModalBtn.addEventListener("click", toggleModal);
    }
    if (!!refs.openModalBtn) {
      refs.closeModalBtn.addEventListener("click", toggleModal);
    }
  
    function toggleModal() {
      if (!!refs.modal) {
        refs.modal.classList.toggle("backdrop--is-hidden");
        document.body.classList.toggle('no-scroll');
      }
    }
  })();