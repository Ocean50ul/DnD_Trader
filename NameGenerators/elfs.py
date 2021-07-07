from random import choice, randint
from termcolor import colored
import re
import colorama

def getName():

    def getQuenyaWord(whichOne=choice(['noun', 'adj'])):
        '''Get an elf word!'''

        def getWordsList(whichOne, dictionary):
            '''Creates list of words [whichOne] type'''
            def reScreen(line):
                pattern = re.compile(r'\w+')
                match = pattern.search(line)
                if match:
                    return match.group(0)
                else:
                    return 'Error'

            result = []

            for line in dictionary:
                if whichOne in line.split():
                    word = reScreen(line.split()[0])
                    if word[0].isupper():
                        continue
                    result.append(word)
            return result

        dictionary = open('quen.txt', encoding='utf-8').readlines()
        wordsList = getWordsList(whichOne, dictionary)

        return choice(wordsList)


    def getRoot(typeOfWord, word):
        nounEndings = ['indë', 'issë', 'indo', 'ion', 'iel', 'llë', 'sta', 'ndo', 'lle', 'at', 'ba', 'më', 
                        'rë', 'ië', 'lë', 'ma', 'më', 'në', 'on', 'rë', 'së', 'wa', 'wë', 'do', 'de', 'mo', 
                        'no', 'on', 'ro', 'wë', 'ië', 'ya', 'o', 'i', 'u', 'r', 't', 'ë', 'a', 'y']

        adjEndings = ['inqua', 'viltë', 'valta', 'arwa', 'ima', 'ina', 'itë', 'ítë', 'rin', 'vëa', 'ba', 'ca', 
                        'da', 'ëa', 'in', 'na', 'sa', 'wa', 'ya', 'a', 'ë']

        if typeOfWord == 'noun':
            for ending in nounEndings:
                pattern = re.compile(f'{ending}$')
                match = pattern.search(word)

                if match:
                    end = match.group(0)
                    root = word[:len(word) - len(end)]
                else:
                    root = word

        if typeOfWord == 'adj':
            for ending in adjEndings:
                pattern = re.compile(f'{ending}$')
                match = pattern.search(word)

                if match:
                    end = match.group(0)
                    root = word[:len(word) - len(end)]
                else:
                    root = word

        return root


    def converse(word1, word2):
        vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'á', 'é', 'í', 'ó', 'ú', 'ë']
        consonants = ['m', 'p', 'b', 'f', 'v', 'w', 'n', 't', 'd', 's', 'r', 'l', 'j', 'k', 'g', 'x', 'h', 'c']

        firstMap = []
        secondMap = []

        for character in word1:
            if character in vowels:
                firstMap.append('V')
            if character in consonants:
                firstMap.append('C')

        for character in word2:
            if character in vowels:
                secondMap.append('V')
            if character in consonants:
                secondMap.append('C')

        relevantOne = firstMap[-2:]
        relevantTwo = secondMap[0:2]

        if ''.join(relevantOne) == 'CC' and ''.join(relevantTwo) == 'CV':
            return word1[:-1] + word2
        elif ''.join(relevantOne) == 'VC' and ''.join(relevantTwo) == 'CC':
            return word1[:-1] + word2
        elif ''.join(relevantOne) == 'VV' and ''.join(relevantTwo) == 'VC':
            return word1[:-1] + word2
        elif ''.join(relevantOne) == 'CV' and ''.join(relevantTwo) == 'VV':
            return word1[:-1] + word2
        elif ''.join(relevantOne) == 'VV' and ''.join(relevantTwo) == 'VV':
            return word1[:-2] + word2
        elif ''.join(relevantOne) == 'CC' and ''.join(relevantTwo) == 'CC':
            return word1[:-2] + word2
        else:
            if word1[-2:] == word2[0:2]:
                return word1[:-2] + word2
            elif word1[-1] == word2[0]:
                return word1 + word2[1:]
            else:
                return word1 + word2


    def createName(sex):
        typeOfFirstWord = choice(['adj', 'noun'])
        typeOfSecondWord = choice(['adj', 'noun'])
        firstWord = getQuenyaWord(typeOfFirstWord)

        def getEnding(sex):
            commonMaleEndings = ['ion', 'inor', 'dil', 'ndil', 'dur', 'ndur', 'mo']
            commonFemaleEndings = ['wen', 'el', 'iel', 'ien', 'isse', 'esse']
            if sex == 'male':
                end = choice(commonMaleEndings)
            if sex == 'female':
                end = choice(commonFemaleEndings)
            return end

        if (_ := randint(0, 100)) < 75:

            if len(firstWord) >= 5:
                root = getRoot(typeOfFirstWord, firstWord)
                end = getEnding(sex)
                name = converse(root, end).capitalize()

            if len(firstWord) < 5:
                while len(secondWord := getQuenyaWord(typeOfSecondWord)) > 5:
                    continue

                root = firstWord + getRoot(typeOfSecondWord, secondWord)
                end = getEnding(sex)
                name = converse(root, end).capitalize()

        else:
            name = converse(firstWord, secondWord := getQuenyaWord(typeOfSecondWord)).capitalize()

        return name


    while len(name := createName('female')) > 10:
        name = createName('female')


    def translateToRussia(name):

        toRussian = {'aya': 'айа', 'oya': 'ойф', 'eya': 'эйа', 'iya': 'ийа', 'uya': 'уйа', 'áya': 'айа', 'éya': 'эйа', 'íya': 'ийа', 'óya': 'ойа',
        'úya': 'уйа', 'ëya': 'эйа', 'öya': 'ойа', 'iu': 'иу', 'eu': 'эу', 'ai': 'ай', 'au': 'ау', 'oi': 'ой', 'ui': 'уй', 'ëo': 'эо', 'ei': 'эй', 
        'ss': 'з', 'qu': 'кв', 'ya': 'йа', 'a': 'а', 'e': 'э', 'i': 'и', 'o': 'о', 'u': 'у', 'y': 'й', 'á': 'а', 'é': 'э', 'í': 'и', 'ó': 'о', 
        'ú': 'у', 'ë': 'э', 'm': 'м', 'p': 'п', 'b': 'б', 'f': 'ф', 'v': 'в', 'w': 'в', 'n': 'н', 't': 'т', 'd': 'д', 's': 'с', 'r': 'р', 
        'l': 'л', 'j': 'дж', 'k': 'к', 'g': 'г', 'x': 'кс', 'h': 'х', 'c': 'к', 'q': 'к', 'ö': 'о', 'ҭ': 'т', 'ñ': 'нг'}

        name = name.lower()

        for key in toRussian:
            if key in name:
                name = name.replace(key, toRussian[key])
        if name[-1] == 'л':
            name = name + 'ь'

        return name.capitalize()



    return translateToRussia(name)
