new Chart(document.getElementById('pieChart'), {
type:'pie',
data:{
labels:['Warned','Blacklisted','Terminated'],
datasets:[{
data:[564,375,0],
backgroundColor:['#3498db','#ff6384','#f39c12']
}]
}
});


new Chart(document.getElementById('barChart'), {
type:'bar',
data:{
labels:['Splitting','Munching','Theft','Others'],
datasets:[{
label:'Cases',
data:[500,290,80,60]
}]
}
});


new Chart(document.getElementById('lineChart'), {
type:'line',
data:{
labels:['Jan','Feb','Mar','Apr','May','Jun'],
datasets:[{
label:'Cases',
data:[20,40,80,150,220,0]
}]
}
});
