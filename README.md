# Waffle-Planner

This repo's goal is to format data from [waffle](https://waffle.io)
such that I can generate the requisite planning documents. This is
because
[waffle does not currently have an API](https://github.com/waffleio/waffle.io/issues/2233#issuecomment-178302434).

To run this, copy and paste main.js into your console. It'll ask you
for a milestone name. From there, it scrapes the page to populate the
data. You can re-run `getPoints` passing a different milestone name to
run for that specific milestone.

The output fits a spreadsheet I keep for sprint planning purposes.


**NOTE**: This does not handle the auto-loading on scroll thing that
  waffle does, so you'll need to manually scroll each column you want
  to count to ensure you're getting all the data you have.
