import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    $('#entries').append('<li>***********************************</li>');
    $('#entries').append('<li>Title: ' + entry.title + '</li>');
    $('#entries').append('<li>Text: ' + entry.body + '</li>');
    $('#entries').append('<li>Number of words: ' + entry.numOfWords() + '</li>');
    $('#entries').append('<li>Number of vowels: ' + entry.numOfVowels() + '</li>');
    $('#entries').append('<li>Number of Consonants: ' + entry.numOfConsonants() + '</li>');
    $('#entries').append('<li>Preview: ' + entry.getTeaser() + '</li>');
    $('#entries').append('<li>***********************************</li>');
    // console.log(entry.numOfWords());
    // console.log(entry.numOfVowels());
    // console.log(entry.numOfConsonants());
    // console.log(entry.getTeaser());
  });
});
