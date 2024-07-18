const wifeElement = document.getElementById('wife');
const languages = [
    'esposa', '妻子', 'पत्नी', 'жена', '妻', 'Gattin', 'épouse', 'moglie', '부인', 'eş', 'vrouw', 'fru', 'kone', 'vaimo', 'kone', 'żona', 'дружина', 'manželka', 'γυναίκα', 'feleség', 'soție', 'съпруга', 'manželka', 'žena', 'жена', 'žmona', 'sieva', 'naine', 'istri', 'isteri', 'ภรรยา', 'vợ',
];

let intervalId;
let currentIndex = 0;

wifeElement.addEventListener('mouseenter', () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % languages.length;
        wifeElement.textContent = languages[currentIndex];
    }, 250);
});

wifeElement.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    wifeElement.textContent = 'wife';
});


