var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		chunkFilename: '[chunkhash].js',
		path: path.resolve( __dirname, 'dist' ),
		publicPath: 'dist/'
	},
	plugins: [
		new webpack.optimize.AggressiveSplittingPlugin( {
			minSize: 30000,
			maxSize: 50000
		} )
	]
}
