Template['quotes'].helpers({
  'quotes': function() {
    var randomQuote = _.flatten(_.sample(Quotes.find().fetch(), 1));
    return randomQuote;
  }
});
