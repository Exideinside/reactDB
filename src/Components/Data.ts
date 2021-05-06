var id = 0;

interface Data {
  id: number;
  Surname: string;
  First_name: string;
  Middle_name: string;
  Phone: string;
  Experience: number;
  Age: number;
}

const dataEmployee: Data[] = [
    { id: ++id, Surname: 'Черныха', First_name: 'Кристина', Middle_name: 'Петровна', Phone: '2939208920', Experience: 12, Age: 53},
    { id: ++id, Surname: 'Погребняка', First_name: 'Ярослава', Middle_name: 'Семеновна', Phone: '4488640890', Experience: 25, Age: 65},
    { id: ++id, Surname: 'Варфоломеев', First_name: 'Роман', Middle_name: 'Кириллович', Phone: '8014776502', Experience: 8, Age: 37},
    { id: ++id, Surname: 'Моренова', First_name: 'Евдокия', Middle_name: 'Борисовна', Phone: '4350565875', Experience: 14, Age: 51},
    { id: ++id, Surname: 'Киселев', First_name: 'Эрнст', Middle_name: 'Эмилевич', Phone: '7900870319', Experience: 18, Age: 46},
    { id: ++id, Surname: 'Цаплина', First_name: 'Арина', Middle_name: 'Борисовна', Phone: '2410160325', Experience: 26, Age: 69},
    { id: ++id, Surname: 'Карасёва', First_name: 'Галина', Middle_name: 'Карповна', Phone: '7523011608', Experience: 5, Age: 29},
    { id: ++id, Surname: 'Славаков', First_name: 'Тарас', Middle_name: 'Пахомович', Phone: '2258381858', Experience: 12, Age: 36},
    { id: ++id, Surname: 'Муратов', First_name: 'Марк', Middle_name: 'Елизарович', Phone: '8259319270', Experience: 16, Age: 46},
    { id: ++id, Surname: 'Басманова', First_name: 'Татьяна', Middle_name: 'Евгениевна', Phone: '9158244193', Experience: 21, Age: 55},
    { id: ++id, Surname: 'Терёшина', First_name: 'Людмила', Middle_name: 'Ефимовна', Phone: '3872525590', Experience: 12, Age: 43},
    { id: ++id, Surname: 'Крутов', First_name: 'Федор', Middle_name: 'Святославович', Phone: '7014648544', Experience: 4, Age: 28},
    { id: ++id, Surname: 'Воронов', First_name: 'Егор', Middle_name: 'Артёмович', Phone: '7919404598', Experience: 13, Age: 43},
    { id: ++id, Surname: 'Богданова', First_name: 'Кристина', Middle_name: 'Давидовна', Phone: '7556548796', Experience: 4, Age: 24},
    { id: ++id, Surname: 'Николаева ', First_name: 'Полина', Middle_name: 'Робертовна', Phone: '7896542521', Experience: 6, Age: 36},
    { id: ++id, Surname: 'Бобров', First_name: 'Семён', Middle_name: 'Антонович', Phone: '7994566511', Experience: 15, Age: 55},
    { id: ++id, Surname: 'Ильин', First_name: 'Сергей', Middle_name: 'Львович', Phone: '79854521344', Experience: 1, Age: 21},
    { id: ++id, Surname: 'Плотников', First_name: 'Артём', Middle_name: 'Тимурович', Phone: '78005553535', Experience: 12, Age: 41},
    { id: ++id, Surname: 'Лопатин', First_name: 'Александр', Middle_name: 'Константинович', Phone: '78354995475', Experience: 25, Age: 66},
    { id: ++id, Surname: 'Майорова', First_name: 'Милана', Middle_name: 'Александровна', Phone: '79455553498', Experience: 5, Age: 37},
  ];

  export default function GetData() {
    return dataEmployee; }