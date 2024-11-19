function IsNight() {
    let Hours = new Date().getUTCHours();
    
    let TimeOfDay = (Hours >= 2 && Hours < 7) ? 'День' :
            (Hours >= 7 && Hours < 12) ? 'Вечер' :
            (Hours >= 12 && Hours < 21) ? 'У меня ночь, режим \'не беспокоить\'' :
            'Утро';
            
    var el = document.getElementById('night');
    el.innerText = TimeOfDay;
}