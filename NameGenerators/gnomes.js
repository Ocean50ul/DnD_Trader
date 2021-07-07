// именя должны быть забавными!

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function choice(list) {
    return list[randint(0, list.length - 1)]
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function gnomeName(gender) {

    let funnyMeanWords = [
                            'хрен', 'гуано', 'губошлеп', 'фиг', 'ядрён', 'япона', 'жожоба', 
                            'ворвань', 'йоббик', 'йоп', 'падлу', 'хухря','пердюмонокл', 'шепотник',
                            'лисопес'
                        ]

    let funnyScienceWords = [
                                'алкоголят', 'боран', 'бутоньерка', 'пфаффиан', 'шпонька', 'шпонка', 'втулка', 'бзик', 'взонк', 'возгон', 'жупел', 'помпа', 'шимми', 
                                'эмфитевзис', 'узуфрут', 'бамботер', 'бобина', 'бугель', 'бушинг', 'вагранка', 'вертлюг', 'вибротрон', 'вмазик', 'враздрай', 'враструб', 
                                'вьюшка', 'газгольдер', 'давчик', 'дуплекс', 'дюбель', 'дюза', 'дюкель', 'дымогарн', 'катаракт', 'кельма', 'кебрик', 'люлька', 'шмонька', 
                                'нониус', 'ползун', 'пулька', 'пульпа', 'пускач', 'пятник', 'разжидител', 'рогулька', 'синька', 'сопель', 'сопло', 'фуговка', 'храповик', 
                                'цевка', 'цинубель', 'чопик', 'шатун', 'шкворень', 'шлямбур', 'баббит', 'шноркель', 'шнохер'
                            ]

    let scienceWords = [
                            'амальгама', 'бессемер', 'блейвейс', 'варистор', 'видикон', 'виндроза', 'гексод', 'геркон', 'геттер', 'градирн', 'деэссер', 'пиккер', 'плоттер', 
                            'райбер', 'гептод', 'динас', 'жиклёр', 'заман', 'зенкер', 'ибикон', 'изопикна', 'изосклера', 'инерта', 'камора', 'кантилевер', 'каптаж', 'кепстр', 
                            'кернер', 'пилон', 'ракель', 'рапид', 'кессон', 'когерер', 'кориум', 'корунд', 'крейцкопф', 'леникс', 'лидар', 'лонжерон', 'магнистор', 'мадистор', 
                            'магнето', 'мастика', 'мидбас', 'монжус', 'манжус', 'графекон', 'джиттер', 'клистрон', 'нувистор', 'ортикон', 'шунт', 'растр', 'реборда', 'регенерат', 
                            'рисберма', 'рефулёр', 'рольганг', 'ростверк', 'салазки', 'свес', 'серва', 'стренга', 'стренер', 'строб', 'тавот', 'тастатура', 'темплет', 'термистор', 
                            'термозит', 'тиноль', 'тиристор', 'тирит', 'токамак', 'тонваген', 'трал', 'трак', 'трензель', 'триплекс', 'турбобур', 'фаска', 'фильер', 'флюс', 'флютбет', 
                            'фригория', 'фрикцион', 'фурма', 'цанга', 'цапфа', 'цетан', 'шароша', 'швеллер', 'шлиц', 'шнеллер', 'шплинт', 'шпунт', 'шток', 'штуцер', 'абрадант', 
                            'аддендум', 'бловер', 'боннет', 'бродлум', 'бабблер', 'калипер', 'чиппер', 'коак', 'краст', 'криб', 'кушион', 'датум', 'дент', 'дискрет', 'энвелоп', 
                            'фейдер', 'фолд', 'фьюз', 'фрай', 'гаджион', 'хендвил', 'хекски', 'хоппер', 'джаммер', 'манифолд', 'маффл', 'пеларус', 'плейт', 'ратчет', 'рейн', 'роуст', 
                            'ровер', 'селсин', 'серво', 'сеттлер', 'шафт', 'шанк', 'слип', 'слот', 'шпур', 'стак', 'стокер', 'троу', 'трастер', 'вуфер'
                        ]

    let funnyEnding = [
                        'шлопс',  'шлапс', 'шлипс', 'шлупс',
                        'шмакс', 'шмякс',  'шмекс', 'шмукс',
                        'бзонк', 'бзунк', 'бзинк', 'бзянк',
                        'взинк', 'взонк', 'взанк', 'взунк',
                        'бракс', 'брукс', 'брокс', 'брякс',
                        'блапс', 'блупс', 'блопс', 'блипс', 'бляпс',
                        'клипс', 'клупс', 'клапс', 'кляпс', 'клипс', 'клопс', 'клёпс',
                        'чпок', 'чпик', 'чпук', 'чпак', 'чпек', 'чпёк',
                        'шнорк', 'шнурк', 'шнерк', 'шнарк', 'шнырк', 'шнярк',
                        'лягс', 'люгс', 'логс', 'лагс', 'лигс', 'лёгс',
                        'шпонк', 'шпанк', 'шпынк', 'шпюнк', 'шпунк',
                        'шнолк', 'шнелк', 'шнюлк', 'шнулк', 'шнялк',
                        'шлямс', 'шломс', 'шлимс', 'шлымс', 'шлюмс',
                    ]

    let scienceEndings = [
                            'трон', 'дрон', 'тор', 'кон', 'иум', 'иус', 'копф', 'шер', 'кс', 'идар', 'скопс', 'ппель', 'ляторс', 'сторс', 'зер', 
                            'кус', 'ер', 'плекс', 'инт', 'слип', 'слот', 'ус', 'с'
                        ]

    let sciPreffix = [
                        'изо', 'гипер', 'мульти', 'мега', 'кило', 'микро', 'метр', 'много', 'мото', 'обжим', 'обе', 'овер', 'онду', 'над', 'под', 'от', 
                        'пере', 'пред', 'прео', 'серв', 'суб', 'сверх', 'тенз', 'тер', 'экс', 'интер', 'экзо', 'эзо', 'мегало'
                    ]

    let surnames = [
                    'Акрукс', 'Алгениб', 'Алголь', 'Алиот', 'Альбирео', 'Альдерамин', 'Алькор', 'Альтаир', 'Альциона', 'Антарес', 'Арктур',
                    'Астеропа', 'Ахернар', 'Беллатрикс', 'Бенетнаш', 'Вега', 'Гемма', 'Денеб', 'Денебола', 'Дубхе', 'Канопус', 'Капелла', 'Кастор',
                    'Маркаб', 'Мерак', 'Меропа', 'Мира', 'Мирах', 'Мицар', 'Плейона', 'Поллукс', 'Процион', 'Регул', 'Ригель', 'Сириус', 'Спика',
                    'Тайгета', 'Толиман', 'Фомальгаут', 'Эридан', 'Веритате', 'Нембус', 'Альферац', 'Мирах', 'Аламак', 'Адхил',
                    'Титавин', 'Кастор', 'Поллукс', 'Альхена', 'Альзирр', 'Пропус', 'Интеркрус', 'Чалаван', 'Алькор', 'Алиот', 'Алкаид',
                    'Сириус', 'Мирзам', 'Мулифен', 'Везен', 'Адара', 'Фуруд', 'Алудра', 'Альбали', 'Анха', 'Ситула', 'Сеат', 'Капелла', 'Менкалинан',
                    'Альмааз', 'Мерга', 'Арктур', 'Неккар', 'Сегинус', 'Цегинус', 'Альдафирах', 'Киссин', 'Альхиба', 'Альгораб', 'Крац',
                    'Минкар', 'Корнефорос', 'Альфард', 'Маркеб', 'Суалоцин', 'Ротанев', 'Альдулфин', 'Фафнир', 'Растабан',
                    'Эльтанин', 'Альтаис', 'Альдибах', 'Алракис'
                    ]

    function metamorph(word1, word2) {
        let consonants = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
        let vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
        let neutralVowels = ['а', 'у', 'о', 'е']

        if (consonants.includes(word1[word1.length - 1]) && consonants.includes(word2[0])) {
            return word1 + choice(neutralVowels) + word2;
        } else if (vowels.includes(word1[word1.length - 1]) && vowels.includes(word2[0])) {
            return word1 + choice(consonants) + word2;
        } else {
            return word1 + word2;
        }
    };

    function funnyWordSciEnd() {
        // poor random
        let word1 = choice(funnyScienceWords)
        while (word1.length > 7) {
            word1 = choice(funnyScienceWords)
        }

        let name =  metamorph(word1, choice(scienceEndings))

        if (name.length > 10) {
            return funnyWordSciEnd()
        } else {
            return name
        };
    };

    function surname() {
        // good random
        let randomRoll = randint(0, 100);
        if (randomRoll <= 30) {
            return choice(surnames);
        } else {
            let sur = choice(scienceWords)
            if (sur.length > 4) {
                return sur;
            } else {
                sur = metamorph(sur, choice(funnyEnding));
                return sur;
            };
        };
    };

    function randomName(){
        // good random
        let name1 = metamorph(choice(sciPreffix), choice(funnyEnding));
        let name2 = metamorph(choice(funnyEnding), choice(scienceEndings));
        let name3 = metamorph(choice(sciPreffix), choice(scienceEndings));

        let actualName = choice([name1, name2, name3])

        if (actualName.length > 10) {
            return randomName();
        } else {
            return actualName;
        };
    };

    function sciWordFunnyEnd() {
        // semi-poor random
        sciWord = choice(scienceWords)

        if (sciWord.length > 4) {
            return sciWordFunnyEnd()
        } else {
            return metamorph(sciWord, choice(funnyEnding));
        };
    };

    function shortName1() {
        // semi-poor random
        let fPart = choice(funnyEnding);
        let sPart = choice(['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'п', 'р', 'с', 'т', 'ц']);

        return metamorph(fPart, sPart);
    };

    function shortName2() {
        // semi-poor random
        let fPart = choice(scienceWords)
        if (fPart.length > 6) {
            return shortName1()
        } else {
            let sPart = choice(['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'п', 'р', 'с', 'т', 'ц']);
            return metamorph(fPart, sPart)
        };
    };

    function meanName() {
        // poor random
        let fPart = choice(funnyMeanWords);
        if (fPart.length > 5) {
            sPart = choice([choice(scienceEndings), choice(sciPreffix)]);
            while (sPart.length > 2) {
                sPart = choice([choice(scienceEndings), choice(sciPreffix)]);
            };
            return metamorph(fPart, sPart);
        } else {
            sPart = choice(funnyEnding)
            return metamorph(fPart, sPart);
        };
    };

    function randomOutput() {
        let outputRoll = randint(0, 100);

        if (outputRoll <= 65) {
            return capitalize(randomName())
        }

        if (outputRoll > 65 && outputRoll < 85) {
            return capitalize(choice([shortName1(), shortName2(), sciWordFunnyEnd()]))
        }

        if (outputRoll >= 85) {
            return capitalize(choice([meanName(), funnyWordSciEnd()]))
        }
    }

    let name = randomOutput()

    return name + ' ' + capitalize(surname())
}

