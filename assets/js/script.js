// Function to calculate discount and update total
function calculateTotal() {
  // Get values from form fields
  const ticketPrice = parseFloat(
    document.getElementById("ticketPrice").value.replace(/,/g, "")
  );
  const quantity = parseInt(document.getElementById("quantity").value, 10);
  const isMember = document.getElementById("member").checked;

  // Calculate discount (10% if member, 0% otherwise)
  const discount = isMember ? 0.1 : 0;

  // Update discount field
  document.getElementById("discount").value = (discount * 100).toFixed(2) + "%";

  // Calculate total after discount
  const total = (ticketPrice * quantity * (1 - discount)).toFixed(2);

  // Update total field
  document.getElementById("total").value = total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Attach the calculateTotal function to the quantity field change event
document.getElementById("quantity").addEventListener("input", calculateTotal);

// Attach the calculateTotal function to the checkbox click event
document.getElementById("member").addEventListener("change", calculateTotal);
