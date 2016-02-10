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
      var prs = $.map(
        card.find('.pr-left button span'),
        function (el) { return $(el).text(); }
      ).join(',');

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

var lines="";
for (var line of getPoints(prompt("What's your milestone name?"))) {
  lines += line + "\n";
}

console.log(lines);
