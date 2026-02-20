
   function showForm(id) {
        document.querySelectorAll('.form-box').forEach((form) => {
       form.classList.add('hidden');
     });
     document.getElementById(id).classList.remove('hidden');
   }

