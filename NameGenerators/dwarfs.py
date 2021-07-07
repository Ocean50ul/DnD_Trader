from random import choice

def dwarfName():

    vowels = ['а', 'о', 'е', 'у', 'и', 'э']
    consonants = ['к', 'г', 'н', 'в', 'п', 'л', 'д', 'м', 'т', 'б']

    center = ['оин', 'уин', 'аин', 'эин']
    middlCons = ['мл', 'мб', 'др', 'рв', 'гл', 'лх', 'нг', 'нд']
    firstCons = ['кн', 'кв', 'кл', 'кд', 'км', 'кб', 'гн', 'гв', 'гл', 'гд', 'гм', 'гб', 'нг', 'нв', 
    'нл', 'нд', 'нб', 'вн', 'вг', 'вп', 'вл', 'вд', 'вм', 'пл', 'лк', 'лг', 'лн', 'лв', 'лд', 'лм', 
    'лт', 'лб', 'дк', 'дг', 'дн', 'дв', 'дл', 'дм', 'дб', 'мг', 'бн', 'бл']

    simpleName = choice(consonants).upper() + choice(center)
    simpleName2 = choice(firstCons).capitalize() + choice(center)

    def complexName():
        cons = choice(consonants)
        middle = choice(center)
        middle = middle[:1] + choice(consonants) + middle[1:]
        name = cons + middle

        return name.capitalize()

    def complexName2():
        cons = choice(firstCons)
        middle = choice(center)
        middle = middle[:1] + choice(consonants) + middle[1:]
        name = cons + middle

        return name.capitalize()

    randomName = choice(consonants).upper() + choice(vowels) + choice(middlCons) + choice(vowels) + choice(consonants)
    name = choice([simpleName, simpleName2, randomName, complexName(), complexName2()])

    return name
