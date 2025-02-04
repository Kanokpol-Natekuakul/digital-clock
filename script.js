function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');

    document.querySelector('.hour').textContent = hours;
    document.querySelector('.min').textContent = minutes;

    let days = document.querySelectorAll('.week div');
    days.forEach(day => day.classList.remove('active'));

    let today = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    days[today].classList.add('active');
}

setInterval(updateClock, 1000);
updateClock(); // อัปเดตทันทีตอนโหลดหน้า
