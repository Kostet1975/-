document.addEventListener('DOMContentLoaded', function() {
  var startBtn = document.getElementById('startBtn');
  var nextBtn1 = document.getElementById('nextBtn1');
  var step1 = document.getElementById('step1');
  var step2 = document.getElementById('step2');
  var step3 = document.getElementById('step3');

  // При нажатии на кнопку "Начать" скрываем первый блок и показываем второй
  startBtn.addEventListener('click', function() {
    step1.classList.add('hidden');
    step2.classList.remove('hidden');
  });

  // При нажатии на кнопку "Далее" скрываем второй блок и показываем третий
  nextBtn1.addEventListener('click', function() {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
  });
 var playButtons = document.querySelectorAll('.playBtn');
  playButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Определяем родительскую строку, откуда берем источник
      var row = btn.closest('tr');
      var songSrc = row.getAttribute('data-src');
      // Обновляем источник аудио и запускаем воспроизведение
      audioSource.src = songSrc;
      musicPlayer.load();
      musicPlayer.play();
    });
  });
});
