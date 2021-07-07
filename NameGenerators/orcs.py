from random import randint, choice


def generateSemiRandomName():
    prefferdSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш']

    def prefferedEnding(prefferedSlogs):
        orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х']
        return choice(orkishCons) + choice(prefferedSlogs)

    def randomBeggining():
        slog = ''
        vowels = ['а', 'и', 'о', 'у']

        def randCons():
            number = randint(0, 100)

            if number < 70:
                return choice(['н', 'з', 'г', 'щ', 'р', 'т', 'б', 'к', 'х'])
            else:
                return choice(['м', 'н', 'л', 'в', 'п', 'т', 'д'])

        def SlogType():

            number = randint(0, 100)

            if number == 0 or number == 1:
                return 'VCC'

            if 1 < number <= 6:
                return 'CCVC'

            if 6 < number <= 13:
                return 'VC'

            if 13 < number <= 23:
                return 'CVCC'

            if 23 < number <= 77:
                return 'CVC'

            if 77 < number <= 79:
                return 'CCV'

            if 79 < number <= 87:
                return 'V'

            if number > 87:
                return 'CV'

        slogType = SlogType()
        for character in slogType:
            if character == 'C':
                slog += randCons()
            if character == 'V':
                slog += choice(vowels)
        return slog

    end = prefferedEnding(prefferdSlogs)
    begg = randomBeggining()

    if begg[len(begg) - 1] == end[0]:
        end = prefferedEnding(prefferdSlogs)
        begg = randomBeggining()

    return begg.capitalize() + end


def generatePrefferedName():
    prefferdSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш']
    prefferedCharacters = ['зак', 'угз', 'угл', 'гор', 'иб', 'заб', 'тз']
    vowels = ['а', 'и', 'о', 'у']
    orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х']

    name1 = choice(prefferedCharacters) + choice(vowels) + choice(orkishCons) + choice(prefferdSlogs)
    return name1.capitalize()


def generateTwoPartName():
    vowels = ['а', 'и', 'о', 'у']
    orkishCons = ['н', 'з', 'г', 'ш', 'р', 'т', 'б', 'к', 'х']
    prefferdSlogs = ['ак', 'ук', 'аг', 'уг', 'уб', 'аш', 'иг', 'ун', 'ак', 'аб', 'ар', 'ул', 'уг', 'ор', 'ин', 'иш', 'иб', 'оз', 'ог', 'об', 'ух', 'ук', 'уш']

    def generateFirstSlog():
        if randint(0, 1) == 0:
            return choice(orkishCons) + choice(vowels) + choice(orkishCons)
        else:
            return choice(orkishCons) + choice(prefferdSlogs)

    firstPart = generateFirstSlog()

    def generateSecondSlog():
        rules = ['cVc', 'Cvc', 'cVC', 'CVc', 'cvC', 'reverse']
        rule = choice(rules)

        if rule == 'reverse':
            return firstPart[::-1]

        else:
            listRule = list(rule)
            listFirstPart = list(firstPart)

            for index, character in enumerate(listRule):
                if character.isupper() and character == 'V':
                    listFirstPart[index] = choice(vowels)
                if character.isupper() and character == 'C':
                    listFirstPart[index] = choice(orkishCons)
            return ''.join(listFirstPart)

    secondPart = generateSecondSlog()
    tolkienPart = choice(["'ищи", "'азг", "'аш", "'улук", "'урб", "'ощ", "'арак", "'иррик", "'урук", "'хаи", "'узаг"])

    return firstPart.capitalize() + secondPart + tolkienPart


def orcName():
    return choice([generateSemiRandomName(), generatePrefferedName(), generateTwoPartName()])


print(orcName())
