function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(list) {
    return list[randint(0, list.length - 1)]
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

class Letter {
    constructor(value) {

        this.value = value;

        let sConsons = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'л', 'м', 'н', 'р', 'к', 'п', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
        let deafCons = sConsons.slice(11)
        let alwaysHardCons = ['ж' , 'ш' , 'ц']
        let alwaysSoftCons = ['й', 'ч', 'щ']
        let firstMate = ['б', 'в', 'г', 'д', 'ж', 'з',]
        let secondMate = ['п', 'ф', 'к', 'т', 'ш', 'с']
        let gubnye = ['п', 'б', 'м']
        let gubnoZybnye = ['в', 'ф']
        let peredneYazichnye = ['т', 'д', 'с', 'з', 'н', 'л', 'ц', 'ч', 'ш', 'щ', 'ж']
        let zadneYazichnye = ['к', 'г', 'х']
        let sonor = ['р', 'л', 'м', 'н', 'й']
        // let noisy = ['б', 'в', 'г', 'д', 'ж', 'з', 'к', 'п', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ']



        let sVowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
        let emolliatingVowels = ['я', 'ю', 'ё', 'и', 'е']


        if (sVowels.indexOf(value) >= 0) {
            this.isVowel = true;
            this.isConsonant = false;
        } else if (sConsons.indexOf(value) >= 0) {
            this.isConsonant = true;
            this.isVowel = false;
        } else {
            throw Error('Wrong language!');
        }

        if (this.isVowel) {

            if (emolliatingVowels.indexOf(value) >= 0) {
                this.isEmolliatingVowel = true;
                this.isSolidifyingVowel = false;
            } else {
                this.isEmolliatingVowel = false;
                this.isSolidifyingVowel = true;
            }
        } else {
            this.isEmolliatingVowel = 'not a vowel';
            this.isSolidifyingVowel = 'not a vowel';
        }

        if (this.isConsonant) {

            if (deafCons.indexOf(value) >= 0) {
                this.isDeaf = true;
                this.isVoiced = false;
            } else {
                this.isVoiced = true;
                this.isDeaf = false;
            }

            if (sonor.indexOf(value) >= 0) {
                this.isSonor = true;
                this.isNoisy = false;
            } else {
                this.isNoisy = true;
                this.isSonor = false;
            }

            if (alwaysHardCons.indexOf(value) >= 0) {
                this.isHardCon = true;
                this.isSoftCon = false;
            } else if (alwaysSoftCons.indexOf(value) >= 0) {
                this.isSoftCon = true;
                this.isHardCon = false;
            } else {
                this.isSoftCon = 'ambivalent';
                this.isHardCon = 'ambivalent';
            }

            if (firstMate.indexOf(value) >=0) {
                this.hasPair = true;
                this.conMate = secondMate[firstMate.indexOf(value)];
            } else if (secondMate.indexOf(value) >= 0) {
                this.hasPair = true;
                this.conMate = firstMate[secondMate.indexOf(value)];
            } else {
                this.hasPair = false;
                this.conMate = 'there is no mate';
            }

            if (gubnye.indexOf(value) >= 0) {
                this.placeOfFormation = 'губно-губной'
            } else if (gubnoZybnye.indexOf(value) >= 0) {
                this.placeOfFormation = 'губно-зубной'
            } else if (peredneYazichnye.indexOf(value) >= 0) {
                this.placeOfFormation = 'передне-язычный'
            } else if (zadneYazichnye.indexOf(value) >= 0) {
                this.placeOfFormation = 'задне-язычный'
            }

        } else {
            this.isDeaf = 'not a consonant';
            this.isVoiced = 'not a consonant';
            this.isHardCon = 'not a consonant';
            this.isSoftCon = 'not a consonant';
            this.hasPair = 'not a consonant';
            this.conMate = 'not a consonant';
        }
        
    }
}

let letterA = new Letter('г')

function printer(obj) {
    if (obj.isConsonant) {
        console.log(`
        LETTER [${obj.value}]
        This consonant is: ${obj.placeOfFormation};
        Звонкая: ${obj.isVoiced};
        Глухая: ${obj.isDeaf};
        Твердая: ${obj.isHardCon};
        Мягкая: ${obj.isSoftCon};
        Сонорная: ${obj.isSonor};
        Шумная: ${obj.isNoisy};

        Парная: ${obj.hasPair};
        Пара: [${obj.conMate}];`)

    }

    if(obj.isVowel) {
        console.log(`
        LETTER [${obj.value}]
        This vowel letter is emolliating: ${obj.isEmolliatingVowel};
        This vowel letter is solidifying: ${obj.isSolidifyingVowel};
        `)
    }
}

function gen() {
    let cons = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'л', 'м', 'н', 'р', 'к', 'п', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
    let vows = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

    return choice(cons) + choice(cons) + choice(cons) + choice(vows) + choice(cons)
}

function report(string) {
    for (const letter of string.split('')) {
        obj = new Letter(letter)
        printer(obj)
        console.log('=======================')

    }
}

//console.log(gen().capitalize())
report('х')