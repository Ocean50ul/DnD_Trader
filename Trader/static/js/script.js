let adjList;
let nounList;
let maleHuman;
let femaleHuman;

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(list) {
    return list[randint(0, list.length - 1)]
}

function d6Stats(arg) {
    var first = randint(1, 6);
    var second = randint(1, 6);
    var third = randint(1, 6);
    var fourth = randint(1, 6);

    var sum = first + second + third + fourth;
    var min = Math.min(first, second, third, fourth);

    var finalStat = sum - min;

    if (arg == 'normal') {
        return finalStat;
    }

    if (arg == 'commoner') {
        finalStat -= 4;

        if (finalStat <= 6) {
            finalStat += 4;
        }
        
        if (finalStat >= 13) {
            finalStat -= 4;
        }

        return finalStat;
    }
}

function statsGenerator(race, arg) {
    switch(race) {
        case 'Дварф':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg) + 2, 'Intellect': d6Stats(arg), 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg)};
        case 'Человек':
            return {'Strenght': d6Stats(arg) + 1, 'Dexterity': d6Stats(arg) + 1, 'Constitution': d6Stats(arg) + 1, 'Intellect': d6Stats(arg) + 1, 'Wisdom': d6Stats(arg) + 1, 'Charisma': d6Stats(arg) + 1};
        case 'Эльф':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg) + 2, 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg), 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg)};
        case 'Гном':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg) + 2, 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg)};
        case 'Хафлинг':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg) + 2, 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg), 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg)};
        case 'Драконорожденный':
            return {'Strenght': d6Stats(arg) + 2, 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg), 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg) + 1};
        case 'Тифлинг':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg) + 1, 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg) + 2};
        case 'Полу-орк':
            return {'Strenght': d6Stats(arg) + 2, 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg) + 1, 'Intellect': d6Stats(arg), 'Wisdom': d6Stats(arg), 'Charisma': d6Stats(arg)};
        case 'Полу-эльф':
            return {'Strenght': d6Stats(arg), 'Dexterity': d6Stats(arg), 'Constitution': d6Stats(arg), 'Intellect': d6Stats(arg) + 1, 'Wisdom': d6Stats(arg) + 1, 'Charisma': d6Stats(arg) + 2};
    }
}

function raceGenerator(citySize='', cityRace='') {
    var commonRaceList = ['Человек', 'Дварф', 'Эльф'];
    var uncommonRaceList = ['Гном', 'Хафлинг'];
    var veryUncommonRaceList = ['Драконорожденный', 'Тифлинг', 'Полу-орк', 'Полу-эльф'];
    var firstPrevalenceRoll = randint(0, 100);
    citySize = document.querySelector('input[name="citySize"]:checked').value
    cityRace = document.querySelector('input[name="cityRace"]:checked').value

    switch(cityRace) {
        case 'human':
            switch(citySize) {
                case 'small':
                    if (firstPrevalenceRoll <= 95) {

                        var secondPrevalenceRoll = randint(0, 100);

                        if (secondPrevalenceRoll < 95) {
                            return commonRaceList[0];
                        } else {
                            return commonRaceList[randint(1, 2)];
                        }

                    } else if (firstPrevalenceRoll > 95 && firstPrevalenceRoll < 99) {
                        return uncommonRaceList[randint(0, 1)]; 
                    } else if (firstPrevalenceRoll > 99) {
                        return veryUncommonRaceList[randint(0, 3)];
                    }
                case 'middle':
                    if (firstPrevalenceRoll <= 80) {
                        var secondPrevalenceRoll = randint(0, 100);
                        if (secondPrevalenceRoll <= 80) {
                            return commonRaceList[0];
                        } else {
                            return commonRaceList[randint(1, 2)];
                        }
                    }
                
                    if (95 > firstPrevalenceRoll && firstPrevalenceRoll > 80) {
                        return uncommonRaceList[randint(0, 1)];
                    }
                
                    if (firstPrevalenceRoll >= 95) {
                        return veryUncommonRaceList[randint(0, 3)];
                    }  
                case 'large':
                    if (firstPrevalenceRoll <= 50) {

                        var secondPrevalenceRoll = randint(0, 100);

                        if (secondPrevalenceRoll <= 65) {
                            return commonRaceList[0];
                        } else {
                            return commonRaceList[randint(1, 2)];
                        }
                    }
                
                    if (85 > firstPrevalenceRoll && firstPrevalenceRoll > 50) {
                        return uncommonRaceList[randint(0, 1)];
                    }
                
                    if (firstPrevalenceRoll >= 85) {
                        return veryUncommonRaceList[randint(0, 3)];
                    }
            }
        case 'elf':
            switch(citySize) {
                case 'small':
                    elfList = ['Человек', 'Гном', 'Хафлинг', 'Полу-эльф', 'Драконорожденный']
                    if (firstPrevalenceRoll < 80) {
                        return 'Эльф'
                    } else {
                        return elfList[randint(0, 4)]   
                    }
                case 'middle':
                    return 'Эльф'
                case 'large':
                    return 'Эльф'
            }
        case 'dwarf':
            switch(citySize) {
                case 'small':
                    return 'Дварф'
                case 'middle':
                    if (firstPrevalenceRoll < 90) {
                        return 'Дварф'
                    }
                    if (firstPrevalenceRoll >= 90) {
                        dwarfList = ['Человек', 'Гном']
                        return dwarfList[randint(0, 1)]
                    }
                case 'large':
                    dwarfList = ['Человек', 'Гном', 'Хафлинг', 'Драконорожденный']
                    if (firstPrevalenceRoll < 90) {
                        return 'Дварф'
                    }
                    if (firstPrevalenceRoll >= 90 && firstPrevalenceRoll < 99) {
                        return dwarfList[randint(0, 3)]
                    }
                    if (firstPrevalenceRoll == 100) {
                        return 'Полу-эльф'
                    }
            }
        case 'gnome':
            switch(citySize) {
                case 'small':
                case 'middle':
                case 'large':
                    var gnomeList = ['Дварф', 'Драконорожденный', 'Человек']
                    if (firstPrevalenceRoll < 95) {
                        return 'Гном'
                    }
                    if (firstPrevalenceRoll >= 95) {
                        return gnomeList[randint(0, 2)]
                    }
            }
        case 'hafling':
            switch(citySize) {
                case 'small':
                case 'middle':
                case 'large':
                    if (firstPrevalenceRoll < 85) {
                        return 'Хафлинг'
                    }
                    if (firstPrevalenceRoll >= 85) {
                        haflList = ['Драконорожденный', 'Тифлинг', 'Полу-орк', 'Полу-эльф', 'Человек', 'Дварф', 'Эльф', 'Гном']
                        return haflList[randint(0, 7)]
                    }
            }
    } 
}

function sexGenerator(race='') {

    if (race == 'Дварф') {
        return 'Мужчина'
    } else {
        var prevalenceRoll = randint(0, 100);

        if (prevalenceRoll < 60) {
            return 'Мужчина';
        } else {
            return 'Женщина';
        }
    }

    
}

function aligmentGenerator(race='') {
    var law = ['Законопослушный', 'Нейтральный', 'Хаотичный'];
    var worldView = ['Добрый', 'Нейтральный', 'Злой'];
    var orderRoll = randint(0, 100);
    var kindnessRoll = randint(0, 100);
    
    switch(race) {
        case 'Дварф':
            if (orderRoll <= 90) {
                currentOrder = law[0];
            } else if (orderRoll > 90 && orderRoll <= 98) {
                currentOrder = law[1];
            } else if (orderRoll > 98) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 70) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 70 && kindnessRoll <= 90) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 90) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Человек':
            if (orderRoll <= 55) {
                currentOrder = law[0];
            } else if (orderRoll > 55 && orderRoll <= 85) {
                currentOrder = law[1];
            } else if (orderRoll > 85) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 55) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 55 && kindnessRoll <= 78) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 78) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Эльф':
            if (orderRoll > 95) {
                currentOrder = law[1];
            } else if (orderRoll > 90) {
                currentOrder = law[0];
            } else if (orderRoll <= 90) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 70) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 70 && kindnessRoll <= 85) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 85) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Гном':
            if (orderRoll <= 65) {
                currentOrder = law[2];
            } else if (orderRoll > 65 && orderRoll <= 75) {
                currentOrder = law[1];
            } else if (orderRoll > 75) {
                currentOrder = law[0];
            }
            
            if (kindnessRoll <= 80) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 80 && kindnessRoll <= 85) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 85) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Драконорожденный':
            if (kindnessRoll <= 70) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll == 71) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 71) {
                currentWorldView = worldView[2];
            }

            if (currentWorldView = worldView[0]) {
                currentOrder = law[0];
            }

            if (currentWorldView == worldView[1]) {
                currentOrder = law[1];
            }

            if (currentWorldView == worldView[2]) {
                currentOrder = law[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;
        
        case 'Тифлинг':
            if (orderRoll <= 5) {
                currentOrder = law[0];
            } else if (orderRoll > 5 && orderRoll <= 10) {
                currentOrder = law[1];
            } else if (orderRoll > 10) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 25) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 20 && kindnessRoll <= 40) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 40) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Полу-орк':
            if (orderRoll <= 15) {
                currentOrder = law[0];
            } else if (orderRoll > 15 && orderRoll <= 30) {
                currentOrder = law[1];
            } else if (orderRoll > 30) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 15) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 15 && kindnessRoll <= 35) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 35) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Полу-эльф':
            if (orderRoll <= 20) {
                currentOrder = law[0];
            } else if (orderRoll > 20 && orderRoll <= 40) {
                currentOrder = law[1];
            } else if (orderRoll > 40) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 30) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 30 && kindnessRoll <= 85) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 85) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}`;

        case 'Хафлинг':
            if (orderRoll <= 95) {
                currentOrder = law[0];
            } else if (orderRoll > 95 && orderRoll <= 99) {
                currentOrder = law[1];
            } else if (orderRoll > 99) {
                currentOrder = law[2];
            }
            
            if (kindnessRoll <= 95) {
                currentWorldView = worldView[0];
            } else if (kindnessRoll > 95 && kindnessRoll <= 99) {
                currentWorldView = worldView[1];
            } else if (kindnessRoll > 99) {
                currentWorldView = worldView[2];
            }
            
            if (currentWorldView == 'Нейтральный' && currentOrder == 'Нейтральный') {
                return 'Истинно Нейтральный';
            }
            return `${currentOrder} ${currentWorldView}` ;       

        default:
            return 'Произошла ошибка!';
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function orkName() {

    function semiRandomName() {

        function prefferedEnding() {
            var orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х'];
            var prefferedSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш'];
            return choice(orkishCons) + choice(prefferedSlogs);
        }

        function randomBeggining() {
            var slog = '';
            var vowels = ['а', 'и', 'о', 'у'];

            function randCons() {
                var number = randint(0, 100);
                if (number < 70) {
                    return choice(['н', 'з', 'г', 'щ', 'р', 'т', 'б', 'к', 'х']);
                } else {
                    return choice(['м', 'н', 'л', 'в', 'п', 'т', 'д']);
                }
            }

            function slogType() {
                var number = randint(0, 100);

                if (number <= 1) {
                    return 'VCC';
                }

                if (number > 1 && number <=6) {
                    return 'CCVC';
                }

                if (number > 6 && number <=13) {
                    return 'VC';
                }

                if (number > 13 && number <= 23) {
                    return 'CVCC';
                }

                if (number > 23 && number <= 77) {
                    return 'CVC';
                }

                if (number > 77 && number <= 79) {
                    return 'CCV';
                }

                if (number > 79 && number <= 84) {
                    return 'V';
                }

                if (number > 84) {
                    return 'CV'
                }
            }

            var typeOfSlog = slogType()
            for (var i = 0; i < typeOfSlog.length; i++) {
                if (typeOfSlog.charAt(i) === 'C') {
                    slog += randCons()
                }
                if (typeOfSlog.charAt(i) === 'C') {
                    slog += choice(vowels)
                }
            }
            return slog
        }
        begg = randomBeggining()
        end = prefferedEnding()

        if (begg[begg.length - 1] === end[0]) {
            begg = randomBeggining()
            end = prefferedEnding()
        }
        var name = capitalize(begg) + end
        return name
    }

    function prefferedName() {
        var prefferdSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш']
        var prefferedCharacters = ['зак', 'угз', 'угл', 'гор', 'иб', 'заб', 'тз']
        var vowels = ['а', 'и', 'о', 'у']
        var orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х']

        name = choice(prefferedCharacters) + choice(vowels) + choice(orkishCons) + choice(prefferdSlogs)
        return capitalize(name)
    }

    function twoPartName() {
        var vowels = ['а', 'и', 'о', 'у']
        var orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х']
        var prefferdSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш']

        function firstSlog() {
            if (randint(0, 1) == 0) {
                return choice(orkishCons) + choice(vowels) + choice(orkishCons)
            } else {
                return choice(orkishCons) + choice(prefferdSlogs)
            }
        }

        function reverse(s){
            return s.split("").reverse().join("");
        }

        var firstPart = firstSlog()

        function secondSlog() {
            var rules = ['cVc', 'Cvc', 'cVC', 'CVc', 'cvC', 'reverse']
            var rule = choice(rules)

            if (rule === 'reverse') {
                return reverse(firstPart)
            } else {
                var listRule = Array.from(rule)
                var listFirstPart = Array.from(firstPart)

                for (const [index, element] of listRule.entries()) {
                    if (element == element.toUpperCase() && element === 'V') {
                        listFirstPart[index] = choice(vowels)
                    }
                    if (element == element.toUpperCase() && element === 'C') {
                        listFirstPart[index] = choice(orkishCons)
                    }
                }
                return listFirstPart.join('')
            }
        }

        var secondPart = secondSlog()
        var tolkienPart = choice(["'ищи", "'азг", "'аш", "'улук", "'урб", "'ощ", "'арак", "'иррик", "'урук", "'хаи", "'узаг"])
        var name = capitalize(firstPart) + secondPart + tolkienPart

        return name
    }

    return choice([twoPartName(), prefferedName(), semiRandomName()]) 
}

function dwarfName() {

    function complexName(arg) {

        switch(arg) {
            case 1:
                var con = choice(consonants);
            case 2:
                var con = choice(firstCons);
        }
        var middle = choice(center);
        middle = middle.slice(0, 1) + choice(consonants) + middle.slice(1);
        var name = con + middle;
        return capitalize(name)
    }

    var vowels = ['а', 'о', 'е', 'у', 'и', 'э'];
    var consonants = ['к', 'г', 'н', 'в', 'п', 'л', 'д', 'м', 'т', 'б'];
    var center = ['оин', 'уин', 'аин', 'эин'];
    var middleCons = ['мл', 'мб', 'др', 'рв', 'гл', 'лх', 'нг', 'нд'];
    var firstCons = ['кн', 'кв', 'кл', 'кд', 'км', 'кб', 'гн', 'гв', 'гл', 'гд', 'гм', 'гб', 'нг', 'нв', 
    'нл', 'нд', 'нб', 'вн', 'вг', 'вп', 'вл', 'вд', 'вм', 'пл', 'лк', 'лг', 'лн', 'лв', 'лд', 'лм', 
    'лт', 'лб', 'дк', 'дг', 'дн', 'дв', 'дл', 'дм', 'дб', 'мг', 'бн', 'бл']

    var simpleName = capitalize(choice(consonants) + choice(center))
    var simpleName2 = capitalize(choice(firstCons) + choice(center))
    var randomName = capitalize(choice(consonants) + choice(vowels) + choice(middleCons) + choice(vowels) + choice(consonants))
    return choice([simpleName, simpleName2, randomName, complexName(1), complexName(2)])
}

function elfName(gender) {
    // creates elf name by mutating words from quenya dictionary

    function getRoot(word, wordType) {
        // extracts root from given word of a given type
    
        let nounEndings = ['indë', 'issë', 'indo', 'ion', 'iel', 'llë', 'sta', 'ndo', 'lle', 'at', 'ba', 'më', 
        'rë', 'ië', 'lë', 'ma', 'më', 'në', 'on', 'rë', 'së', 'wa', 'wë', 'do', 'de', 'mo', 'no', 'on', 'ro', 
        'wë', 'ië', 'ya', 'o', 'i', 'u', 'r', 't', 'ë', 'a', 'y'];
    
        let adjEndings = ['inqua', 'viltë', 'valta', 'arwa', 'ima', 'ina', 'itë', 'ítë', 'rin', 'vëa', 'ba', 'ca', 
                        'da', 'ëa', 'in', 'na', 'sa', 'wa', 'ya', 'a', 'ë'];
        
        let root;
    
        switch(wordType) {
    
            case 'noun':
                for (let i = 0; i < nounEndings.length; i++) {
                    if (word.endsWith(nounEndings[i])) {
                        root = word.slice(0, word.length - nounEndings[i].length);
                        break;
                    }
                }
                break;
    
            case 'adj':
                for (let i = 0; i < adjEndings.length; i++) {
                    if (word.endsWith(adjEndings[i])) {
                        root = word.slice(0, word.length - adjEndings[i].length);
                        break;
                    }
                }
                break;
        }
    
        if (root === undefined) {
          root = word
        }
    
        return root
    }

    function glueTwoWords(word1, word2) {
        // Glues two words together
        let vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'á', 'é', 'í', 'ó', 'ú', 'ë'];
        let consonants = ['m', 'p', 'b', 'f', 'v', 'w', 'n', 't', 'd', 's', 'r', 'l', 'j', 'k', 'g', 'x', 'h', 'c'];
    
        let firstMap = '' // creates a map of a word that represents amount of vowels and consonants and their order in given word;
        let secondMap = '' // same for second word
    
        for (let i = 0; i < word1.length; i++) {
            if (vowels.includes(word1[i])) {
                firstMap = firstMap.concat('V')
            } else if (consonants.includes(word1[i])) {
                firstMap = firstMap.concat('C')
            }
        }
    
        for (let i = 0; i < word2.length; i++) {
            if (vowels.includes(word2[i])) {
                secondMap = secondMap.concat('V')
            } else if (consonants.includes(word2[i])) {
                secondMap = secondMap.concat('C')
            }
        }
    
        let relOne = firstMap.slice(-2) // extracts relevants parts of word map (last two characters of first word
        let relTwo = secondMap.slice(0, 2) // same
    
        switch(true) {
            case relOne == 'CC' && relTwo == 'CV':
            case relOne == 'VC' && relTwo == 'CC':
            case relOne == 'VV' && relTwo == 'VC':
            case relOne == 'CV' && relTwo == 'VV':
                return word1.slice(0, -1) + word2;
            case relOne == 'VV' && relTwo == 'VV':
            case relOne == 'CC' && relTwo == 'CC':
            case word1.slice(-2) == word2.slice(0, 2):
                return word1.slice(0, -2) + word2;
            default:
                return word1 + word2
    
        }
    }

    function wordEnding(gender) {
        //Creates proper ending

        let maleEndings = ['ion', 'inor', 'dil', 'ndil', 'dur', 'ndur', 'mo'];
        let femaleEndings = ['wen', 'el', 'iel', 'ien', 'isse', 'esse'];

        switch(gender) {
            
            case 'Мужчина':
                return choice(maleEndings);
            case 'Женщина':
                return choice(femaleEndings);
        }
    }

    function getWord(typeOf) {
        switch(typeOf) {
            case 'noun':
                return choice(nounList)
            case 'adj':
                return choice(adjList)
        }
    }

    function approxName(gender) {

        let typeOne = choice(['noun', 'adj']);
        let typeTwo = choice(['noun', 'adj']);
        let firstWord = getWord(typeOne).trim();
        let secondWord = getWord(typeTwo).trim();
        let name;

        if (randint(0, 100) <= 60) {

            if (firstWord.length >= 5) {
                let root = getRoot(firstWord, typeOne).trim();
                let end = wordEnding(gender).trim();
                name = glueTwoWords(root, end).trim();
            } else if (firstWord.length < 5) {

                while (secondWord.length > 5) {
                    secondWord = getWord(typeTwo)
                }

                let root = glueTwoWords(getRoot(firstWord, typeOne).trim(), getRoot(secondWord, typeTwo).trim()).trim()
                let end = wordEnding(gender).trim()
                name = glueTwoWords(root, end).trim()
            }
        } else {
            name = glueTwoWords(firstWord, secondWord).trim()
        }

        return name
    }

    function translateToRussia(name) {
        toRussian = {'aya': 'айа', 'oya': 'ойа', 'eya': 'эйа', 'iya': 'ийа', 'uya': 'уйа', 'áya': 'айа', 'éya': 'эйа', 'íya': 'ийа', 'óya': 'ойа',
        'úya': 'уйа', 'ëya': 'эйа', 'öya': 'ойа', 'iu': 'иу', 'eu': 'эу', 'ai': 'ай', 'au': 'ау', 'oi': 'ой', 'ui': 'уй', 'ëo': 'эо', 'ei': 'эй', 
        'ss': 'з', 'qu': 'кв', 'ya': 'йа', 'a': 'а', 'e': 'э', 'i': 'и', 'o': 'о', 'u': 'у', 'y': 'й', 'á': 'а', 'é': 'э', 'í': 'и', 'ó': 'о', 
        'ú': 'у', 'ë': 'э', 'm': 'м', 'p': 'п', 'b': 'б', 'f': 'ф', 'v': 'в', 'w': 'в', 'n': 'н', 't': 'т', 'd': 'д', 's': 'с', 'r': 'р', 
        'l': 'л', 'j': 'дж', 'k': 'к', 'g': 'г', 'x': 'кс', 'h': 'х', 'c': 'к', 'q': 'к', 'ö': 'о', 'ҭ': 'т', 'ñ': 'нг'}

        for (const [key] of Object.entries(toRussian)) {
            if (name.includes(key)) {
              name = name.replaceAll(key, toRussian[key])
            }
        }

        return name
    }

    let newName = approxName(gender);

    while (newName.length > 10) {
        newName = approxName(gender)
    }

    newName = capitalize(translateToRussia(newName))

    if (gender == 'Женщина'){
        if (newName.slice(-1) == 'л') {
            newName = newName + 'ь'
        }
    }

    return newName
}

function humanName(gender) {
    switch(gender) {
        case 'Женщина':
            return choice(femaleHuman);
        case 'Мужчина':
            return choice(maleHuman);
    };
};

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
};

function nameGenerator(gender, race) {
    switch(race) {
        case 'Полу-орк':
            return orkName()

        case 'Дварф':
            return dwarfName()

        case 'Эльф':
            return elfName(gender)

        case 'Гном':
            return gnomeName()

        case 'Драконорожденный':
            return 'Еще не сделал'

        case 'Полу-эльф':
            return choice([elfName(gender), humanName(gender)])

        case 'Человек':
            return humanName(gender)

        case 'Тифлинг':
            return 'Еще не сделал'

        case 'Хафлинг':
            return 'Еще не сделал'

    }   
}

function generateNewCommon() {

    if (document.getElementById('cardContent') == null) {
        var race = raceGenerator();
        var stats = statsGenerator(race, 'commoner');
        var sex = sexGenerator(race);
        var name = nameGenerator(sex, race)
        var aligment = aligmentGenerator(race);
        var fullCard = document.createElement('div');
        fullCard.className = 'fullCard';
        cardContent = document.createElement('div');
        cardContent.className = 'cardContent';
        cardContent.id = 'cardContent';
        fullCard.appendChild(cardContent);
        cardContent.innerHTML = `<div class="name">${name}</div>
                                <div class="raceAndSex" id="raceAndSex">${race}, ${sex}</div>
                                <div class="raceAndSex" id="aligment">${aligment}</div>
                                <hr>
                                <div id="str">Сила: ${stats['Strenght']}</div>
                                <div id="agi">Ловкость: ${stats['Dexterity']}</div>
                                <div id="con">Телосложение: ${stats['Constitution']}</div>
                                <div id="int">Интеллект: ${stats['Intellect']}</div>
                                <div id="wis">Мудрость: ${stats['Wisdom']}</div>
                                <div id="cha">Харизма: ${stats['Charisma']}</div>`;
        document.body.appendChild(fullCard);
    } else {
        var race = raceGenerator();
        var stats = statsGenerator(race, 'commoner');
        var sex = sexGenerator(race);
        var name = nameGenerator(sex, race)
        var aligment = aligmentGenerator(race);
        cardContent.innerHTML = `<div class="name">${name}</div>
                                <div class="raceAndSex" id="raceAndSex">${race}, ${sex}</div>
                                <div class="raceAndSex" id="aligment">${aligment}</div>
                                <hr>
                                <div id="str">Сила: ${stats['Strenght']}</div>
                                <div id="agi">Ловкость: ${stats['Dexterity']}</div>
                                <div id="con">Телосложение: ${stats['Constitution']}</div>
                                <div id="int">Интеллект: ${stats['Intellect']}</div>
                                <div id="wis">Мудрость: ${stats['Wisdom']}</div>
                                <div id="cha">Харизма: ${stats['Charisma']}</div>`;
    }
}

function generateNewNormal() {

    if (document.getElementById('cardContent') == null) {
        var race = raceGenerator();
        var stats = statsGenerator(race, 'normal');
        var sex = sexGenerator(race);
        var name = nameGenerator(sex, race)
        var aligment = aligmentGenerator(race);
        var fullCard = document.createElement('div');
        fullCard.className = 'fullCard';
        cardContent = document.createElement('div');
        cardContent.className = 'cardContent';
        cardContent.id = 'cardContent';
        fullCard.appendChild(cardContent);
        cardContent.innerHTML = `<div class="name">${name}</div>
                                <div class="raceAndSex" id="raceAndSex">${race}, ${sex}</div>
                                <div class="raceAndSex" id="aligment">${aligment}</div>
                                <hr>
                                <div id="str">Сила: ${stats['Strenght']}</div>
                                <div id="agi">Ловкость: ${stats['Dexterity']}</div>
                                <div id="con">Телосложение: ${stats['Constitution']}</div>
                                <div id="int">Интеллект: ${stats['Intellect']}</div>
                                <div id="wis">Мудрость: ${stats['Wisdom']}</div>
                                <div id="cha">Харизма: ${stats['Charisma']}</div>`;
        document.body.appendChild(fullCard);
    } else {
        var race = raceGenerator();
        var stats = statsGenerator(race, 'normal');
        var sex = sexGenerator(race);
        var name = nameGenerator(sex, race)
        var aligment = aligmentGenerator(race);
        cardContent.innerHTML = `<div class="name">${name}</div>
                                <div class="raceAndSex" id="raceAndSex">${race}, ${sex}</div>
                                <div class="raceAndSex" id="aligment">${aligment}</div>
                                <hr>
                                <div id="str">Сила: ${stats['Strenght']}</div>
                                <div id="agi">Ловкость: ${stats['Dexterity']}</div>
                                <div id="con">Телосложение: ${stats['Constitution']}</div>
                                <div id="int">Интеллект: ${stats['Intellect']}</div>
                                <div id="wis">Мудрость: ${stats['Wisdom']}</div>
                                <div id="cha">Харизма: ${stats['Charisma']}</div>`;
    }
}

window.addEventListener('load', function() {

    $.get('/adjList', function(adjs){
        adjList = adjs;
    });
    $.get('/nounList', function(nouns){
        nounList = nouns;
    });
    $.get('/femaleHumanNames', function(femNames) {
        femaleHuman = femNames;
    });
    $.get('/maleHumanNames', function(maleNames) {
        maleHuman = maleNames;
    });

    document.querySelectorAll('input[name="cityRace"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var raceValue = event.target.value;
        if (raceValue == 'elf') {
            document.getElementById('small').innerHTML = 'Дальний форпост'
            document.getElementById('middle').innerHTML = 'Сокрытый дол'
            document.getElementById('large').innerHTML = 'Чащобы вечного леса'

            document.getElementById('noteSmall').innerHTML = 'Малое'
            document.getElementById('noteMiddle').innerHTML = 'Среднее'
            document.getElementById('noteLarge').innerHTML = 'Большое'

        }
        if (raceValue == 'human') {
            document.getElementById('small').innerHTML = 'Деревенька'
            document.getElementById('middle').innerHTML = 'Бург'
            document.getElementById('large').innerHTML = 'Мегаполис'

            document.getElementById('noteSmall').innerHTML = 'Малое'
            document.getElementById('noteMiddle').innerHTML = 'Среднее'
            document.getElementById('noteLarge').innerHTML = 'Большое'
        }
        if (raceValue == 'dwarf') {
            document.getElementById('small').innerHTML = 'Клан отшельников'
            document.getElementById('middle').innerHTML = 'Залы ремесленников'
            document.getElementById('large').innerHTML = 'Мифриловы чертоги'

            document.getElementById('noteSmall').innerHTML = 'Малые'
            document.getElementById('noteMiddle').innerHTML = 'Средние'
            document.getElementById('noteLarge').innerHTML = 'Большие'
        }
        if (raceValue == 'gnome') {
            document.getElementById('small').innerHTML = 'Школа изобретателей'
            document.getElementById('middle').innerHTML = 'Университетский кампус'
            document.getElementById('large').innerHTML = 'Научный городок'

            document.getElementById('noteSmall').innerHTML = 'Малый'
            document.getElementById('noteMiddle').innerHTML = 'Средний'
            document.getElementById('noteLarge').innerHTML = 'Большой'
        }
        if (raceValue == 'hafling') {
            document.getElementById('small').innerHTML = 'Тихая деревушка'
            document.getElementById('middle').innerHTML = 'Зажиточное Село'
            document.getElementById('large').innerHTML = 'Хутор изобилия'

            document.getElementById('noteSmall').innerHTML = 'Малая'
            document.getElementById('noteMiddle').innerHTML = 'Средняя'
            document.getElementById('noteLarge').innerHTML = 'Большая'
        }
      });
    });
})