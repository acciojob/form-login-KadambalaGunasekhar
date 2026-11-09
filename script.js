function getFormvalue() {
    //Write your code here
	event.preventDefault();

    let fname = document.querySelector('[name="fname"]').value;

    let lname = document.querySelector('[name="lname"]').value;

    alert(fname + " " + lname);
}
