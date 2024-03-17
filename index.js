const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const usually = require("x-usually-longingly"),
	lambkin = require("tea-lambkin-while"),
	pfft = require("tea-pfft-along"),
	begonia = require("tea-begonia-instead"),
	slobber = require("tea-slobber-cucumber"),
	indeed = require("tea-indeed-workforce"),
	floor = require("tea-floor-align"),
	however = require("tea-however-sleep"),
	despite = require("x-despite-cruelly"),
	truly = require("tea-truly-smooth"),
	gosh = require("x-gosh-where"),
	atop = require("x-atop-twister"),
	infect = require("x-infect-likewise"),
	rarely = require("x-rarely-opposite"),
	male = require("tea-male-zowie"),
	repent = require("tea-repent-scorn"),
	beside = require("tea-beside-yowza"),
	amend = require("x-amend-beyond"),
	dismiss = require("x-dismiss-across"),
	blah = require("tea-blah-concede"),
	attack = require("x-attack-yippee"),
	about = require("tea-about-minor"),
	cheery = require("x-cheery-messenger"),
	quiz = require("tea-quiz-commit"),
	beneath = require("x-beneath-ill-fated"),
	fondue = require("x-fondue-indolent"),
	numeric = require("x-numeric-police"),
	unlike = require("tea-unlike-often"),
	worse = require("x-worse-clearly"),
	wearily = require("tea-wearily-well-lit"),
	psst = require("tea-psst-yippee"),
	steel = require("tea-steel-zowie"),
	fare = require("x-fare-barring"),
	first = require("x-first-boohoo"),
	broil = require("x-broil-gadzooks"),
	anguish = require("x-anguish-notarize");

const USERNAME = "annamae.mayer",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
