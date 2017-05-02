require('./styles/styles.scss');

SetUp(5, 500);

function SetUp(animationTotalIterations, animationTime) {
    var animationCount = 0;

    pageSetup();
    animateTextShadow();

    var timer = setInterval(function() {
        if (animationCount > animationTotalIterations) {
            clearInterval(timer);
            animateTextShadow(true);
            return;
        }
        animateTextShadow();
        animationCount++;
    }, animationTime);
}

function pageSetup() {
    var message = 'Dev Server is up and running!',
        h1 = document.createElement('h1'),
        content = document.createTextNode(message);

    h1.appendChild(content);
    h1.id = "h1";
    document.body.insertBefore(h1, document.body.firstChild);
}

function animateTextShadow(final) {
    var h1 = document.getElementById('h1'),
        textShadowStr = '',
        vh = window.innerHeight / 2,
        vw = window.innerWidth / 2,
        numberOfShadows = 20;

    if (final) {
        h1.style.textShadow = '20px 20px 0 rgba(128,0,128,0.3)';
        h1.style.backgroundColor = getRandomBackgroundColor();
        return;
    }

    for (var i = 0; i < numberOfShadows; i++) {
        var height = getPosition(0, vh),
            width = getPosition(0, vw),
            opacity = getRandomInt(30, 70)/100,
            color = 'rgba(128, 0, 128, ' + opacity + ')';

        if (i > 0) {
            textShadowStr += ',';
        }

        textShadowStr += [height, width, '0px', color].join(' ');
    }

    h1.style.textShadow = textShadowStr;
    h1.style.backgroundColor = getRandomBackgroundColor();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPosition(min, max) {
    var num = getRandomInt(min, max);
    return num % 2 === 0 ? num + 'px': '-' + num + 'px';
}

function getRandomBackgroundColor() {
    return 'rgb('
            + getRandomInt(0,255) + ','
            + getRandomInt(0,255) + ','
            + getRandomInt(0,255) + ')';
}
