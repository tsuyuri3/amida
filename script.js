document.getElementById('startButton').addEventListener('click', drawAmida);

function drawAmida() {
    const amida = document.getElementById('amida');
    amida.innerHTML = ''; // 以前の内容をクリア

    const rows = 10; // 行数
    const columns = 5; // 列数

    // 縦線を描く
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            const verticalLine = document.createElement('div');
            verticalLine.classList.add('vertical-line');
            amida.appendChild(verticalLine);
        }
    }

    // 横線を描く（ランダムに配置）
    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < columns - 1; j++) {
            if (Math.random() > 0.5) {
                const horizontalLine = document.createElement('div');
                horizontalLine.classList.add('line');
                amida.appendChild(horizontalLine);
            } else {
                // 空白を埋めるために透明なdivを追加
                const emptyDiv = document.createElement('div');
                emptyDiv.style.width = '100px';
                amida.appendChild(emptyDiv);
            }
        }
    }
}
