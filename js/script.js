// Search functionality
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm) {
    // Simulate search - in real implementation, you'd handle the search logic here
    alert(`Searching for: "${searchTerm}"`);
    // You could redirect to search results page or filter content
    // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
  }
}

// Allow search on Enter key press
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

/* 
******* DO NOT DELETE *********
******* DO NOT DELETE *********
******* DO NOT DELETE *********
*/
// Handle dropdown menu clicks
// document.querySelectorAll('.dropdown-item').forEach(item => {
//   item.addEventListener('click', function(e) {
//     e.preventDefault();
//     const action = this.getAttribute('href').substring(1);
    
//     // Handle different menu actions
//     switch(action) {
//       case 'logout':
//         if (confirm('Are you sure you want to logout?')) {
//           alert('Logging out...');
//         }
//         break;
//       case 'profile':
//         alert('Opening profile page...');
//         break;
//       case 'settings':
//         alert('Opening settings...');
//         break;
//       case 'dashboard':
//         alert('Opening dashboard...');
//         break;
//       case 'help':
//         alert('Opening help & support...');
//         break;
//       case 'notifications':
//         alert('Opening notifications...');
//         break;
//       default:
//         alert(`Navigating to ${action}...`);
//     }
//   });
// });