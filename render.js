var marked = require( 'marked' );
var MarkedTerm = require( 'marked-terminal' );
var fs = require( 'fs' );

marked.setOptions({
	renderer: new MarkedTerm()
});

function render( label, index ) {
	var filename = __dirname + '/slides/' + index + '.md';
	var content = fs.readFileSync( filename ).toString();
	console.log( marked( content ) );
};

module.exports = render;

