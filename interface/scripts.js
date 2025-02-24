
// function showDetails(machineid) {
//     alert(`Details for ${machineid}`);
//   }

//   function showMachineDetails(machineid) {

//     // 1. Find machine data from machineLocations
//     const selectedMachine = machineLocations.find(machine => machine.id === machineid);
    
//     // // 2. Find additional data from machineData
//     const additionalData = machineData.find(data => data.id === machineid);

//     // 3. Update modal title
//     document.getElementById('lineModalLabel').textContent = `Detail ${selectedMachine.id}`;

//     // 4. Update rating and stars
//     document.getElementById('avgRating').textContent = selectedMachine.rating;
//     document.getElementById('totalReviews').textContent = `(${additionalData?.totalReviews || 0} Temuan)`;

//     // 5. Update progress bars
//     if(additionalData) {
//         updateProgressBars([
//             additionalData.ratings[5] || 0,
//             additionalData.ratings[4] || 0,
//             additionalData.ratings[3] || 0,
//             additionalData.ratings[2] || 0,
//             additionalData.ratings[1] || 0
//         ]);
        
//         // 6. Update pie chart
//         updateChart([
//             additionalData.condition.good,
//             additionalData.condition.fair,
//             additionalData.condition.repair
//         ]);
//     }

//     // 7. Show modal
//     new bootstrap.Modal(document.getElementById('detailModal')).show();
// }

// function updateProgressBars(percentages) {
//   const total = percentages.reduce((a, b) => a + b, 0);
  
//   document.getElementById('rating5').style.width = `${(percentages[0]/total)*100}%`;
//   document.getElementById('rating4').style.width = `${(percentages[1]/total)*100}%`;
//   document.getElementById('rating3').style.width = `${(percentages[2]/total)*100}%`;
//   document.getElementById('rating2').style.width = `${(percentages[3]/total)*100}%`;
//   document.getElementById('rating1').style.width = `${(percentages[4]/total)*100}%`;
// }

// // Chart instance and update function
// let myChart = null;
// function updateChart(data) {
//   const ctx = document.getElementById('lineChart').getContext('2d');
  
//   if(myChart) {
//       myChart.destroy();
//   }
  
//   myChart = new Chart(ctx, {
//       type: 'pie',
//       data: {
//           labels: ['Baik', 'Cukup', 'Perlu Perbaikan'],
//           datasets: [{
//               data: data,
//               backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false
//       }
//   });
// }

// // Function to switch tabs
// function switchTab(tabName) {
//   console.log(`Switch ke tab ${tabName}`);
// }

// // Event listeners for tab buttons
// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('infoBtn')?.addEventListener('click', () => switchTab('info'));
//   document.getElementById('photoBtn')?.addEventListener('click', () => switchTab('photo'));
//   document.getElementById('reviewBtn')?.addEventListener('click', () => switchTab('review'));
// });