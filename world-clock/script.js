const citySelector = document.getElementById('city-selector');
const clockDisplay = document.getElementById('clock-display');
const dateDisplay = document.getElementById('date-display');
const cityNameLabel = document.getElementById('city-name');

function updateClock() {
    const timezone = citySelector.value;
    const now = new Date();

    // 時刻の取得
    const timeString = now.toLocaleTimeString('ja-JP', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // 日付の取得
    const dateString = now.toLocaleDateString('ja-JP', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '.');

    // 表示の更新
    clockDisplay.textContent = timeString;
    dateDisplay.textContent = dateString;
    
    // 都市名のラベル更新（Asia/Tokyo -> TOKYO）
    const selectedText = citySelector.options[citySelector.selectedIndex].text;
    cityNameLabel.textContent = selectedText.split(' ')[0];
}

// 選択が変わった瞬間に更新
citySelector.addEventListener('change', updateClock);

// 1秒ごとに実行
setInterval(updateClock, 1000);

// 初回実行
updateClock();
