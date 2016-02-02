function getPoints(milestone) {
  var planned = [];
  $('.card').each(function () {
    var card = $(this);
    var inMilestone = card.find('.milestone-pill:contains(' + milestone + ')').length;

    if (inMilestone) {
      var pointsText = card.find('.size-count').first().text();
      var points = 0;
      if (pointsText != "") {
        points = parseInt(pointsText, 10);
      }

      var repo = card.find('.source-name').text();
      var number = card.find('.card-number').text();
      var assignee = card.find('img').attr('tooltip');
      var title = card.find('.title').val();
      var prs = card.find('.pr-left button span').text();
      planned.push([
        'Y',  // Planned
        '',   // Completed?
        '',   // Planned + Completed
        repo,
        number,
        prs,
        points,
        assignee,
        title
      ].join('\t'));
    }
  });
  return planned;
}

console.log(getPoints(prompt("What's your milestone name?")));
