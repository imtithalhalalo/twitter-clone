const month_box = document.getElementById('month_box')
const days_box = document.getElementById('days_box')
const years_box = document.getElementById('years_box')

//months dropdown
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for (let i of month){
    month_box.options.add(new Option(i))
}

//days dropdown
for (let i = 1; i <= 31; i++){
    days_box.options.add(new Option(i))
} 

//years dropdown
for (let i = 2022; i >= 1902 ; i--){
    years_box.options.add(new Option(i))
} 