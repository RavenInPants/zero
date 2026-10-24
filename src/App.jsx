import { useState } from "react";

const scenes = [
  ["01", "Лабораторная запись", "Камера «Ориона» фиксирует первое появление существа, которое герои называют «Оно»."],
  ["02", "Ссора на вокзале", "Вера подозревает, что Артём — это «Оно», но всё же садится с ним в ночной экспресс."],
  ["03", "Тихий вагон", "Во время короткой передышки Вера и Артём почти говорят о том, что всё ещё важны друг другу."],
  ["04", "Погоня по поезду", "«Оно» заманивает Веру голосом Артёма; герои бегут через вагоны и технический отсек."],
  ["05", "Признание Лики", "Лика рассказывает о прежней связи с «Орионом» и помогает героям найти путь к публикации данных."],
  ["06", "Крыша башни", "Вера публикует данные, пока «Оно» пытается занять место Артёма."],
];

const people = [
  ["Вера", "Журналистка-расследовательница. Везёт доказательства экспериментов «Ориона» и ищет способ опубликовать их."],
  ["Артём", "Бывший сотрудник службы безопасности «Ориона» и бывший возлюбленный Веры. Помогает ей в ночном экспрессе."],
  ["Лика", "Старшая проводница с прошлым в «Орионе». Сначала вызывает подозрения, затем становится союзницей Веры."],
];

const crew = [
  ["В кадре", "Исполнительница роли Веры", "Исполнитель роли Артёма", "Исполнительница роли Лики"],
  ["За кадром", "Режиссёр", "Сценарист", "Оператор", "Костюмер", "Звукорежиссёр", "Продюсер"],
];

const productionNotes = [
  ["Свет", "Холодный синий свет вагонов, тёмные окна и редкие красные сигналы задают визуальный ритм ночного маршрута."],
  ["Костюмы", "Тёмное пальто Веры, выцветшая куртка Артёма и форменная одежда Лики помогают различать героев в ночных сценах."],
  ["Звук", "Гул рельсов, приглушённые объявления, дождь и голоса по рации создают ощущение пути, которому нельзя до конца доверять."],
];

const posters = [
  {
    src: "/assets/three-passengers.png",
    alt: "Вера, Артём и Лика на ночной платформе",
    number: "Кадр 12",
    title: "До отправления",
  },
  {
    src: "/assets/lika-portrait.png",
    alt: "Лика в коридоре ночного поезда",
    number: "Кадр 27",
    title: "Лика",
  },
  {
    src: "/assets/quiet-carriage.png",
    alt: "Вера и Артём у окна вагона",
    number: "Кадр 43",
    title: "Тихий вагон",
  },
  {
    src: "/assets/orion-tower.png",
    alt: "Вера и Артём у поезда на фоне башни Ориона",
    number: "Кадр 61",
    title: "Последний маршрут",
  },
];

const archiveFiles = [
  {
    id: "poster-grade",
    name: "Постер: комментарии к цветокоррекции",
    type: "Визуальная заметка",
    date: "16 апреля",
    author: "Арт-дирекция",
    summary: "Палитра ключевого изображения для печати и цифровых носителей.",
    body: "Сохранить холодную синюю палитру и матовую плотность теней. Яркие акценты не усиливать: единственный цветовой сигнал должен оставаться приглушённым и работать только вблизи.",
  },
  {
    id: "camera-b",
    name: "Камера B: тест влагозащиты",
    type: "Техотчёт",
    date: "09 апреля",
    author: "Операторская группа",
    summary: "Проверка корпуса камеры и защиты от дождя перед ночной сменой.",
    body: "Корпус камеры, питание и основной объектив прошли тест с влагозащитным чехлом. Перед выходом на платформу повторно проверить герметизацию разъёма питания и сухость запасного объектива.",
  },
  {
    id: "trailer-03",
    name: "Трейлер: правки к версии 03",
    type: "Комментарий к монтажу",
    date: "14 апреля",
    author: "Отдел промо",
    summary: "Ритм финального блока и длительность титров.",
    body: "Сохранить паузу перед финальным титром. Общую длительность титров сократить до 4,5 секунд; музыкальный переход оставить без дополнительных звуковых акцентов.",
  },
  {
    id: "door-log",
    order: 2,
    name: "Архивный файл 2: журнал доступа в кабинет Режиссёра",
    type: "Системный лог",
    date: "25 октября 2026",
    author: "Система умного дома",
    summary: "Журнал доступа",
    log: [
      ["09:14", "Вход в кабинет", "03"],
      ["10:06", "Выход из кабинета", "03"],
      ["12:48", "Вход в кабинет", "03"],
      ["14:21", "Выход из кабинета", "03"],
      ["16:23", "Вход в кабинет", "01"],
      ["17:23", "Выход из кабинета", "01"],
      ["17:36", "Вход в кабинет", "03"],
      ["18:12", "Выход из кабинета", "03"],
      ["19:55", "Вход в кабинет", "04"],
      ["20:02", "Выход из кабинета", "04"],
    ],
  },
  {
    id: "catering",
    name: "Кейтеринг: ночной стол для команды",
    type: "Организационная заявка",
    date: "11 апреля",
    author: "Координатор площадки",
    summary: "Питание и напитки для ночной смены.",
    body: "Подтвердить 34 горячие порции, 20 вегетарианских перекусов, чай и кофе. Доставка к техническому входу запланирована после подготовки площадки; одноразовую посуду не использовать.",
  },
  {
    id: "press-kit",
    name: "Пресс-кит: экспорт кадров для редакции",
    type: "Медиалист",
    date: "15 апреля",
    author: "PR и промо",
    summary: "Форматы и срок передачи кадров для редакционных материалов.",
    body: "Подготовить восемь кадров в форматах 4:5 и 16:9. Экспорт — PNG, короткая сторона не менее 2160 px. Передать в редакцию до 18:00 вместе с обновлёнными подписями.",
  },
  {
    id: "casting",
    order: 1,
    name: "Архивный файл 1: служебная заметка Продюсера",
    type: "Служебная заметка",
    date: "05 апреля",
    author: "Продюсер",
    summary: "Предварительные договорённости по роли Веры. Только для Режиссёра.",
    body: "Ты снова даёшь людям устные гарантии, а потом просишь меня объяснять последствия. По роли Веры вопрос должен быть закрыт до пятницы. Если не готов говорить с актрисой сам, не называй это «предварительным соглашением».",
  },
  {
    id: "makeup",
    name: "Грим: сверка непрерывности ночных сцен",
    type: "Рабочий лист",
    date: "10 апреля",
    author: "Грим",
    summary: "Состояние костюмов и грима между сценами ночного маршрута.",
    body: "Сохранить влажный эффект волос во всех сценах после посадки. На верхней одежде — равномерные следы дождя без свежих подтёков. Перед каждым дублем сверять воротники и манжеты с предыдущим кадром.",
  },
  {
    id: "edit-9",
    order: 3,
    name: "Архивный файл 3: заметка о монтаже",
    type: "Монтажная пометка",
    date: "12 апреля",
    author: "Монтажная группа",
    summary: "Версия 9: сокращение сцены признания Лики.",
    body: "Монтаж, версия 9. Сцена признания Лики сокращена на 01:46. Причина: темп второй половины фильма. Комментарий Режиссёра: «Не превращать это в личный разговор с актрисой до премьеры».",
  },
  {
    id: "night-shifts",
    name: "Ночные смены: итог по съёмочной неделе",
    type: "Производственная таблица",
    date: "15 апреля",
    author: "Первый ассистент режиссёра",
    summary: "Даты, время работы и загрузка команды.",
    shifts: [
      ["10.04", "12:00–02:00", "Полная смена"],
      ["11.04", "14:00–01:30", "Сокращённая смена"],
      ["12.04", "16:00–03:00", "Ночная смена"],
    ],
  },
  {
    id: "sound-map",
    name: "Переозвучание: карта шумов платформы",
    type: "Звуковая заметка",
    date: "17 апреля",
    author: "Звук",
    summary: "Фоновые шумы платформы и ночного вагона.",
    body: "Собрать отдельные слои: тормоза поезда, объявление станции, шаги в вагоне и дождь по стеклу. Шум платформы оставить мягким в диалогах, в переходах между сценами — немного усилить низкие частоты.",
  },
];

const archiveMonths = {
  января: 0,
  февраля: 1,
  марта: 2,
  апреля: 3,
  мая: 4,
  июня: 5,
  июля: 6,
  августа: 7,
  сентября: 8,
  октября: 9,
  ноября: 10,
  декабря: 11,
};

const archiveDateTimestamp = (date) => {
  const match = date.match(/^(\d{1,2})\s+(\S+)(?:\s+(\d{4}))?$/);
  if (!match) return 0;

  const [, day, month, year = "2026"] = match;
  return Date.UTC(Number(year), archiveMonths[month] ?? 0, Number(day));
};

const displayedArchiveFiles = [...archiveFiles].sort((a, b) =>
  archiveDateTimestamp(b.date) - archiveDateTimestamp(a.date) || a.name.localeCompare(b.name, "ru"),
);

export function App() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [code, setCode] = useState("");
  const [archiveGranted, setArchiveGranted] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedArchiveFile, setSelectedArchiveFile] = useState(null);
  const [activePoster, setActivePoster] = useState(0);

  const currentPoster = posters[activePoster];
  const activeArchiveFile = archiveFiles.find((file) => file.id === selectedArchiveFile);

  const openArchive = () => setArchiveOpen(true);
  const closeArchive = () => {
    setArchiveOpen(false);
    setSelectedArchiveFile(null);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const unlockArchive = (event) => {
    event.preventDefault();
    if (code.trim().toLowerCase() === "orion") {
      setArchiveGranted(true);
      setMessage("");
      setSelectedArchiveFile(null);
      return;
    }
    setMessage("Код не подтверждён. Дождитесь сигнала режиссёра.");
  };

  const showPoster = (direction) => {
    setActivePoster((current) => (current + direction + posters.length) % posters.length);
  };

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shadow" aria-hidden="true" />

        <header className="topbar" aria-label="Основная навигация">
          <button className="studio" onClick={() => scrollTo("top")}>ORION <span>PICTURES</span></button>
          <nav>
            <button onClick={() => scrollTo("film")}>О фильме</button>
            <button onClick={() => scrollTo("materials")}>Материалы</button>
            <button onClick={() => scrollTo("characters")}>Герои</button>
            <button onClick={() => scrollTo("crew")}>Команда</button>
          </nav>
          <button className="archive-nav" onClick={openArchive}>
            Служебный вход
          </button>
        </header>

        <div className="hero-copy">
          <p className="eyebrow">Фантастический детективный триллер</p>
          <h1>Нулевой<br /><span>пассажир</span></h1>
          <p className="hero-logline">
            Одна ночь, один маршрут и город за тёмным стеклом.
          </p>
          <button className="primary-action" onClick={() => scrollTo("materials")}>
            Открыть материалы фильма
          </button>
          <button className="archive-status" onClick={openArchive}>
            Служебный вход <span>Orion Pictures</span>
          </button>
        </div>

      </section>

      <section className="film section" id="film">
        <div className="film-copy">
          <p className="overline">Закрытый показ · 25 октября 2026</p>
          <h2>Оно уже знает<br />твой голос.</h2>
          <p>
            Журналистка Вера получает доказательства того, что корпорация «Орион» создала существо, способное принимать человеческий облик. Она садится в ночной экспресс вместе с бывшим возлюбленным Артёмом, но «Оно» уже среди пассажиров.
          </p>
        </div>
        <dl className="film-meta">
          <div><dt>Жанр</dt><dd>фантастический детективный триллер с романтической линией</dd></div>
          <div><dt>Продолжительность</dt><dd>118 минут</dd></div>
          <div><dt>Производство</dt><dd>Orion Pictures</dd></div>
        </dl>
      </section>

      <section className="materials section" id="materials">
        <div className="materials-heading">
          <h2>Шесть сцен одной ночи</h2>
          <p>Эти эпизоды составляют общую историю «Нулевого пассажира» — от лабораторной записи до финала на крыше башни.</p>
        </div>
        <div className="scene-list">
          {scenes.map(([number, title, text]) => (
            <article className="scene" key={number}>
              <p>{number}</p>
              <h3>{title}</h3>
              <span>{text}</span>
            </article>
          ))}
        </div>
        <div className="poster-carousel" aria-roledescription="carousel" aria-label="Кадры из фильма">
          <figure className="poster-stage">
            <img src={currentPoster.src} alt={currentPoster.alt} />
          </figure>
          <div className="poster-caption" aria-live="polite">
            <span>{currentPoster.number}</span>
            <strong>{currentPoster.title}</strong>
            <span>{String(activePoster + 1).padStart(2, "0")} / {String(posters.length).padStart(2, "0")}</span>
          </div>
          <div className="poster-controls">
            <button onClick={() => showPoster(-1)}>Предыдущий кадр</button>
            <div className="poster-dots" aria-label="Выбор кадра">
              {posters.map((poster, index) => (
                <button
                  aria-label={`${poster.number}: ${poster.title}`}
                  aria-pressed={activePoster === index}
                  className={activePoster === index ? "is-active" : ""}
                  key={poster.number}
                  onClick={() => setActivePoster(index)}
                />
              ))}
            </div>
            <button onClick={() => showPoster(1)}>Следующий кадр</button>
          </div>
        </div>
      </section>

      <section className="characters section" id="characters">
        <div className="characters-heading">
          <h2>У каждого — своя версия ночи.</h2>
          <p>Три человека, пересёкшиеся в одном ночном маршруте.</p>
        </div>
        <div className="people-list">
          {people.map(([name, text]) => (
            <article className="person" key={name}>
              <h3>{name}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="crew section" id="crew">
        <div className="section-heading">
          <p className="overline">Команда фильма</p>
          <h2>Люди по обе стороны камеры.</h2>
        </div>
        <div className="crew-groups">
          {crew.map(([group, ...roles]) => (
            <div className="crew-group" key={group}>
              <h3>{group}</h3>
              <ul>{roles.map((role) => <li key={role}>{role}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="production section" id="production">
        <div className="section-heading">
          <p className="overline">Со съёмок</p>
          <h2>Детали ночного маршрута.</h2>
          <p>Несколько заметок о визуальном и звуковом языке фильма.</p>
        </div>
        <div className="production-notes">
          {productionNotes.map(([title, text], index) => (
            <article className="production-note" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Нулевой пассажир</p>
        <button onClick={() => scrollTo("top")}>Наверх</button>
      </footer>

      {archiveOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeArchive}>
          <section className="archive-modal" role="dialog" aria-modal="true" aria-labelledby="archive-title" onMouseDown={(event) => event.stopPropagation()}>
            <header className="portal-header">
              <div>
                <p className="portal-brand">ORION PICTURES <span>PRODUCTION PORTAL</span></p>
                <p className="portal-project">Нулевой пассажир · производство</p>
              </div>
              <button className="close-button" aria-label="Закрыть портал" onClick={closeArchive}>Закрыть</button>
            </header>
            {archiveGranted ? (
              activeArchiveFile ? (
                <section className="file-view" aria-labelledby="archive-title">
                  <button className="archive-back" onClick={() => setSelectedArchiveFile(null)}>← Все файлы</button>
                  <p className="portal-eyebrow">{activeArchiveFile.type} · {activeArchiveFile.date}</p>
                  <h2 id="archive-title">{activeArchiveFile.name}</h2>
                  <dl className="file-view-meta">
                    <div><dt>Проект</dt><dd>Нулевой пассажир</dd></div>
                    <div><dt>Отдел</dt><dd>{activeArchiveFile.author}</dd></div>
                    <div><dt>Статус</dt><dd>Внутреннее использование</dd></div>
                  </dl>
                  <div className="file-view-body">
                    {activeArchiveFile.log ? (
                      <div className="portal-log" role="table" aria-label="События журнала двери кабинета">
                        <div className="portal-log-head" role="row"><span role="columnheader">Время</span><span role="columnheader">Событие</span><span role="columnheader">Идентификатор</span></div>
                        {activeArchiveFile.log.map(([time, event, code]) => (
                          <div className="portal-log-row" key={time} role="row"><span role="cell">{time}</span><span role="cell">{event}</span><span role="cell">{code}</span></div>
                        ))}
                      </div>
                    ) : activeArchiveFile.shifts ? (
                      <div className="portal-log" role="table" aria-label="Итог ночных смен">
                        <div className="portal-log-head" role="row"><span role="columnheader">Дата</span><span role="columnheader">Время</span><span role="columnheader">Нагрузка</span></div>
                        {activeArchiveFile.shifts.map(([date, time, load]) => (
                          <div className="portal-log-row" key={date} role="row"><span role="cell">{date}</span><span role="cell">{time}</span><span role="cell">{load}</span></div>
                        ))}
                      </div>
                    ) : (
                      <p>{activeArchiveFile.body}</p>
                    )}
                  </div>
                </section>
              ) : (
                <section className="file-browser" aria-labelledby="archive-title">
                  <div className="file-browser-title">
                    <div><p className="portal-eyebrow">Внутренний раздел</p><h2 id="archive-title">Рабочий архив</h2></div>
                    <p>{archiveFiles.length} файлов · доступ подтверждён</p>
                  </div>
                  <blockquote className="archive-intro">
                    <p>Если вы читаете это сообщение, значит, я не смог остановить то, что началось ещё на кастинге. Сравните обещания, документы и то, кто солгал о своём месте в нужный момент.</p>
                    <cite>— Режиссёр</cite>
                  </blockquote>
                  <div className="file-table" role="list" aria-label="Файлы рабочего архива">
                    <div className="file-table-head" aria-hidden="true"><span>Название</span><span>Тип</span><span>Дата</span><span>Отдел</span><span>Описание</span><span /></div>
                    {displayedArchiveFiles.map((file) => (
                      <article className="file-row" key={file.id} role="listitem">
                        <h3>{file.name}</h3>
                        <p className="file-type">{file.type}</p>
                        <p className="file-date">{file.date}</p>
                        <p className="file-author">{file.author}</p>
                        <p className="file-summary">{file.summary}</p>
                        <p className="file-mobile-meta">{file.type} · {file.date} · {file.author}</p>
                        <button className="file-open-button" onClick={() => setSelectedArchiveFile(file.id)}>Открыть</button>
                      </article>
                    ))}
                  </div>
                </section>
              )
            ) : (
              <form onSubmit={unlockArchive}>
                <h2 id="archive-title">Служебный вход</h2>
                <p className="portal-login-copy">Введите код доступа, выданный координатором показа.</p>
                <label htmlFor="archive-code">Код доступа</label>
                <input
                  id="archive-code"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  placeholder="Введите код"
                  autoComplete="off"
                />
                <button className="portal-submit" type="submit">Войти в портал</button>
                {message && <p className="form-message" aria-live="polite">{message}</p>}
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
