//В этом подходе каждый новый проект будет идти как отдельный элемент. Это ок если таких обращений будет много?
const fifteen = document.getElementById('fifteen-js');
const fifteenGame = document.getElementById('fifteen-game');
const maze = document.getElementById('maze-js');
const mazeGame = document.getElementById('maze-game');
const budgety = document.getElementById('budgety-js');
const budgetyGame = document.getElementById('budgety-game');

const frames = document.getElementById('frames');

const preview = document.querySelector('.preview');
const previewTitle = document.querySelector('.preview__title--main');
const previewSub = document.querySelector('.preview__title--sub');

const carouselItem = document.querySelector('.carousel__list');

const projects = [fifteen, maze, budgety];
const projectsGame = [fifteenGame, mazeGame, budgetyGame];



projects.forEach(element => {
    element.addEventListener('click', (e) => {
        const currentClick = e.target.closest('li');

        projects.forEach(removeClass => {
            if (removeClass.closest('li').classList.contains('active')) {
                removeClass.closest('li').classList.toggle('active');
                projectsGame.forEach(elem => {
                    elem.style.display = 'none';
                })
            }
        });


        if (currentClick.id === 'fifteen-js') {
            onClick(fifteen, fifteenGame, currentClick);
        } else if (currentClick.id === 'maze-js') {
            onClick(maze, mazeGame, currentClick);
        } else if (currentClick.id === 'budgety-js') {
            onClick(budgety, budgetyGame, currentClick)
        }
    });
});


function onClick(game, nameGame, currentClick) {
    currentClick.classList.toggle('active');
    if (game.classList.contains('active')) {
        nameGame.style.display = 'block';
        preview.style.minHeight = '1000px';

        previewTitle.textContent = `${game.childNodes[1].childNodes[3].textContent}`;//Вариант как добраться до контента, что бы не писать новый querySelector
        previewSub.textContent = `${game.childNodes[5].textContent}`;
    } else {
        nameGame.style.display = "none";
        preview.style.minHeight = '200px';
    }
}


