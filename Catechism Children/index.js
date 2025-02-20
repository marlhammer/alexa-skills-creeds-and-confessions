'use strict';

var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.4ca0ca57-f0ee-4c10-b133-b36059719624";

var cc = [
	{
	"question":"Who made you?",
	"answer":"God."
	},

	{
	"question":"What else did God make?",
	"answer":"God made all things."
	},

	{
	"question":"Why did God make you and all things ?",
	"answer":"For his own glory."
	},

	{
	"question":"How can you glorify God?",
	"answer":"By loving him and doing what he commands."
	},

	{
	"question":"Why ought you to glorify God?",
	"answer":"Because he made me and takes care of me."
	},

	{
	"question":"Are there more gods than one?",
	"answer":"There is only one God."
	},

	{
	"question":"In how many persons does this one God exist?",
	"answer":"In three persons."
	},

	{
	"question":"What are they?",
	"answer":"The Father, the Son, and the Holy Ghost."
	},

	{
	"question":"What is God?",
	"answer":"God is a Spirit, and has not a body like men."
	},

	{
	"question":"Where is God?",
	"answer":"God is everywhere."
	},

	{
	"question":"Can you see God?",
	"answer":"No; I cannot see God, but he always sees me."
	},

	{
	"question":"Does God know all things?",
	"answer":"Yes; nothing can be hid from God."
	},

	{
	"question":"Can God do all things?",
	"answer":"Yes; God can do all his holy will."
	},

	{
	"question":"Where do you learn how to love and obey God?",
	"answer":"In the Bible alone."
	},

	{
	"question":"Who wrote the Bible?",
	"answer":"Holy men who were taught by the Holy Spirit."
	},

	{
	"question":"Who were our first parents?",
	"answer":"Adam and Eve."
	},

	{
	"question":"Of what were our first parents made?",
	"answer":"God made the body of Adam out of the ground, and formed Eve from the body of Adam."
	},

	{
	"question":"What did God give Adam and Eve besides bodies?",
	"answer":"He gave them souls that could never die."
	},

	{
	"question":"Have you a soul as well as a body?",
	"answer":"Yes; I have a soul that can never die."
	},

	{
	"question":"How do you know that you have a soul?",
	"answer":"Because the Bible tells me so."
	},

	{
	"question":"In what condition did God make Adam and Eve?",
	"answer":"He made them holy and happy."
	},

	{
	"question":"What is a covenant?",
	"answer":"An agreement between two or more persons."
	},

	{
	"question":"What covenant did God make with Adam?",
	"answer":"The covenant of works."
	},

	{
	"question":"What was Adam bound to do by the covenant of works?",
	"answer":"To obey God perfectly."
	},

	{
	"question":"What did God promise in the covenant of works?",
	"answer":"To reward Adam with life if he obeyed him."
	},

	{
	"question":"What did God threaten in the covenant of works?",
	"answer":"To punish Adam with death if he disobeyed."
	},

	{
	"question":"Did Adam keep the covenant of works?",
	"answer":"No; he sinned against God."
	},

	{
	"question":"What is Sin?",
	"answer":"Sin is any want of conformity unto, or transgression of the law of God."
	},

	{
	"question":"What is meant by want of conformity?",
	"answer":"Not being or doing what God requires."
	},

	{
	"question":"What is meant by transgression?",
	"answer":"Doing what God forbids."
	},

	{
	"question":"What was the sin of our first parents?",
	"answer":"Eating the forbidden fruit."
	},

	{
	"question":"Who tempted them to this sin?",
	"answer":"The devil tempted Eve, and she gave the fruit to Adam."
	},

	{
	"question":"What befell our first parents when they had sinned?",
	"answer":"Instead of being holy and happy, they became sinful and miserable."
	},

	{
	"question":"Did Adam act for himself alone in the covenant of works?",
	"answer":"No; he represented all his posterity."
	},

	{
	"question":"What effect had the sin of Adam on all mankind?",
	"answer":"All mankind are born in a state of sin and misery."
	},

	{
	"question":"What is that sinful nature which we inherit from Adam called?",
	"answer":"Original sin."
	},

	{
	"question":"What does every sin deserve?",
	"answer":"The wrath and curse of God."
	},

	{
	"question":"Can any one go to heaven with this sinful nature?",
	"answer":"No; our hearts must be changed before we can be fit for heaven."
	},

	{
	"question":"What is a change of heart called?",
	"answer":"Regeneration."
	},

	{
	"question":"Who can change a sinner's heart?",
	"answer":"The Holy Spirit alone."
	},

	{
	"question":"Can any one be saved through the covenant of works?",
	"answer":"None can be saved through the covenant of works."
	},

	{
	"question":"Why can none be saved through the covenant of works?",
	"answer":"Because all have broken it, and are condemned by it"
	},

	{
	"question":"With whom did God the Father make the covenant of grace?",
	"answer":"With Christ, his eternal Son."
	},

	{
	"question":"Whom did Christ represent in the covenant of grace?",
	"answer":"His elect people."
	},

	{
	"question":"What did Christ undertake in the covenant of grace?",
	"answer":"To keep the whole law for his people, and to suffer the punishment due to their sins."
	},

	{
	"question":"Did our Lord Jesus Christ ever commit the least sin?",
	"answer":"No; he was holy, harmless, and undefiled."
	},

	{
	"question":"How could the Son of God suffer?",
	"answer":"Christ, the Son of God, became man that he might obey and suffer in our nature."
	},

	{
	"question":"What is meant by the Atonement?",
	"answer":"Christ's satisfying divine justice, by his sufferings and death, in the place of sinners."
	},

	{
	"question":"What did God the Father undertake in the covenant of grace?",
	"answer":"To justify and sanctify those for whom Christ should die."
	},

	{
	"question":"What is justification?",
	"answer":"It is God's forgiving sinners, and treating them as if they had never sinned."
	},

	{
	"question":"What is sanctification?",
	"answer":"It is God's making sinners holy in heart and conduct."
	},

	{
	"question":"For whom did Christ obey and suffer?",
	"answer":"For those whom the Father had given him."
	},

	{
	"question":"What kind of life did Christ live on earth?",
	"answer":"A life of poverty and suffering."
	},

	{
	"question":"What kind of death did Christ die?",
	"answer":"The painful and shameful death of the cross."
	},

	{
	"question":"Who will be saved?",
	"answer":"Only those who repent of sin, believe in Christ, and lead holy lives."
	},

	{
	"question":"What is it to repent?",
	"answer":"To be sorry for sin, and to hate and forsake it because it is displeasing to God."
	},

	{
	"question":"What is it to believe or have faith in Christ?",
	"answer":"To trust in Christ alone for salvation."
	},

	{
	"question":"Can you repent and believe in Christ by your own power?",
	"answer":"No; I can do nothing good without the help of God's Holy Spirit."
	},
	,
	{
	"question":"How can you get the help of the Holy Spirit?",
	"answer":"God has told us that we must pray to him for the Holy Spirit."
	},

	{
	"question":"How long ago is it since Christ died?",
	"answer":"More than nineteen hundred years."
	},

	{
	"question":"How were pious persons saved before the coming of Christ?",
	"answer":"By believing in a Savior to come."
	},

	{
	"question":"How did they show their faith?",
	"answer":"By offering sacrifices on God's altar."
	},

	{
	"question":"What did these sacrifices represent?",
	"answer":"Christ, the Lamb of God, who was to die for sinners."
	},

	{
	"question":"What offices has Christ?",
	"answer":"Christ has three offices."
	},

	{
	"question":"What are they?",
	"answer":"The offices of a prophet, of a priest, and of a king."
	},

	{
	"question":"How is Christ a prophet?",
	"answer":"Because he teaches us the will of God."
	},

	{
	"question":"How is Christ a priest?",
	"answer":"Because he died for our sins and pleads with God for us."
	},

	{
	"question":"How is Christ a king?",
	"answer":"Because he rules over us and defends us."
	},

	{
	"question":"Why do you need Christ as a prophet?",
	"answer":"Because I am ignorant."
	},

	{
	"question":"Why do you need Christ as a priest?",
	"answer":"Because I am guilty."
	},

	{
	"question":"Why do you need Christ as a king?",
	"answer":"Because I am weak and helpless."
	},

	{
	"question":"How many commandments did God give on Mount Sinai?",
	"answer":"Ten commandments."
	},

	{
	"question":"What are the ten commandments sometimes called?",
	"answer":"The Decalogue."
	},

	{
	"question":"What do the first four commandments teach?",
	"answer":"Our duty to God."
	},

	{
	"question":"What do the last six commandments teach?",
	"answer":"Our duty to our fellow men."
	},

	{
	"question":"What is the sum of the ten commandments?",
	"answer":"To love God with all my heart, and my neighbor as myself."
	},

	{
	"question":"Who is your neighbor?",
	"answer":"All my fellow men are my neighbors."
	},

	{
	"question":"Is God pleased with those who love and obey him?",
	"answer":"Yes; he says, I love them that love me."
	},

	{
	"question":"Is God displeased with those who do not love and obey him?",
	"answer":"Yes; God is angry with the wicked every day."
	},

	{
	"question":"What is the first commandment?",
	"answer":"The first commandment is, Thou shalt have no other gods before me."
	},

	{
	"question":"What does the first commandment teach us?",
	"answer":"To worship God alone."
	},

	{
	"question":"What is the second commandment?",
	"answer":"The second commandment is, Thou shalt not make unto thee any graven image, or any likeness of any things that is in heaven above, or that is in the earth beneath, or that is in the water under the earth; thou shalt not bow down thyself to them, nor serve them: for I, the Lord thy God, am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; and showing mercy unto thousands of them that love me, and keep my commandments."
	},

	{
	"question":"What does the second commandment teach us?",
	"answer":"To worship God in a proper manner, and to avoid idolatry."
	},

	{
	"question":"What is the third commandment?",
	"answer":"The third commandment is, Thou shalt not take the name of the Lord thy God in vain: for the Lord will not hold him guiltless that taketh his name in vain."
	},

	{
	"question":"What does the third commandment teach me?",
	"answer":"To reverence God's name, word, and works."
	},

	{
	"question":"What is the fourth commandment?",
	"answer":"The fourth commandment is, Remember the Sabbath day to keep it holy. Six days shalt thou labor, and do all thy work, but the seventh day is the Sabbath of the Lord thy God; in it thou shalt not do any work, thou, nor thy son, nor thy daughter, nor thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: for in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day; wherefore the Lord blessed the Sabbath Day, and hallowed it."
	},

	{
	"question":"What does the fourth commandment teach us?",
	"answer":"To keep the Sabbath holy."
	},

	{
	"question":"What day of the week is the Christian Sabbath?",
	"answer":"The first day of the week, called the Lord's day."
	},

	{
	"question":"Why is it called the Lord's day?",
	"answer":"Because on that day Christ rose from the dead."
	},

	{
	"question":"How should the Sabbath be spent?",
	"answer":"In prayer and praise, in hearing and reading God's Word, and in doing good to our fellow men."
	},

	{
	"question":"What is the fifth commandment?",
	"answer":"The fifth commandment is, Honor thy father and thy mother, that thy days may be long upon the land which the Lord thy God giveth thee."
	},

	{
	"question":"What does the fifth commandment teach me?",
	"answer":"To love and obey our parents and teachers."
	},

	{
	"question":"What is the sixth commandment?",
	"answer":"The sixth commandment is, Thou shalt not kill."
	},

	{
	"question":"What does the sixth commandment teach us?",
	"answer":"To avoid angry passions."
	},

	{
	"question":"What is the seventh commandment?",
	"answer":"The seventh commandment is, Thou shalt not commit adultery."
	},

	{
	"question":"What does the seventh commandment teach us?",
	"answer":"To be pure in heart, language, and conduct."
	},

	{
	"question":"What is the eighth commandment?",
	"answer":"The eighth commandment is, Thou shalt not steal."
	},

	{
	"question":"What does the eighth commandment teach us?",
	"answer":"To be honest and industrious."
	},

	{
	"question":"What is the ninth commandment?",
	"answer":"The ninth commandment is, Thou shalt not bear false witness against thy neighbor."
	},

	{
	"question":"What does the ninth commandment teach us?",
	"answer":"To tell the truth."
	},

	{
	"question":"What is the tenth commandment?",
	"answer":"The tenth commandment is, Thou shalt not covet thy neighbor's house, thou shalt not covet thy neighbor's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbor's."
	},

	{
	"question":"What does the tenth commandment teach us?",
	"answer":"To be content with our lot."
	},

	{
	"question":"Can any man keep these ten commandments perfectly?",
	"answer":"No mere man, since the fall of Adam, ever did or can keep the ten commandments perfectly."
	},

	{
	"question":"Of what use are the ten commandments to us?",
	"answer":"They teach us our duty, and show our need of a Savior."
	},

	{
	"question":"What is prayer?",
	"answer":"Prayer is asking God for things which he has promised to give."
	},

	{
	"question":"In whose name should we pray?",
	"answer":"Only in the name of Christ."
	},

	{
	"question":"What has Christ given us to teach us how to pray?",
	"answer":"The Lord's Prayer."
	},

	{
	"question":"Repeat the Lord's Prayer.",
	"answer":"Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen."
	},

	{
	"question":"How many petitions are there in The Lord's Prayer?",
	"answer":"Six."
	},

	{
	"question":"What is the first petition?",
	"answer":"Hallowed be thy name."
	},

	{
	"question":"What do we pray for in the first petition?",
	"answer":"That God's name may be honored by us and all men."
	},

	{
	"question":"What is the second petition?",
	"answer":"Thy kingdom come."
	},

	{
	"question":"What do we pray for in the second petition?",
	"answer":"That the gospel may be preached in all the world, and believed and obeyed by us and all men."
	},

	{
	"question":"What is the third petition?",
	"answer":"Thy will be done in earth, as it is in heaven."
	},

	{
	"question":"What do we pray for in the third petition?",
	"answer":"That men on earth may serve God as the angels do in heaven."
	},

	{
	"question":"What is the fourth petition?",
	"answer":"Give us this day our daily bread."
	},

	{
	"question":"What do we pray for in the fourth petition?",
	"answer":"That God would give us all things needful for our bodies and souls."
	},

	{
	"question":"What is the fifth petition?",
	"answer":"And forgive us our debts, as we forgive our debtors."
	},

	{
	"question":"What do we pray for in the fifth petition?",
	"answer":"That God would pardon our sins for Christ's sake, and enable us to forgive those who have injured us."
	},

	{
	"question":"What is the sixth petition?",
	"answer":"And lead us not into temptation, but deliver us from evil."
	},

	{
	"question":"What do we pray for in the sixth petition?",
	"answer":"That God would keep us from sin."
	},

	{
	"question":"How many sacraments are there?",
	"answer":"Two."
	},

	{
	"question":"What are they?",
	"answer":"Baptism and the Lord's Supper."
	},

	{
	"question":"Who appointed these sacraments?",
	"answer":"The Lord Jesus Christ."
	},

	{
	"question":"Why did Christ appoint these sacraments?",
	"answer":"To distinguish his disciples from the world, and to comfort and strengthen them."
	},

	{
	"question":"What sign is used in baptism?",
	"answer":"The washing with water."
	},

	{
	"question":"What does this signify?",
	"answer":"That we are cleansed from sin by the blood of Christ."
	},

	{
	"question":"In whose name are we baptized?",
	"answer":"In the name of the Father, and of the Son, and of the Holy Ghost."
	},

	{
	"question":"Who are to be baptized?",
	"answer":"Believers and their children."
	},

	{
	"question":"Why should infants be baptized?",
	"answer":"Because they have a sinful nature and need a Savior."
	},

	{
	"question":"Does Christ care for little children?",
	"answer":"Yes; for he says, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God."
	},

	{
	"question":"To what does your baptism bind you?",
	"answer":"To be a true follower of Christ."
	},

	{
	"question":"What is the Lord's Supper?",
	"answer":"The eating of bread and drinking of wine in remembrance of the sufferings and death of Christ."
	},

	{
	"question":"What does the bread represent?",
	"answer":"The body of Christ, broken for our sins."
	},

	{
	"question":"What does the wine represent?",
	"answer":"The blood of Christ, shed for our salvation."
	},

	{
	"question":"Who should partake of the Lord's Supper?",
	"answer":"Only those who repent of their sins, believe in Christ for salvation, and love their fellow men."
	},

	{
	"question":"Did Christ remain in the tomb after his crucifixion?",
	"answer":"No; he rose from the tomb on the third day after his death."
	},

	{
	"question":"Where is Christ now?",
	"answer":"In heaven, interceding for sinners."
	},

	{
	"question":"Will he come again?",
	"answer":"Yes; at the last day Christ will come to judge the world."
	},

	{
	"question":"What becomes of men at death?",
	"answer":"The body returns to dust, and the soul goes into the world of spirits."
	},

	{
	"question":"Will the bodies of the dead be raised to life again?",
	"answer":"Yes; The trumpet shall sound, and the dead shall be raised."
	},

	{
	"question":"What will become of the wicked in the day of judgment?",
	"answer":"They shall be cast into hell."
	},

	{
	"question":"What is hell?",
	"answer":"A place of dreadful and endless torment."
	},

	{
	"question":"What will become of the righteous?",
	"answer":"They shall be taken to heaven."
	},

	{
	"question":"What is heaven?",
	"answer":"A glorious and happy place, where the righteous shall be forever with the Lord."
	}
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', "Good bye!");
    },
    'CCIntent': function () {
		var question = this.event.request.intent.slots.question.value;

        var error = '';

        if (!question) {
            error = "I did not hear what question you wanted to hear.";
            this.emit(':tellWithCard', error, "Children's Catechism", error);
            return;
        }

        if (isNaN(question)) {
            error = "I did not understand what question you wanted to hear.";
            this.emit(':tellWithCard', error, "Children's Catechism", error);
            return;
        }

		if (question < 1 || question > 145) {
            error = "Please ask for a question between one and one hundred forty five.";
            this.emit(':tellWithCard', error, "Children's Catechism", error);
            return;
		}

		var question_data = cc[question - 1];

        var speech = "Question. " + question_data.question + " Answer. " + question_data.answer;

        this.emit(':tellWithCard', speech, "Children's Catechism", speech);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', "You can say things like, what is question one, or, tell me question one", "What can I help you with?");
    },
	'AMAZON.FallbackIntent': function () {
		this.emit(':ask', "You can say things like, what is question one, or, tell me question one", "What can I help you with?");
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', "OK!");
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', "OK!");
    },
    'AMAZON.NavigateHomeIntent': function () {
        this.emit(':tell', "OK!");
    }
};
