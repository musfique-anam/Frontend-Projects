function goToPage1() {
    window.location.href = "add.html"; 
}

function goToPage0() {
    window.location.href = "home.html"; 
}

function goToPage2() {
    window.location.href = "update.html"; 
}

function goToPage3() {
    window.location.href = "detail.html"; 
}

function deleteItem() {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            alert("Book deleted!");
        }
}

//  function editBook() {
//       alert("Edit book logic here.");
//     }
