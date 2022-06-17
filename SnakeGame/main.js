let scoreBlock; //отображение на странице очков
let score = 0; //очки внутри игры

const config = {
	step: 0,//пропуска игрового цикла
	maxStep: 6,//и ето
	sizeCell: 16,//размер одной ячейки
	sizeBerry: 16 / 4//размер ягоды для змейки
}

const snake = {
	x: 160,//координата х
	y: 160,//координата у
	dx: config.sizeCell,//скорость по горизонтали
	dy: 0,//скорость по вертикали 
	tails: [],//массив ячеек под контролем змеи
	maxTails: 3 //кол-во ячеек
}

let berry = {//координаты ягоды
	x: 0,
	y: 0
} 


let canvas = document.querySelector("#game-canvas");//get Canvas
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");
drawScore();

function gameLoop() {//игровой цикл

	requestAnimationFrame( gameLoop );//бесконечный цикл штоле
	if ( ++config.step < config.maxStep) {//контроль скорости отрисовки на экране
		return;
	}
	config.step = 0;

	context.clearRect(0, 0, canvas.width, canvas.height);//очистка канваса

	drawBerry();//новая отрисовка кадра
	drawSnake();//и ето
}
requestAnimationFrame( gameLoop );//запуск игрового цикла

function drawSnake() {
	snake.x += snake.dx;//меняем координаты змейки согласно скорости
	snake.y += snake.dy;

	collisionBorder();

	// todo бордер
	snake.tails.unshift( { x: snake.x, y: snake.y } );//добавляет вначало массива объект с х и у координатами

    if ( snake.tails.length > snake.maxTails ) { //если кол-во дочерних объектов больше чем разрешено то удаляем последний элемент
		snake.tails.pop();
	}

	snake.tails.forEach( function(el, index){
		if (index == 0) {
			context.fillStyle = "#FA0556";//голова змеи ярко-красный
		} else {
			context.fillStyle = "#A00034";//остальные элементы потусклее
		}
		context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell ); //отрисовываем каждый элемент змейки


		if ( el.x === berry.x && el.y === berry.y ) {//проверяем координаты ягоды и змейки если совпадают то увеличиваем
			snake.maxTails++;
			incScore();
			randomPositionBerry();//создаем новую ягоду
		}

		for( let i = index + 1; i < snake.tails.length; i++ ) {//проверяем соприкосновение змейки с другими своими ячейками

			if ( el.x == snake.tails[i].x && el.y == snake.tails[i].y ) {
				refreshGame();
			}

		}

	} );
}

function collisionBorder() { //отрисовка на другой стороны если ушла за границу карты
	if (snake.x < 0) {
		snake.x = canvas.width - config.sizeCell;
	} else if ( snake.x >= canvas.width ) {
		snake.x = 0;
	}

	if (snake.y < 0) {
		snake.y = canvas.height - config.sizeCell;
	} else if ( snake.y >= canvas.height ) {
		snake.y = 0;
	}
}
function refreshGame() {
	score = 0;
	drawScore();

	snake.x = 160;
	snake.y = 160;
	snake.tails = [];
	snake.maxTails = 3;
	snake.dx = config.sizeCell;
	snake.dy = 0;
    //обнуление значение при перезапуске игры
	randomPositionBerry();
}

function drawBerry() {//отрисовка ягоды
	context.beginPath();
	context.fillStyle = "#A00034";
	context.arc( berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2 ), config.sizeBerry, 0, 2 * Math.PI ); //рисуем окружность на основе координат ягоды
	context.fill();
}

function randomPositionBerry() {//рандомная позиция для ягоды
	berry.x = getRandomInt( 0, canvas.width / config.sizeCell ) * config.sizeCell;
	berry.y = getRandomInt( 0, canvas.height / config.sizeCell ) * config.sizeCell;
}

function incScore() {//увеличение рекорда
	score++;
	drawScore();
}

function drawScore() { //отображение рекорда
	scoreBlock.innerHTML = score;
}

function getRandomInt(min, max) {//рандомное значение в заданном диапазоне
	return Math.floor( Math.random() * (max - min) + min );
}


document.addEventListener("keydown", function (e) { //проверка нажатой клавиши и изменение направления
	if ( e.code == "KeyW" ) {
		snake.dy = -config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "KeyA" ) {
		snake.dx = -config.sizeCell;
		snake.dy = 0;
	} else if ( e.code == "KeyS" ) {
		snake.dy = config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "KeyD" ) {
		snake.dx = config.sizeCell;
		snake.dy = 0;
	}
});

