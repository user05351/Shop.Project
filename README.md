# Модуль 25. Итоговое практическое задание.

## Нужно реализовать три задачи на основе текущего проекта Shop.Project:

<ol>
    <li>
        Добавить фичу «похожие товары». Эта доработка затронет:
        <ul>
            <li>Shop.API;</li>
            <li>Shop.Admin;</li>
            <li>Базу данных.</li>
        </ul>
    </li>
    <li>
        Реализовать функционал создания товара в админке. Эта доработка затронет:
        <ul>
            <li>Shop.API;</li>
            <li>Shop.Admin;</li>
        </ul></li>
    <li>Создать клиентское приложение Shop.Client на React. Можете использовать любое оформление и любые библиотеки для интерфейса.</li>
</ol>

## Создание Shop.Client

Вам нужно создать клиентское приложение на React.

У нас в проекте есть веб-сервер, который обрабатывает пути /api и /admin. Сервер отдаёт для этих путей соответствующие приложения.

Результат билда вашего React-приложения сервер должен отдавать по корневому пути проекта: http://localhost:3000.

Фактически сервер будет отдавать HTML-файл и встроенный в него JS-файл. В сумме это и является React-приложением.

### Требования к использованию библиотек

<ul>
    <li>React;</li>
    <li>TypeScript;</li>
    <li>Axios;</li>
    <li>React Router для реализации роутинга.</li>
</ul>

Можете использовать другие библиотеки на своё усмотрение.

Также вы можете использовать state-подход для хранения данных или задействовать Redux, React Context. Реализация с использованием стейт-менеджеров позволит вам получить дополнительные баллы по итогам проекта.

Для инициализации проекта вы можете использовать create-react-app или любой другой известный вам способ.

Для организации интерфейса вы также можете использовать любые библиотеки с UI-компонентами или наборы стилей.

Мы просим вас сосредоточиться на функционале приложения. Желательно, чтобы дизайн был аккуратным и минималистичным. Основной упор нужно сделать на реализации логики приложения.

Для всего описанного ниже функционала приложения у нас уже готовы API-методы и ресурсы в БД.

### Структура приложения

Мы предлагаем вам реализовать SPA-приложение с роутингом.

Переход на какую-либо страницу не должен быть заблокирован ожиданием ответов на сетевые запросы. Используйте лоадеры для обозначения ожидания загрузки данных.

#### Роутинг приложения:

<ul>
    <li>Главная страница (“/”);</li>
    <li>Список товаров (“/products-list”);</li>
    <li>Страница с описанием товара (“/:id”).</li>
</ul>

#### Главная страница приложения содержит:

<ul>
    <li>Заголовок “Shop.Client”;</li>
    <li>Текст: «В базе данных находится n товаров общей стоимостью m», где «n» — общее количество товаров в базе, а «m» – их суммарная стоимость.</li>
    <li>Кнопка «Перейти к списку товаров». При нажатии осуществляется переход внутри SPA по адресу /products-list.</li>
    <li>* Кнопка «Перейти в систему администрирования».</li>
</ul>

При нажатии осуществляется переход на /admin в новой вкладке браузера.

#### Страница с перечнем товаров содержит:

<ol>
    <li>
        Заголовок «Список товаров (n)», где «n» — общее количество товаров;
    </li>
    <li>
        Список товаров, где каждый товар представлен в виде:
        <ul>
            <li>Заголовка;</li>
            <li>Изображения-обложки либо изображения-заглушки;</li>
            <li>Стоимости;</li>
            <li>Количества комментариев к товару.</li>
        </ul>
    </li>
    <li>* Фильтр для поиска товаров по названию и стоимости «от»-«до».</li>
</ol>

При нажатии на заголовок товара или его изображение осуществляется переход на страницу с подробным описанием товара.

#### Страница с подробным описанием товара содержит:

<ol>
    <li>Название товара в виде заголовка;</li>
    <li>Изображение-обложку (либо заглушка);</li>
    <li>Список остальных изображений (если есть);</li>
    <li>Описание;</li>
    <li>Стоимость;</li>
    <li>
        Список похожих товаров, где каждый товар представлен в виде:
        <ul>
            <li>названия товара;</li>
            <li>стоимости.</li>
        </ul>
        <p>При клике по названию похожего товара должен осуществляться переход на страницу с его подробным описанием.</p>
    </li>
    <li>
        Список комментариев, где каждый комментарий представлен в виде:
        <ul>
            <li>заголовка;</li>
            <li>E-mail;</li>
            <li>текста комментария.</li>
        </ul>
    </li>
    <li>
        * Форма добавления комментария с полями и кнопкой «Сохранить»:
        <ul>
            <li>заголовок;</li>
            <li>E-mail;</li>
            <li>текст комментария.</li>
        </ul>
        <p>При нажатии на «Сохранить» комментарий сохраняется в базу данных через API. И затем выводится на этой странице среди прочих комментариев.</p>
    </li>
</ol>

<strong>* выделенный функционал не обязателен. Но при его реализации вы получите дополнительные баллы.</strong>

##### Запуск приложения

nodemon: Shop.Admin - http://localhost:3000/admin; Shop.API - http://localhost:3000/api  
yarn dev: Shop.Client - http://localhost:5173/
