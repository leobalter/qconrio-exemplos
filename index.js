var Menu = require('terminal-menu');
var menu = Menu({ width: 60, x: 4, y: 2 });
var render = require('./render');

menu.reset();
menu.write('Ecossistema do JS\n');
menu.write('-------------------------\n\n');

menu.add('Intro');
menu.add('ES5 Code');
menu.add('Arrow Function & Default Parameter');
menu.add('Class');
menu.add('Generator');
menu.add('ES7 Async Function');
menu.add('Test262 Default Parameters');
menu.add('Test262 Default Parameters Complete');
menu.add('Test262 Default Parameters fn length');
menu.add('Additional Contributions');
menu.add('ES6 Template Strings');
menu.add('Exit', menu.close.bind(menu));

menu.on('select', function(l, index) {
	menu.close();
	render(l, index);
});

process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
});


